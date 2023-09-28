import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import { AlignCenterVertical, SignIn } from "phosphor-react";
import "./pages.css";
import {Link} from "react-router-dom";

export default function Signup(){
    const navigate=useNavigate();
    const [formdata,setFormdata]=useState({
        name:"",
        phno:"",
        email:"",
        password:"",
        confirmpassword:"",
        address:"",
    });

    const handleSubmit=async(e)=>{
        e.preventdefault();
        const responce=await axios.post("http://localhost:3001/register/signup",{
            name:formdata.name,
            email:formdata.email,
            phno:formdata.phno,
            adress:formdata.address,
            password:formdata.address,
            confirmpassword:formdata.confirmpassword,
        })
        setFormdata([...formdata,responce.data]);
        navigate("/");
        
    }
    return(
        <div className="Signup">
           <Card className="card1">
            
           
            <form  onSubmit={(e)=>handleSubmit(e)}>
            <div className="inputs">
                <lable className="text">Signup</lable><br/><br/>
               
                {/* <lable>Name</lable>&nbsp;&nbsp; */}
                <input className="field" placeholder="Enter your Name" name="name" value={formdata.name} type="text" 
                onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/><br/>

                {/* <lable>phone number</lable>&nbsp;&nbsp; */}
                <input className="field" placeholder="Enter your Mobile Number" name="phno" value={formdata.phno} type="number" 
                onChange={(e)=>setFormdata({...formdata,phno:e.target.value})}/><br/>

                {/* <lable>Address</lable>&nbsp;&nbsp; */}
                {/* <input className="field" name="address" value={formdata.address} type="string" 
                onChange={(e)=>setFormdata({...formdata,address:e.target.value})}/><br/> */}

                {/* <lable>Email</lable>&nbsp;&nbsp; */}
                <input className="field" placeholder="Enter your Email" name="email" value={formdata.email} type="email" 
                onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/><br/>

                {/* <lable>Password</lable>&nbsp;&nbsp; */}
                <input className="field" placeholder="Set your Password" name="password" value={formdata.password} type="password" 
                onChange={(e)=>setFormdata({...formdata,password:e.target.value})}/><br/>

                {/* <lable>confirm Password</lable>&nbsp;&nbsp; */}
                <input className="field" placeholder="Re-type your Password" name="confirmpassword" value={formdata.confirmpassword} type="password" 
                onChange={(e)=>setFormdata({...formdata,confirmpassword:e.target.value})}/><br/>
                <button className="submit" type="submit">Submit</button>
                </div>
            </form>
           <h5> Have a Account <span><Link to="/signin">Signin</Link></span></h5>
            </Card>
           
           
        </div>
    );
}