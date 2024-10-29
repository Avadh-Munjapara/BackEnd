const commentsModel = require("../models/commentsModel")

exports.createCommentCon=async (req,res)=>{
    try {
        const { comment } = req.body;
        const {postId}=req.params;
        const newComment=new commentsModel(
            {postId:postId},{comment:comment}
        );
        await newComment.save();
        res.status(201).json({message:"Comment created successfully",comment:comment})
    } catch (error) {
        res.status(500).json({
            error:error.message,
            message:"internal server error"
        })
    }
}

exports.deleteCommentCon=async (req,res)=>{
    try {
        const postId=req.params.postId;
        const deletedComment=await commentsModel.findOneAndDelete({postId:postId});
        res.status(201).json({message:"Comment deleted successfully"})
    } catch (error) {
        res.status(500).json({
            message:"internal server error"
        })
    }
}