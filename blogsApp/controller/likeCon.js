const { default: mongoose } = require('mongoose');
const postsModel = require('../models/postsModel');
const likesModel = require('../models/likesModel');
exports.likeController=async (req,res)=>{
    const postId=req.params.postId;
    try{
        const find=await postsModel.find({_id:postId});
        if(find){
            console.log(find);
            const filter={postId:postId};
            try{
                const findLike=await likesModel.findOne(filter);
                const update={liked:!findLike.liked}
                const updatedLike=await likesModel.updateOne(filter,update);
            }
           catch(error){
            res.status(500).json({
                message:"internal server error"
            })
           }
            res.status(200).json({
                message:"liked updated successfully!",
            })
        }
        else{
           res.status(404).json({
            message:"given id post is not found!"
           })
        }
    }catch(error){
        console.log(error);
    }

}


