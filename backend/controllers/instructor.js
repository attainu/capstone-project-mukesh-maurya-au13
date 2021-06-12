const Mcq = require("./../model/mcqSchema");

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
