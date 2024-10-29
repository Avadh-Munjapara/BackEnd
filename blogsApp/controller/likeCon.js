const postsModel = require('../models/postsModel');
const likesModel = require('../models/likesModel');
exports.likeController=async (req,res)=>{
    const postId=req.params.postId;
    try{
        const find=await postsModel.findById(postId);
        if(find){
            const filter={postId:postId};
            const findLike=await likesModel.findOne(filter);
            console.log(findLike);
            if(findLike){
                res.json({
                    message:"post is already liked"
                })
            }
            else{
                const newLike=new likesModel({
                    postId:postId,
                    liked:true
                })
                await newLike.save();
                res.status(200).json({
                    message:"post liked successfully!",
                })
            }
        }
        else{
           res.status(404).json({
            message:"given id post is not found!"
           })
        }
    }catch(error){
        res.status(500).json({
            error:error.message,
            message:"internal server error"
        })
        console.log(error);
    }

}

exports.unLikeController=async (req,res)=>{
    const postId=req.params.postId;
    try{
        const find=await postsModel.findById(postId);
        if(find){
            console.log(find);
            const filter={postId:postId};
            const findLike=await likesModel.findOne(filter);
            if(findLike){

                const delLike=await likesModel.findOneAndDelete(filter);
                res.json({
                    message:"post is unliked successfully"
                })
            }else{
                res.json({
                    message:"post is alreay unliked",
                })
            }
           
        }
        else{
           res.status(404).json({
            message:"given id post is not found!"
           })
        }
    }catch(error){
        res.status(500).json({
            error:error.message,
            message:"internal server error"
        })
        console.log(error);
    }


}
