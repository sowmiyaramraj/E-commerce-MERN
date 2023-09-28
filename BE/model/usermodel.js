const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const Usermodel = new Schema({
    name:{
        type:String,
        require:true,
    },
   id:{
    type:Number,
    reuire:true,
    },
    mobilenumber:{
        type:Number,
        reuire:true,
    },
    email:{
        type:String,
        reuire:true,
    },
    password:{
        type:String,
        reuire:true,
    },
    confirmpassword:{
        type:String,
        reuire:true,
    },
})

const user=mongoose.model("User",Usermodel);
module.exports=user;