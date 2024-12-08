const express=require('express');
const app=express();
require('dotenv').config();
app.use(express.json());
const fileUpload = require('express-fileupload');
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
const cloudinaryConnect=require('./config/cloudinary');
cloudinaryConnect();
const fileRoutes=require('./routes/fileRoutes');
app.use('/api/v1/upload',fileRoutes);
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log('server started');
})
const dbConnect=require('./config/database');
dbConnect();