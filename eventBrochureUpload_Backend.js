const multer=require('multer');

const FileUploadDiskStorage = multer.diskStorage({
    destination:(req,file,callback) =>{
        callback(null,'./client/uploads')
    },
    filename:(req,file,callback)=>{
        callback(null,Date.now().toLocaleString()+'--'+file.originalname);
    }
});

const brochureUpload=multer({storage:FileUploadDiskStorage}).single('brochure');
module.exports=brochureUpload;