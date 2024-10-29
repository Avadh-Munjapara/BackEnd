const { default: mongoose } = require('mongoose');

const schema=mongoose.Schema;
const postSchema=new schema({
    title:{
        type:String,
        required:true,
        maxLength:50
    },
    content:{
        type:String,
        required:true,
        maxLength:150
    },
    likes:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"like"
    },
    comments:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'comment'
    }
})

module.exports=mongoose.model('post',postSchema);