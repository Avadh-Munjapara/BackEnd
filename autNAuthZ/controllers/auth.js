const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const user=require('../models/userModel')
require('dotenv').config();
exports.signUpController=async (req,res)=>{
    const {name,email,password}=req.body;
    try{
        const existedUser=await user.findOne({email});
        if(existedUser){
            return res.status(400).json({
                success:false,
                message:'user already registered'
            })
        }
        let hashPassword;
        try {
            hashPassword=await bcrypt.hash(password,10);
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:'error while hasing the password'
            })
        }

        const newUser=await user.create({name,email,password:hashPassword})
        return res.status(201).json({
            success:true,
            message:"user created successfully",
            user:user
        })

    }catch(error){
        return res.status(500).json({
            message:"error while communicating with databases",
            success:fasle
        })
    }
}


exports.loginController=async (req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({
                success:false,
                message:"email or password is not provided"
            })
        }
        const existedUser=await user.findOne({email});
        if(!existedUser){
            return res.status(404).json({
                success:false,
                message:"not registerd user"
            })
        }
    
        if(await bcrypt.compare(password,existedUser.password)){
    
            const payload={
                email,id:existedUser._id,role:"student"
            }
            const token=jwt.sign(payload,process.env.JWT_TOKEN);
            return res.status(200).json({
                success:true,
                message:"login successful",
                token
            })
        }
    }catch(error){
        return res.status(500).json({
            success:false,
            message:'error while login'
        })
    }
   
}