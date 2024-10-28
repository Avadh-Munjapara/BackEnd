const mongoose = require("mongoose");
require('dotenv').config();
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected successfully");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports=connectDb;