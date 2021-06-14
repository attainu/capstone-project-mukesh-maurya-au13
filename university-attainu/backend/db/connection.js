const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/university-attainu")

const dB = process.env.DATABASE;
mongoose
  .connect(dB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => console.log(err));
