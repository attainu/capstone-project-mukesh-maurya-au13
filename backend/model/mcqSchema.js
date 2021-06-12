const mongoose = require('mongoose');

const mcqSchema = new mongoose.Schema({
    ques: {
        type: String,
        required: true,
        trim: true,
    },
    options: {
        type: [{}],
        required: true,
        trim: true,
    },
    correctAnswer: {
        type: String,
        required: true,
        trim: true,
    },
    expiresAt: {
        type: Date,
        default: Date.now() + 3 * 60 * 1000,
    }
},
    { timestamps: true },
);


const Mcq = mongoose.model('mcqs', mcqSchema);
module.exports = Mcq;