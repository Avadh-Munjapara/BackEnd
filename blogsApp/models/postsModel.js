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
    }
})

module.exports=mongoose.model('post',postSchema);