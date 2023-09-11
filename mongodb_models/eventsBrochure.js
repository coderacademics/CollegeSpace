import mongoose from "mongoose";
const Schema = mongoose();

const eventBrochureSchema= new Schema({
    uploaddate:{
        type : now(),
        offset: now().getTimezoneOffset(),
        require : true
    },
    brochure:{
        data : Buffer,
        brochureFileName: String,
        contentType: String,
    }
})

module.exports=eventBrochureSchema;