import React, { useContext, useState } from "react";
import { Cart } from "./cart";
import { ShopContext } from "../context/shop-context";

export const Product=(props)=>{
    const {cartItem,addtocart,addtowishlist}=useContext(ShopContext);
    const {productName,productId,productImage,productPrice}=props.data;
    const amount=cartItem[productId];

    return(
        <div>
            <div>
            <img src={productImage}/>
            </div>
            <div>
                
                <p>{productId}</p>
                <p>{productName}</p>
                <p>₹{productPrice} </p>
                <button className="addtocart" 
                onClick={()=>addtocart(productId)}>
                buy{amount>0 && <>({amount})</>}
                    </button>
                    <button onClick={(e)=>addtowishlist(e,productId)} >add to wishlist</button>
                   
                    
            </div>

           
        </div>
    );
}