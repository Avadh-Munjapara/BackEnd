const { default: mongoose } = require("mongoose");
const post = require("../models/postsModel");
const postsModel = require("../models/postsModel");
const commentsModel = require("../models/commentsModel");
exports.createPost = async (req, res) => {
  try {
    const newPost = new post({
      title: req.body.title,
      content: req.body.content,
    });
    await newPost.save();
    res.send(newPost);
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "server error",
    });
    console.log(error);
  }
};

exports.fetchAllPosts=async (req,res)=>{
    try{
        const posts=await postsModel.find().populate("comments").populate("likes");
        res.status(200).json({
            data:posts
        })
    }catch(error){

        res.status(500).json({
            message:"interanl server error",
            error:error.message
        })
      
    }
}
