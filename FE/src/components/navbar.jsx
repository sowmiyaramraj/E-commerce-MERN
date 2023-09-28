import React from "react";
import {Link} from "react-router-dom";
import { ShoppingCart,Heart } from "phosphor-react";
import "./components.css";
export const Navbar=()=>{

    return(
        <div className="navbar">
            <div className="link">
                <Link to="/">shop</Link>
                <Link to="/cart">
                    <ShoppingCart/>
                </Link>
                <Link to="/wishlist"><Heart/></Link>
            </div>

        </div>
    );

}