const User = require("./../model/userSchema");
const fs = require("fs");
const quesModel = require("./../model/quesSchema");
const Mcq = require("./../model/mcqSchema");
const Pagination = require("../features/pagination");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};

  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });
  return newObj;
};

//get user profile
exports.getUserProfile = async (req, res, next) => {
  const user = await User.findOne({ email: req.user.email });
  console.log(user);
  if (!user) {
    return next(
      res.status(404).json({ status: "fail", message: "No such user exists" })
    );
  }
  return res.status(200).json({ status: "success", userInfo: user });
};

//update user data
exports.userUpdate = async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      res.status(403).json({
        status: "fail",
        message: "This route is not password update, please use updatePassword",
      })
    );
  }

  /// filtered out the unwanted field names that are not allowed to be updated
  const filteredBody = filterObj(req.body, "name", "email", "phone");

  //update user document, update role is not allowed(only admin can update the role)
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });
  return res.status(200).json({
    status: "success",
    user: {
      updatedUser,
    },
  });
};

//delete a user
exports.deactivateUser = async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { isActive: false });
  res.status(204).json({
    status: "success",
    data: null,
  });
};

//get all questions
exports.allques = async (req, res) => {
  try {
    const feature = new Pagination(quesModel.find(), req.query).paginate();
    const data = await feature.query;
    if (!data) {
      console.log("nothing");
    } else {
      res.status(200).json({
        res: data.length,
        status: "success",
        data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//download a quest
exports.downloadFile = async (req, res) => {
  const file = await quesModel.findById({ _id: req.params.id });
  console.log(file);
  const files = fs.createReadStream(`${file.picPath}`);
  res.writeHead(200, {
    "Content-disposition": `attachment; filename=${file.picPath}`,
  });
  files.pipe(res);
};

//mark mcq

exports.getMcq = async (req, res) => {
  try {
    const mcq = await Mcq.find({});
    if (!mcq) {
      res.status(400).json({ message: "no mcq created" });
    } else {
      res.status(200).json({ mcq });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.markMcq = async (req, res) => {
  const mcq = await Mcq.findById(req.params.id);
  if (!mcq) {
    return res.status(400).json({ message: "no mcq found" });
  }
  const { options } = req.body;

  console.log(options, mcq);
};
