

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./AdminSignup.css";

const AdminSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data is ", formData);

    // API endpoint
    const Api = "http://localhost:3000/admin/signup";
    try {
      const response = await axios.post(Api, formData);
      console.log("Admin Signup Successful", response.data);

      // Success SweetAlert
      Swal.fire({
        title: "Registration Successful!",
        text: "You have been registered as Admin.",
        icon: "success",
        confirmButtonText: "Go to Login",
      }).then(() => {
        navigate("/login");
      });
    } catch (error) {
      if (error.response) {
        console.log("Admin Signup Failed", error.response.data);

        // Error SweetAlert with custom message
        Swal.fire({
          title: "Registration Failed!",
          text: error.response.data.message || "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonText: "Retry",
        });
      } else if (error.request) {
        console.log("No Response From Server", error.request);

        Swal.fire({
          title: "Server Error!",
          text: "No response from server. Please try again later.",
          icon: "warning",
          confirmButtonText: "Okay",
        });
      } else {
        console.log("Error During Admin Signup", error.message);

        Swal.fire({
          title: "Error!",
          text: "An unexpected error occurred. Please try again.",
          icon: "error",
          confirmButtonText: "Retry",
        });
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Admin Registration</h1>
        <label>Enter Name :</label>
        <br />
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <br />
        <label>Enter Email :</label>
        <br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <br />
        <label>Enter Password :</label>
        <br />
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <br />
        <button type="submit">Register</button>
        <p>
          If already Registered <Link to="/login">Click</Link> here to login.
        </p>
      </form>
    </div>
  );
};

export default AdminSignup;
