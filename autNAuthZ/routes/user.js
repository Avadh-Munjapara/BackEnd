const { signUpController,loginController } = require('../controllers/Auth');
const express=require('express');
const router=express.Router();
const {authe,isStudent,isAdmin}=require('../middlewares/authMiddle');
router.post('/signUp',signUpController);
router.get('/login',loginController);
router.get('/student',authe,isStudent,(req,res,next)=>{
    return res.status(200).json({
        success:true,
        message:'welcome to student path'
    })
});
router.get('/admin',authe,isAdmin,(req,res,next)=>{
    return res.status(200).json({
        success:true,
        message:'welcome to admin path'
    })
});
module.exports=router;