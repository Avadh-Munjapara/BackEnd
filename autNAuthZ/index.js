const dbconnect=require('./config/database');
const userRoutes=require('./routes/user')
const express=require('express');
const app=express();
const cookie_parser=require('cookie-parser');
app.use(cookie_parser());
require('dotenv').config();
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
app.use(express.json());
app.use('/api/v1',userRoutes);
dbconnect();