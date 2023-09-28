import React from "react";
import {Link} from "react-router-dom";

import {useNavigate} from "react-router-dom";

export default function Register(){
    const navigate=useNavigate();

    const signin=()=>{
        navigate("/signin");
        }
        const signup=()=>{
            navigate("/signup");
            }

    return(
        <div>
     <Link to="/signin">Signin</Link>
     <Link to="/signup">Signup</Link>


        </div>
    );
}