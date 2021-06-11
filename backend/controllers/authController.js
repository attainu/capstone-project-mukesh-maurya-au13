const crypto = require("crypto");
const User = require("./../model/userSchema");
const jwt = require("jsonwebtoken");
const sendEmail = require("./../email");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: "90d",
  });
};

const cookieOptions = {
  expires: new Date(
    Date.now() + 30 * 24 * 60 * 60 * 1000
  ),
  // secure: true //only  in prod env
  httpOnly: true,
};
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  //send  a cookie
  res.cookie("jwt", token, cookieOptions);

  //remove password from output
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      passwordChangedAt: req.body.passwordChangedAt,
      role: req.body.role,
    });

    createSendToken(newUser, 201, res);

  } catch (error) {
    return res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

//login users
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  //if email and password exist
  if (!email || !password) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide email and password",
    });
    next();
  }

  // check if email and password is correct
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(401).json({
      status: "fail",
      message: "email or password mismatch",
    });
    next();
  }
  //if everthing is ok then send token to client
  createSendToken(user, 200, res);
};

//protecting all 
exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({
      status: "fail",
      message: "You are not logged in, please login in!",
    });
  }

  //   const decoded = await promisify(jwt.verify)(token, process.env.SECRET_KEY)
  //   console.log(decoded)
  let decoded = {};
  jwt.verify(token, process.env.SECRET_KEY, function (err, data) {
    if (!err) {
      decoded = data;
    } else {
      return;
    }
  });

  if (!decoded.id) {
    return next(
      res.status(401).json({
        status: "fail",
        message: "Invlaid token or token expired, please try to login again!",
      })
    );
  }

  // check if user exists or not
  const checkUser = await User.findById(decoded.id);
  if (!checkUser) {
    return next(
      res.status(401).json({
        status: "fail",
        message: "User belonging to this token no longer exists",
      })
    );
  }

  if (checkUser.passwordChangedAfter(decoded.iat)) {
    return res.status(401).json({
      status: "fail",
      message: "Password changed recently, please login again!",
    });
  }

  //GRANT ACCESS TO PROTECTED ROUTE
  req.user = checkUser;
  console.log(req.user);
  next();
};

exports.restrictTo = (req, res, next) => {
  // return (req, res, next) => {
    //only admin
    if (req.user && req.user.role === 'admin') {
      next();
      
    }else {
      return res.status(403).json({
        status: "fail",
        message: "You do not have an access to this!",
      });
    }
  };
// };

//forgot & reset password
exports.forgotPassword = async (req, res, next) => {
  try {
  
    const email = req.body.email;
    const user = await User.findOne({ email });
    if (!user) {
      return next(
        res.status(404).json({ message: "user not found, plz check" })
      );
    }
    const resetToken = user.createPasswordResetToken();
    user.save({ validateBeforeSave: false });

    const resetURL = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/users/resetPassword/${resetToken}`;

    const message = `Forgot your password? Submit you new password and confirmPassword at: ${resetURL}.\n If you do remember your password please ignore the link! Thank you`;
    console.log(resetToken);

    await sendEmail({
      email: user.email,
      subject: "Your password reset Token (valid for 10 min)",
      message,
    });
  
    res.status(200).json({
      status: "success",
      message: "Token sent to email",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(
      res
        .status(404)
        .json({message: "there was an error while sending the email!" })
    );
  }
};

exports.resetPassword = async (req, res, next) => {
  const hashToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) {
    return next(res.status(400).json({ message: "Token has been expired" }));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  createSendToken(user, 200, res);
};

exports.updatePassword = async (req, res, next) => {
  const user = await User.findById(req.user._id).select("+password");
  if (!user) {
    return next(res.status(404).json({ message: "no such user is found" }));
  }

  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(
      res.status(400).json({ message: "Your current password is wrong" })
    );
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  createSendToken(user, 200, res);
};
