const { response } = require('express');
const fileModel = require('../models/fileModel');

const cloudinary=require('cloudinary').v2;

exports.localFileUpload=async (req,res) => {
    try {
        const file=req.files.file;
        const fileNmae=file.name;
        const path=__dirname+"/files/"+`${Date.now()}`+`.${fileNmae.split('.')[1]}`;
        file.mv(path,(error)=>{
            console.log(error);
        });
        return res.status(200).json({
            message:"file uploaded successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"not able to upload file on server"
        })
    }
}
function validateFile(name,supported){
    return supported.includes(name);
}
async function cloudinaryFileUploader(path,options,quality){
    if(quality){
        options.quality=quality
    }
    return await cloudinary.uploader.upload(path,options);
}
exports.imageUpload=async (req,res)=>{
    try{
        const{name,email,tags}=req.body;
        const file=req.files.imageFile;
        const supported=['jpg','jpeg','png'];
        const fileType=file.name.split('.')[1];
        if(!validateFile(fileType,supported)){
            return res.status(400).json({
                message:'file type is not supported',
                success:false
            })
        }
        const options={
            folder:"kinetic"
        }
        let response=await cloudinaryFileUploader(file.tempFilePath,options);
        console.log(response);
        fileModel.create({
            name,email,tags,fileUrl:response.secure_url
        }
        )
        return res.status(200).json({
            success:true,
            message:"file created successfully"
        })
    }catch(error){
        console.log(error);
    }
}

exports.imageReduceUpload=async (req,res)=>{
    try{
        const{name,email,tags}=req.body;
        const file=req.files.imageFile;
        const supported=['jpg','jpeg','png'];
        const fileType=file.name.split('.')[1];
        if(!validateFile(fileType,supported)){
            return res.status(400).json({
                message:'file type is not supported',
                success:false
            })
        }
        const options={
            folder:"kinetic",
        }
        let response=await cloudinaryFileUploader(file.tempFilePath,options,60);
        console.log(response);
        fileModel.create({
            name,email,tags,fileUrl:response.secure_url
        }
        )
        return res.status(200).json({
            success:true,
            message:"file created successfully"
        })
    }catch(error){
        console.log(error);
    }
}

exports.videoUpload=async (req,res)=>{
    try{
        const{name,email,tags}=req.body;
        const file=req.files.videoFile;
        const supported=['mov','mp4'];
        const fileType=file.name.split('.')[1].toLowerCase();
        if(!validateFile(fileType,supported)){
            return res.status(400).json({
                message:'file type is not supported',
                success:false
            })
        }
        const options={
            folder:"kinetic",
            resource_type :'auto'
        }
        let response=await cloudinaryFileUploader(file.tempFilePath,options);
        console.log(response);
        fileModel.create({
            name,email,tags,fileUrl:response.secure_url
        }
        )
        return res.status(200).json({
            success:true,
            message:"file created successfully"
        })
    }catch(error){
        console.log(error);
    }
}