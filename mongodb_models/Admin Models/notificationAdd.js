const { default: mongoose } = require("mongoose");
const {Schema } =mongoose;

const notificationSchema = new Schema(
    {
        notificationName:{
            type : String,
            require: true,
            unique : true
        },
        notificationDetails:{
            type : String,
            require: true
        },
        notificationDate:{
            type: Date,
            require: true
        }
    }
);

module.exports=notificationSchema;
