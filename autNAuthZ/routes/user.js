const { signUpController,loginController } = require('../controllers/Auth');
const express=require('express');
const router=express.Router();
router.post('/signUp',signUpController);
router.get('/login',loginController);
module.exports=router;