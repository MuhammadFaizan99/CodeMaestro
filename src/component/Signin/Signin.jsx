import React, { useState } from "react";
import styles from "./Signin.module.css";
import { Email, Lock } from "@mui/icons-material";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    Email: "",
    Password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}users/sign-in`, formData);
      const { token } = response.data;
      localStorage.setItem("token", token); // Save token in localStorage
      toast.success("Sign in successful"); 
      navigate("/")
    } catch (error) {
      console.error("Error signing in:", error);
      toast.error("Sign in failed"); // Show error message
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Sign In</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <Email className={styles.icon} />
            <input
              type="email"
              id="email"
              name="Email"
              placeholder="Enter your email"
              className={styles.input}
              value={formData.Email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <Lock className={styles.icon} />
            <input
              type="password"
              id="password"
              name="Password"
              placeholder="Enter your password"
              className={styles.input}
              value={formData.Password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Sign In
          </button>
        </form>
      </div>
      <div className={styles.imageContainer}>
        <img src="../../../assets/signin-image.jpg" alt="Signin" className={styles.image} />
      </div>
      <ToastContainer /> {/* Toastify container */}
    </div>
  );
};

export default Signin;
