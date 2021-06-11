const multer = require("multer");
const quesModel = require("./../model/quesSchema");
const User = require("./../model/userSchema");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    cb(null, `image-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: storage,
});

exports.uploadUserPhoto = upload.single("picPath"),

exports.upload =  async (req, res) => {
  const question = await quesModel.findOne({ day: req.body.day });
  if (question) {
    return res
      .status(400)
      .send({
        status: "fail",
        message: "for this day cc or assignment has already been uploaded",
      });
  }

  const newQuestion = await quesModel.create({
    day: req.body.day,
    picPath: req.file.filename,
  });
  return res.status(201).json({ status: "success", newQuestion });
};

//get all the users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      status: "success",
      res: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

//delete a users
exports.deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if(user) {
    await user.remove();
    return res.json({message: 'User removed'});
  }else {
    return res.status(404).json({message: 'User not found'});
  }
}