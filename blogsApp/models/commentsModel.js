const mongoose=require('mongoose');
const commentSchema=new mongoose.Schema({
    type:String,
    maxLength:100
})

module.exports=mongoose.model('comment',commentSchema);