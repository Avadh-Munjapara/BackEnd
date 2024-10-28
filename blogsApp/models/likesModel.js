const mongoose=require('mongoose');
const likeSchema=new mongoose.Schema({
    postId:{
        type:String,
        required:true
    },
    liked:{
        type:Boolean,
        default:false
    }
   
})

module.exports=mongoose.model('like',likeSchema);