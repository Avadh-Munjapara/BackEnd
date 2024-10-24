const express=require('express');
const app=express();
const dbConnect=require("./config/database");
const todoRoute=require('./routes/toDos')

require('dotenv').config();

app.use(express.json());

const port=process.env.PORT || 3000;
app.use('/api/v1',todoRoute);
app.get('/',(req,res)=>{
    res.send(`<h1>this is homepage</h1>`)
})

app.listen(port,()=>{
    console.log('server is running on port 1111');
});

dbConnect();