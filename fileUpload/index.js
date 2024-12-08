const express=require('express');
const app=express();
require('dotenv').config();
app.use(express.json());
const fileUpload = require('express-fileupload');
app.use(fileUpload());
const fileRoutes=require('./routes/fileRoutes');
app.use('/api/v1/upload',fileRoutes);
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log('server started');
})
