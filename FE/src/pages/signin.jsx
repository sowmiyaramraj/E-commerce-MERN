import React,{useState,useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Card from "@mui/material/Card";
import "./pages.css"
import Signup from "./signup";
import {Link} from "react-router-dom";

export default function Signin(){
    const navigate=useNavigate();
    const [formdata,setFormdata]=useState({
        email:"",
        password:"",
    });
    const handleSubmit=async(e)=>{
        e.preventdefault();
        const responce=await axios.post("http://localhost:3001/register/signin",{...formdata});
        if(responce.data){
            navigate("/");
        }

    }
    return(
        <div className="Signin">
            <Card className="card">
            <form onSubmit={(e)=>handleSubmit(e)}>
            <label style={{alignContent:"center"}} className="text">Signin</label><br/>
            {/* <lable >Enter your E-mail</lable> */}
            <br/>
            <input className="field" placeholder="Email" type="email" name="email" value={formdata.email}
            onChange={(e)=>setFormdata({...formdata,email:e.target.value})} />
            {/* <lable >Password your password</lable> */}
            <br/>
            <input className="field" placeholder="Password" type="password" name="password" value={formdata.password}
            onChange={(e)=>setFormdata({...formdata,password:e.target.value})}/>
            <br/>
            <button className="submit" type="submit">Submit</button><br/>
            
            </form>
            <h5>Don't have account <span>
            <Link to="/signup">Signup</Link></span></h5>
            </Card>
        </div>
    );

}