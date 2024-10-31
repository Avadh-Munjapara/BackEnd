const { signUpController } = require('../controllers/Auth');
const express=require('express');
const router=express.Router();
router.post('/signUp',signUpController);
module.exports=router;