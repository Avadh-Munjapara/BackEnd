const mongoose = require("mongoose");
require("dotenv").config();

 const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connection to database is successful!!!");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports=dbConnect;
