const post=require('../models/postsModel');
const like=require('../models/likesModel')
exports.createPost=async (req,res)=>{
    try{
    const newPost=new post({
        title:req.body.title,
        content:req.body.content
    });
        await newPost.save();
        const newLike=new like({
            postId:newPost._id
        })
        await newLike.save();
        res.send(newPost);
    }catch(error){
        res.status(500).json({
            error:error.message,
            message:"server error"
        });
        console.log(error);
    }
}
 
