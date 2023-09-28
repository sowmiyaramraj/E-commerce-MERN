import React, { useEffect, useState } from "react";
import phone from "../images/phone.jpeg";
// import axios from "axios";


// export default function Products(){
//     const [products,setProducts]= useState([]);
//     useEffect(()=>{
//         async function listProduct(){
//             const responce=axios.get(`http://localhost:3001/product/get`);
//             setProducts(responce.data);
//         }
//         listProduct();
//     },[]);
//     // return(
//     //     <div>

//     //     </div>
//     // );
// }
 



export const Products=[{
        productName:"mobile phone1",
        productId:1,
        productImage:phone,
        productPrice:100,
        count:0,
        },
        {
            productName:"mobile phone2",
            productId:2,
            productImage:phone,
            productPrice:100,
            count:0,
            },
            {
                productName:"mobile phone3",
                productId:3,
                productImage:phone,
                productPrice:100,
                count:0,
                }]