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
                if(findLike.liked===true){
                    res.json({
                        message:"post is already liked"
                    })
                }
                const update={liked:true}
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

exports.unLikeController=async (req,res)=>{
    const postId=req.params.postId;
    try{
        const find=await postsModel.find({_id:postId});
        if(find){
            console.log(find);
            const filter={postId:postId};
            try{
                const findLike=await likesModel.findOne(filter);
                if(findLike.liked===false){
                    res.json({
                        message:"post is already unliked"
                    })
                }
                const update={liked:false}
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
