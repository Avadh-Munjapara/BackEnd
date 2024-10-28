const express=require('express');
const connectDb=require('./config/database');
const app=express();
const routes=require('./routes/blogsRoutes');
require('dotenv').config();
const port=process.env.PORT||5000;
app.use(express.json());
app.listen(port,()=>{
    console.log("server started successfully");
})
app.use('/api/v1',routes);
connectDb();