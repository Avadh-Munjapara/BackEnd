const todo=require('../models/toDo');
exports.getTodo=async (req,res)=>{
    try{
        const todos=await todo.find({});
        if(todos){
          return res.status(200).json({
                success:true,
                message:"all todos",
                data:todos
            });

        }
        res.status(404).json({
            message:"no data available",
            success:false
        })
    }catch(error){
        res.status(404).json({
            message:"error while fetching data",
            success:false
        })
    }
}


exports.getTodoById=async (req,res)=>{
    try{
        const id=req.params.id;
        const toDo=await todo.findById({_id:id});
        if(toDo){
            return res.status(200).json({
                data:toDo,
                message:"todo found",
                success:true
            })
        }
        res.status(404).json({
            message:"todo not found with specified id",
            success:false
        })

    }catch(error){
        console.log(error);
        res.status(500).json({
            error:error.message,
            message:"server error"
        })
        
    }
}