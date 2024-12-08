const  express  = require("express"); 
const router=express.Router();
const {localFileUpload,imageUpload,imageReduceUpload,videoUpload}=require('../controllers/fileUploadControllers')
router.post('/localFileUpload',localFileUpload);
router.post('/imageUpload',imageUpload);
router.post('/imageReduceUpload',imageReduceUpload);
router.post('/videoUpload',videoUpload);
module.exports=router;