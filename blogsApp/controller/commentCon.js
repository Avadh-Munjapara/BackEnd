const commentsModel = require("../models/commentsModel")
const postsModel=require('../models/postsModel')
exports.createCommentCon=async (req,res)=>{

    const {postId}=req.params;
    try{
        const findPost=await postsModel.findById(postId);
        if(findPost){
            const newComment=new commentsModel({
                postId:postId,
                comment:req.body.comment,
            })
            await newComment.save();
            res.status(200).json({message:"Comment created successfully",data:newComment});
        }else{
            res.status(404).json({message:"Post not found"})
        }
    }catch(error){
        res.status(500).json({
            error:error.message,
            message:"internal server error"
        })
    }
}   

exports.deleteCommentCon=async (req,res)=>{
    const {postId,commentId}=req.params;
    try{
        const findPost=await postsModel.findById(postId);
        if(findPost){
            const findComment=await commentsModel.findById(commentId);
            console.log(findComment);
            if(findComment){
                try{
                    const delComment=await commentsModel.findByIdAndDelete(commentId);
                    res.status(200).json({message:"Comment deleted successfully",data:delComment});
                }
                catch(error){
                    res.status(500).json({
                        error:error.message
                    })
                }
            }else{
                res.status(404).json({
                    message:"no comment found"
                })
            }
        }else{
            res.status(404).json({message:"Post not found"})
        }
    }catch(error){
        res.status(500).json({
            error:error.message,
            message:"internal server error"
        })
    }
}