const express= require("express");
const router=express.Router();
const {createPost}=require('../controller/postCon');
const { likeController } = require("../controller/likeCon");
router.post('/createPost',createPost);
router.put('/likePost/:postId',likeController);
module.exports=router;