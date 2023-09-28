import React,{useContext} from "react";
import {Products} from "../components/products";
import { ShopContext } from "../context/shop-context";
import { CartItem } from "./cartitem";

export const Cart=()=>{
    const {cartItem,addtocart}=useContext(ShopContext);

    return(
        <div>
           {Products.map((product=>{
            
            if(cartItem[product.productId] !== 0){
                return <CartItem data={product}/>
            }else{
                <p>No item to display</p>
            }
           }))}
        </div>
        );
}
