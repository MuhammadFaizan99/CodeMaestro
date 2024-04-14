import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams hook
import FullPapersStyles from './FullPapers.module.css';
import { Facebook, Twitter, Share } from '@mui/icons-material';

export default function FullPapers() {
  const [paper, setPaper] = useState(null);
  const { id } = useParams(); // Extract paper ID using useParams hook

  useEffect(() => {
    const fetchPaper = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}papers/get-paper/${id}`);
        setPaper(response.data);
      } catch (error) {
        console.error('Error fetching paper:', error);
      }
    };

    fetchPaper();
  }, [id]); 

  if (!paper) {
    return <div>Loading...</div>; // Display loading state while fetching paper details
  }

  return (
    <div className={FullPapersStyles.container}>
      <h1 className={FullPapersStyles.title}>{paper.Title}</h1>
      <div className={FullPapersStyles.header}>
        <div className={FullPapersStyles.author}>{paper.createdBy.Name}</div> {/* Replace with actual author */}
        <div className={FullPapersStyles.socialIcons}>
          <Facebook className={FullPapersStyles.icon} />
          <Twitter className={FullPapersStyles.icon} />
          <Share className={FullPapersStyles.icon} />
        </div>
      </div>
      <img src={`http://localhost:3000/${paper.Image}`} alt="Meditation" className={FullPapersStyles.image}/>
      <p className={FullPapersStyles.description}>{paper.Description}</p>
    </div>
  );
}
