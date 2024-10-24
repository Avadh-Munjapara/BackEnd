const express=require('express');
const app=express();

app.use(express.json());

app.listen(1111,()=>{
    console.log('server is running on port 1111');
});

app.get('/',(req,res)=>{
    res.send("hello ji!")
})

const dbConnect=require("./config/database");
dbConnect();