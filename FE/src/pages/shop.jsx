import React from "react";
import {Products} from "../components/products";
import {Product} from "./product";
import Register from "./register";
export const Shop=()=>{
    return(
        <div className="shop">
            <div>
                <h1>Mayoon shopping</h1>
                <Register/>
            </div>
            <div>
                {" "}
                {Products.map((product)=>(
                    <Product key={product.productId} data={product}/>
                     
                ))}
            </div>
           
        </div>
    );
}