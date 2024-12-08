const { default: mongoose } = require("mongoose");
const fileSchema=mongoose.Schema({
    name:{type:String,requried:true},
    email:{type:String},
    fileUrl:{type:String},
    tags:{type:String}
})
module.exports=mongoose.model('file',fileSchema);