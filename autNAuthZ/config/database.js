const mongoose=require('mongoose');
require('dotenv').config();

const dbConnect=async ()=>{
    try {
        await mongoose.connect(process.env.DBURI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("dbconnetion successful");
    } catch (error) {
        console.log(error);
    }
}

module.exports=dbConnect;