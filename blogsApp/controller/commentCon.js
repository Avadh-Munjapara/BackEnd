const commentsModel = require("../models/commentsModel")
const postsModel=require('../models/postsModel')
exports.createCommentCon=async (req,res)=>{

    const {post,body,user}=req.body;
    try{
        const findPost=await postsModel.findById(post);
        if(findPost){
            const newComment=new commentsModel({
                post:post,
                body:body,
                user:user
            })
            const comment=await newComment.save();

            const updatedPost=await postsModel.findByIdAndUpdate(post,{$push:{comments:comment._id}},{new:true});

            res.status(200).json({message:"Comment created successfully",data:updatedPost});
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
    const {post,comment}=req.body;
    try{
        const findPost=await postsModel.findById(post);
        if(findPost){
            const findComment=await commentsModel.findById(comment);
            if(findComment){
                try{
                    const delComment=await commentsModel.findByIdAndDelete(comment);
                    const updatedPost=await postsModel.findByIdAndUpdate(post,{$pull:{comments:delComment._id}},{new:true});
                    res.status(200).json({message:"Comment deleted successfully",data:updatedPost});
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