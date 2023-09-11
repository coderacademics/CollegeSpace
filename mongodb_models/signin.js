import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSigninSchema = new Schema({
  username:{
    type : String,
    require : true,
    unique : true
  },
  password:{
    type:String,
    require: true,
  }
});

module.exports=userSigninSchema;