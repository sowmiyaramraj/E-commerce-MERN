const express= require("express");
const usermodel= require("../model/usermodel");

module.exports.signup=async(req,res,next)=>{
    try{
        const existuser= await usermodel.findOne({email:req.body.email})
        .then(function(data){
            if(data.email){
                res.status(400).send({msg:"you are a exist user please signin"})
            }
            const issamepassword=checkPassword(req.body.passWord,req.body.confirmPassWord);
            if(!issamepassword)
               { return res.status(400).send({msg:"password doesnot match"});}
            
            else{
                delete req.body.confirmPassWord;
            }

            const signupuser=async(req,res,next)=>{
                const create= new usermodel(req.body);
                await create.save();
                res.send(create);
            }
        })
    }
    catch(err){
        console.error(err);
        res.status(500).send(err);
    }

}
const checkPassword=(passWord,confirmPassWord)=>{
    return passWord !== confirmPassWord ? false : true;
    };

    module.exports.signin=async (req,res,next)=>{
        const existuser=await usermodel.findOne({email:req.body.email})
        .then(function(data){            
            if(!existuser){
                return res.status(400).send({msg:"you are not a exist user"});
             }
     if(!issamepassword){
         res.status(400).send({msg:"wrong password"});
     }
     res.send(data);  
        })    
    };