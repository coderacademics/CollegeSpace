const multer=require('multer');

const FileUploadDiskStorage = multer.diskStorage({
    destination:(req,file,callback) =>{
        callback(null,'./client/uploads')
    },
    filename:(req,file,callback)=>{
        callback(null,Date.now().toLocaleString()+'--'+file.originalname);
    }
});

const upload=multer({storage:FileUploadDiskStorage}).single('image');
module.exports=upload;