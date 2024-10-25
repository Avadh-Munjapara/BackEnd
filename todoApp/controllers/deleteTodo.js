const todo=require('../models/toDo');

exports.deleteTodo=async (req,res)=>{
    try{
        const id=req.params.id;
        const toDo=await todo.findByIdAndDelete({_id:id});
        if(toDo){
            return res.status(200).json({
                data:toDo,
                message:"deleted successfully",
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