const dbconnect=require('./config/database');
const express=require('express');
const app=express();
require('dotenv').config();
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
app.use(express.json());
dbconnect();