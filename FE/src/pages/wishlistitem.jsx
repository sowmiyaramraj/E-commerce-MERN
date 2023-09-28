import React,{useContext} from "react";
import { product } from "../components/products";
import { ShopContext } from "../context/shop-context";

export const Wishlistitem=(props)=>{
    const {cartItem,addtowistlist,removefromwistlist}=useContext(ShopContext);
    const {productName,productId,productImage,productPrice}=props.data;

    return(
        <div>
           <p>{productName}</p>
            <p>{productId}</p>
            <p>{productPrice}</p>
        </div>
    );
}