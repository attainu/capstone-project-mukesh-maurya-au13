const quesModel = require("./../model/quesSchema");
const multer = require("multer");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `image-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
});

exports.uploadUserPhoto = upload.single("picPath");

exports.assignment = async (req, res) => {
    const question = await quesModel.findOne({day: req.body.day});
    if(question) {
        return res.status(400).send({status:'fail'});
    }

    const newQuestion = await quesModel.create({
        day: req.body.day,
        picPath: req.file.filename,
    });
    return res.status(201).json({status:'success'});
}
