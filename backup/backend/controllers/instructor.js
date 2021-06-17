const Mcq = require("./../model/mcqSchema");
const Attend = require("./../model/attendanceSchema");

exports.createMcq = async (req, res) => {
  try {
    const { ques, options, correctAnswer } = req.body;

    const createQues = await Mcq.create({
      ques,
      options,
      correctAnswer,
    });
    res.status(201).json({ message: "created mcq", createQues });
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
};




exports.createAttendance = async (req, res) => {
  const number = await Attend.countDocuments();
  console.log(number);
  try {
    const attendance = await Attend.find({});
    console.log(attendance);
    if(number > 0) {
      const check = attendance.expiresAt > attendance.createdAt;
      console.log(check);
      if(!check){
         return res.status(404).json({ status: "fail", message: 'Attendance can be created after 30 mins!'});
      }
    }else {
      const createAttend = await Attend.create({
        review: req.body.review,
        ratings: req.body.ratings,
        topicsCovered: req.body.topicsCovered,
      });
      
      
      return res
      .status(201)
      .json({ status: "success", message: "Attendance has been created" });

    }

      
    } 
    
    
    catch (error) {
      return res.status(400);
      throw new Error(error);
    }
  };

