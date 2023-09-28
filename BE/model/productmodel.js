const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const ProductSchema= new Schema({
    productName:{
        type:String,
        require:true,
    },
    productId:{
        type:Number,
        reuire:true,
    },
   
    productPrice:{
        type:Number,
        require:true,
    },
    productWishlist:{
        type:Number,
    },
    productCart:{
        type:Number,
    },
});

const product= mongoose.model("Product",ProductSchema,"product");
module.exports=product;