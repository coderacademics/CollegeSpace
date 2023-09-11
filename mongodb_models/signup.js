const  mongoose =require('mongoose')
mongoose.set('strictQuery',true)
const { Schema } = mongoose;

const userSignupSchema = new Schema({
  username:{
    type : String,
    require : true,
    unique:false
  },
  userEmailAddress:{
    type: String,
    require : true,
    unique : true
  },
  name:{
    type:String,
    require: true,
  },
  password:{
    type:String,
    require: true,
  },
  cpassword:{
    type:String,
    require:true
  },
  date_of_birth:{
    type: Date,
    require: true
  },
  department:{
    type:String,
    require: true
  },
  institute:{
    type:String,
    require: true
  }
});

// const Signup=mongoose.model('UserSignup',userSignupSchema);
module.exports=userSignupSchema;