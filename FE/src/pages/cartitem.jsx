import React,{ useContext } from "react";
import { ShopContext } from "../context/shop-context";

export const CartItem=(props)=>{
    const {productName,productId,productImage,productPrice}=props.data;
    const {addtocart,cartItem,removefromcart,updatecartitemcount}=useContext(ShopContext);
    return(
        <div>
            <p>{productName}</p>
            <p>{productId}</p>
            <p>{productPrice}</p>
            <button onClick={()=>addtocart(productId)}>+</button>
            <input value={cartItem[productId]} onChange={(e)=>updatecartitemcount(Number(e.target.value) ,productId)}/>
            <button onClick={()=>removefromcart(productId)}>-</button>


        </div>
    );
}