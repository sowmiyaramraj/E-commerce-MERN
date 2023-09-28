const express = require("express");
const usermodel = require("../model/usermodel");

module.exports.createUser=async(req,res,next)=>{
    try{
        const create= new usermodel(req.body);
        await create.save();
        console.log("saved");
    }
    catch(err){
        res.statusa(500).send(err);
    }

    
}

module.exports.getUser=async(req,res,next)=>{
    try
    {const get= usermodel.findOne({email:req.body.email})
    .then(function(data){
        res.send(data);
        console.log(data);
    })}
    catch(err){
        res.statusa(500).send(err);        
    }   
}

module.exports.deleteUser=async(req,res,next)=>{
    try
    {const deleteddata=await usermodel.findOneAndDelete(req.params.id)
    .then(function(data){
        res.send(data);
    })}
    catch(err){
        res.statusa(500).send(err);
    }
}

module.exports.updateUser=async(req,res,next)=>{
    try{
        const update=await usermodel.findByIdAndUpdate(req.params.id,{$set: {...req.body}});
            res.send(data);       
    }
    catch(err){
        res.statusa(500).send(err);
    }
}