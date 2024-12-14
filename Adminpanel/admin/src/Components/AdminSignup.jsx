import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
const AdminSignup=()=>{
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
    });

    const handleChange=(e)=>{
        const {name, value} = e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]:value,
        }));
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log("form data is ", formData);
        // api end point 
        const Api = 'http://localhost:3000/admin/signup';
        try{
            const response = await axios.post(Api, formData);
            console.log("Admin Signup Successful", response.data);
            Swal.fire({
                title:"Registered Successfull!!!",
                icon:"success"
            });
            navigate('/login');
        }
        catch(error){
            if(error.response){
                console.log("Admin Signedup Failed", error.response.data);
            }
            else if(error.request){
                console.log("No Response From Server", error.request);
            }
            else{
                console.log("Error During Admin Signup", error.message);
            }
        }
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Admin Registration Panel....</h1>
                <lable>Enter Name</lable><br></br>
                <input type="text" name="name" value={formData.name} onChange={handleChange}/><br></br>
                <lable>Enter Email</lable><br></br>
                <input type="email" name="email" value={formData.email} onChange={handleChange}/><br></br>
                <lable>Enter Password</lable><br></br>
                <input type="password" name="password" value={formData.password} onChange={handleChange}/><br></br>
                <button>Register</button>
                <p>If already Registered <Link to='/login'>Click</Link> here to login.</p>
            </form>
        </div>
    )
};
export default AdminSignup;