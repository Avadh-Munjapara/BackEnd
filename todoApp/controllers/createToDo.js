const todo=require('../models/toDo')

const createToDo=async (req,res)=>{
    try{
        const {title,description}=req.body;
        const newTodo=new todo({
            title:title,
            description:description
        });
        await newTodo.save();
        res.status(200).json({
            success:true,
            data:newTodo,
            message:"Todo created successfully",
        })

    }catch(err){
        console.log("error while communicate with database");
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:"Error while creating todo",
        })
    }
 
    
}

module.exports=createToDo;