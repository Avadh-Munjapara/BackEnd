const bcrypt=require('bcrypt');

const user=require('../models/userModel')
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