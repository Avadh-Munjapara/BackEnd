const commentsModel = require("../models/commentsModel")

exports.createCommentCon=async (req,res)=>{
    try {
        const { comment } = req.body;
        const postId=req.params.postId;
        const newComment=await commentsModel.findOneAndUpdate({postId:postId},{comment:comment});
        await newComment.save();
        res.status(201).json({message:"Comment created successfully",comment:comment})
    } catch (error) {
        res.status(500).json({
            message:"internal server error"
        })
    }
}