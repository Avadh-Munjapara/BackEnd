const { default: mongoose } = require("mongoose");
const fileSchema=mongoose.Schema({
    name:{type:String,requried:true},
})