const  express  = require("express"); 
const router=express.Router();
const {localFileUpload,imageUpload,imageReduceUpload}=require('../controllers/fileUploadControllers')
router.post('/localFileUpload',localFileUpload);
router.post('/imageUpload',imageUpload);
router.post('/imageReduceUpload',imageReduceUpload);
module.exports=router;