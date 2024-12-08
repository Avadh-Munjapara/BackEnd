const cloudinary=require('cloudinary').v2;
require('dotenv').config();
const cloudinaryConnect=()=>{
    try{
        cloudinary.config({
            cloud_name:process.env.CLOUDNAME,
            api_key:process.env.CLOUDAPIKEY,
            api_secret:process.env.CLOUDAPISECRET
        });
    }catch(error){
        console.log(error);
    }
}
module.exports=cloudinaryConnect;