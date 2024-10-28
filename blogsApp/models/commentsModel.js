const mongoose=require('mongoose');
const commentSchema=new mongoose.Schema({
   postId:{
    type:String,
    required:true
   },
   comment:{
    type:String,
    maxLength:150,
    default:""
   }
})

module.exports=mongoose.model('comment',commentSchema);