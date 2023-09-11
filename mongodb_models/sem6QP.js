import mongoose from "mongoose";
const Schema = mongoose();

const sem6QPSchema= new Schema({
    uploaddate:{
        type : now(),
        offset: now().getTimezoneOffset(),
        require : true
    },
    image:{
        type : Buffer,
        require : true
    }
})


module.exports=sem6QPSchema;