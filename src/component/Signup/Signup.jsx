import React, { useState } from "react";
import styles from "./Signup.module.css";
import { AccountCircle, Email, Lock } from "@mui/icons-material";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}users/sign-up`, formData);
      console.log(response.data);
      toast.success("Sign up successful"); // Show success message
      navigate("/sign-in")
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("Sign up failed"); // Show error message
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Sign Up</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <AccountCircle className={styles.icon} />
            <input
              type="text"
              id="username"
              name="Name"
              placeholder="Enter your username"
              className={styles.input}
              value={formData.Name}
              onChange={handleChange}
            />
          </div>
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
          <div className={styles.formGroup}>
            <Lock className={styles.icon} />
            <input
              type="password"
              id="confirmPassword"
              name="ConfirmPassword"
              placeholder="Enter your confirm password"
              className={styles.input}
              value={formData.ConfirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Sign Up
          </button>
        </form>
      </div>
      <div className={styles.imageContainer}>
        <img src="../../../assets/signup-image (1).jpg" alt="Signup" className={styles.image} />
      </div>
      <ToastContainer /> {/* Toastify container */}
    </div>
  );
};

export default Signup;
