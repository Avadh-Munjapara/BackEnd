const express= require("express");
const router=express.Router();
const {createPost}=require('../controller/postCon');
const { likeController, unLikeController } = require("../controller/likeCon");
router.post('/createPost',createPost);
router.put('/likePost/:postId',likeController);
router.put('/unLikePost/:postId',unLikeController);
module.exports=router;