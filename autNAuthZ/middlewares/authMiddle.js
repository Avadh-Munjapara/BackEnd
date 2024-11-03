const jwt=require('jsonwebtoken');

require('dotenv').config();

exports.authe=async (req,res,next)=>{ 
   const token=req.body.token||req.cookies.token||req.header('Authorization').replace('Bearer ',"");
   console.log(req.body);
   console.log(req.cookies.token);
   console.log(req.header('Authorization'));
     if(jwt.verify(token,process.env.JWT_TOKEN)){
      next();
     }else{
      return res.status(400).json({
         success:false,
         message:'token not found'
      })
     }
      
   
};


exports.isStudent=async(req,res,next)=>{
   const token=req.body.token||req.cookies.token||req.header('Authorization').replace('Bearer ',"");
    const decode=jwt.decode(token);
   if(decode.role!='student') {
      return res.status(401).json({
         success:false,
         message:"the user is not authorized to access the student path"
      }
      )
   }  
   next();
}

exports.isAdmin=async(req,res,next)=>{
   const token=req.body.token||req.cookies.token||req.header('Authorization').replace('Bearer ',"");
   const decode=jwt.decode(token);
  if(decode.role!='admin') {
     return res.status(401).json({
        success:false,
        message:"the user is not authorized to access the admin path"
     }
     )
  }  
  next();
}