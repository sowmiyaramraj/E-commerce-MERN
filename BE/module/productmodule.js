const express=require("express");
const productmodel=require("../model/productmodel");

// create product
module.exports.createproduct=async(req,res,next)=>{
   try{
    const create= new productmodel(req.body);
await create.save();
if(create.productId==5)
{console.log(create.productId);
    res.send("5");}
   }
   catch(err){
    res.status(500).send(err);
   }
}
// get product
module.exports.getproduct=(req,res,next)=>{
    try{
        const findproduct = productmodel.find({})
        .then(function(Product){
                res.send(Product)
                console.log(Product.productPrice);
            });
        // const findproduct = productmodel
        // .findOne({productName : req.body.productName})
        // .then(function(Product){
        //     res.send(Product)
        //     console.log(Product.productPrice);
        // if((Product.productPrice)<=1000){
        //     console.log("low");
        // }
    // });
    }
    catch(err){
        console.log("error");
        res.status(500).send(err);
    }
}
// update product
module.exports.updateproduct=(req,res,next)=>{
    try{
        const query=req.params.productId
       const findproduct = productmodel
        .findByIdAndUpdate(query,{ $set:  {...req.body} }
        )
        console.log("came")
        res.send("came");
        
        // .then(function(Product){
        //     res.send(Product)
        //     console.log(Product);});
    }
    catch(err){
        console.log("error");
        res.status(500).send(err);
    }
}

// delete product
module.exports.deleteproduct=(req,res,next)=>{
    try{
        const deletedData = productmodel.findOneAndDelete(req.params.id)
        .then(function(resp){
            res.send(resp);
        console.log("deletedData");
        });
    }
    catch(err){
        console.log("error");
        res.status(500).send(err);
    }
}