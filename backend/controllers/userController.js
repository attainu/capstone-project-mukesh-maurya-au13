const User = require("./../model/userSchema");
const fs = require("fs");
const quesModel = require("./../model/quesSchema");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });
  return newObj;
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

  //update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });
  return res.status(200).json({
    status: 'success',
    user: {
      updatedUser
    }
  })
};

//delete a user
exports.deleteUser = async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, {isActive: false});
  res.status(204).json({
    status: 'success',
    data: null
  });
}

//get all questions
app.get("/allques", async (req, res) => {
  const data = await quesModel.find({});
  if (!data) {
    console.log("nothing");
  } else {
    res.status(200).json({
      status: "success",
      data,
    });
  }
});

//download a quest
app.get("/downloadFile/:id", async (req, res) => {
  const file = await quesModel.findById({ _id: req.params.id });
  console.log(file);
  const files = fs.createReadStream(`${file.picPath}`);
  res.writeHead(200, {
    "Content-disposition": `attachment; filename=${file.picPath}`,
  }); 
  files.pipe(res);
});
