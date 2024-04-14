import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './UploadPapers.module.css';

export default function UploadPapers() {
  const [paperName, setPaperName] = useState('');
  const [paperDescription, setPaperDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('Title', paperName);
      formData.append('Description', paperDescription);
      formData.append('Image', file);

      const accessToken = localStorage.getItem('token'); // Assuming you store the token in localStorage
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `bearer ${accessToken}`
        }
      };

      await axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}papers/create-paper`, formData, config);

      toast.success('Papers uploaded successfully');
    } catch (error) {
      console.error('Error uploading papers:', error);
      toast.error('Failed to upload papers');
    }
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Upload Papers</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="papername"
              name="Title"
              placeholder="Enter your Paper Name"
              className={styles.input}
              value={paperName}
              onChange={(e) => setPaperName(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              id="paperdescription"
              name="Description"
              placeholder="Enter your Paper Description"
              className={styles.textarea}
              value={paperDescription}
              onChange={(e) => setPaperDescription(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="file"
              id="upload"
              name="Image"
              className={styles.fileInput}
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Upload Papers
          </button>
        </form>
      </div>
      <div className={styles.imageContainer}>
        <img src="../../../assets/signup-image (1).jpg" alt="Signup" className={styles.image} />
      </div>
      <ToastContainer />
    </div>
  );
}