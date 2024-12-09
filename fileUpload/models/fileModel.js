const { default: mongoose } = require("mongoose");
const fileSchema=mongoose.Schema({
    name:{type:String,requried:true},
    email:{type:String},
    fileUrl:{type:String},
    tags:{type:String}
})
const {transporter}=require('../config/nodemailer');
fileSchema.post('save',(doc)=>{
    try {
        mailOptions={
            from:"kinetic",
            to:"a.fearless2511@gmail.com",
            subject:"you have uploaded file to cloudinary",
            html:`<h1>upload file recently on cloudinary</h2>
            </br>
            <p>Here is the file</p>
            </br>
            <a href=${doc.fileUrl}>${doc.fileUrl}</a>`
        }
        transporter.sendMail(mailOptions);
    } catch (error) {
        console.log(error);
    }
    
})

const file=mongoose.model('file',fileSchema);
module.exports=file;