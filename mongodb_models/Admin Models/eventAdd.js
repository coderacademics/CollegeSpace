const { default: mongoose } = require("mongoose");
const {Schema } =mongoose;

const eventSchema = new Schema(
    {
        eventName:{
            type : String,
            require: true,
            unique : true
        },
        eventDetails:{
            type : String,
            require: true
        },
        eventLink:{
            type : String,
            require: true,
            unique : true
        }
    }
);

module.exports=eventSchema;
