const express= require("express");
const router=express.Router();
const {createPost, fetchAllPosts}=require('../controller/postCon');
const { likeController, unLikeController } = require("../controller/likeCon");
const { createCommentCon, deleteCommentCon } = require("../controller/commentCon");
router.get('/posts',fetchAllPosts)
router.post('/createPost',createPost);
router.post('/likes/like',likeController);
router.delete('/likes/unLike',unLikeController);
router.post('/comments/createComment',createCommentCon);
router.delete('/comments/deleteComment',deleteCommentCon);
module.exports=router;