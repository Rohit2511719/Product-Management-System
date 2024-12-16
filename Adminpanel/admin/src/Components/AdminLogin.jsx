import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
    const Api = "http://localhost:3000/admin/login";

    try {
      const response = await axios.post(Api, formData);
      console.log("Login Successful", response.data);

      // Success SweetAlert
      Swal.fire({
        title: "Login Successful!",
        text: "Welcome to the Admin Dashboard.",
        icon: "success",
        confirmButtonText: "Go to Dashboard",
      }).then(() => {
        navigate("/dashboard"); // Redirect to dashboard after successful login
      });
    } catch (error) {
      if (error.response) {
        console.log("Login Failed", error.response.data);

        // Error SweetAlert
        Swal.fire({
          title: "Login Failed!",
          text: error.response.data.message || "Invalid credentials. Please try again.",
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
        console.log("Error During Login", error.message);

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
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
        <label>Enter Email :</label>
        <br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <br />
        <label>Enter Password :</label>
        <br />
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <br />
        <button type="submit">Login</button>
        <p>
          Not registered yet? <Link to="/signup">Click</Link> here to sign up.
        </p>
      </form>
    </div>
  );
};

export default Login;
