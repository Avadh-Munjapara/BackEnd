
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