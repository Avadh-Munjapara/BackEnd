const postsModel = require('../models/postsModel');
const likesModel = require('../models/likesModel');
exports.likeController=async (req,res)=>{
    const {post,user}=req.body;
    try{
        const find=await postsModel.findById(post);
        if(find){
            const filter={user:user};
            const findLike=await likesModel.findOne(filter);
            if(findLike){
                res.json({
                    message:"post is already liked",
                    data:findLike
                })
            }
            else{
                const newLike=new likesModel({
                    post:post,
                    user:user
                })
                await newLike.save();

                const updatedPost=await postsModel.findByIdAndUpdate(newLike.post,{$push:{likes:newLike._id}},{new:true});
                
                res.status(200).json({
                    message:"post liked successfully!",
                    data:newLike
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
    const {post,like}=req.body;
    try{
        const find=await postsModel.findById(post);
        if(find){
            const findLike=await likesModel.findById(like);
            if(findLike){
                const delLike=await likesModel.findByIdAndDelete(like);
                const updatedPost=await postsModel.findByIdAndUpdate(delLike.post,{$pull:{likes:delLike._id}},{new:true});
                
                res.status(200).json({
                    message:"post unliked successfully!",
                    data:updatedPost
                })

            }
            else{
                res.json({
                    message:"post is already unliked",
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
