import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import PapersStyles from "./Papers.module.css";
import CommentIcon from "@mui/icons-material/Comment";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Papers() {
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [articles, setArticles] = useState([]);
  const articlesPerPage = 3;

  const pageCount = Math.ceil(articles.length / articlesPerPage);
  const displayedArticles = articles.slice(
    (page - 1) * articlesPerPage,
    page * articlesPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Function to get month abbreviation
  const getMonthAbbreviation = (month) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[month];
  };

  // Helper function to truncate description to first 30 words
  const truncateDescription = (description) => {
    if (!description) return '';
    const words = description.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    }
    return description;
  };

  const splitDate = (dateString) => {
    if (!dateString) {
      return { day: '', year: '', month: '' }; // Return empty values if dateString is undefined or null
    }
    const dateObject = new Date(dateString);
    const day = dateObject.getDate().toString().padStart(2, '0'); // Pad with leading zero if single digit
    const month = getMonthAbbreviation(dateObject.getMonth());
    const year = dateObject.getFullYear().toString();
    return { day, month, year };
  };

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}papers/get-paper`);
        const papersWithTruncatedDescription = response.data.map((paper) => ({
          ...paper,
          truncatedDescription: truncateDescription(paper.Description)
        }));
        setArticles(papersWithTruncatedDescription);
        setIsVisible(true);
      } catch (error) {
        console.error('Error fetching papers:', error);
      }
    };

    fetchPapers();
  }, []);

  return (
    <>
      <div className={`${PapersStyles.mainWrapper} ${isVisible ? PapersStyles.visible : ''}`}>
        <div className={PapersStyles.primaryWrapper}>
          <h1 className={PapersStyles.header}>Research Papers</h1>
          <p className={PapersStyles.subHeader}>Check it out</p>
          <hr className={PapersStyles.horizontalLine} />
        </div>

        <div className={PapersStyles.wrapper}>
          {displayedArticles.map((article, index) => {
            const { day, year, month } = splitDate(article.createdAt);
            return (
              <div key={index} className={PapersStyles.paper}>
                <div className={PapersStyles.dateBadge}>
                  <span className={PapersStyles.day}>{day}</span>
                  <span className={PapersStyles.year}>{year}</span>
                  <span className={PapersStyles.month}>{month}</span>
                </div>
                <img
                  src={`http://localhost:3000/${article.Image}`}
                  alt="Article"
                  className={PapersStyles.image}
                />
                <div className={PapersStyles.content}>
                  <h3 className={PapersStyles.title}>{article.Title}</h3>
                  <p className={PapersStyles.description}>{article.truncatedDescription}</p>
                  <div className={PapersStyles.interactionArea}>
                    {/* Change button to Link component */}
                    <Link style={{"textDecoration" : "none"}} to={`/papers/${article._id}`} className={PapersStyles.readMoreButton}>Read More</Link>
                    <div className={PapersStyles.adminComment}>
                      <span>Admin</span>
                      <CommentIcon className={PapersStyles.icon} />
                      <span>{article.adminCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination component */}
        <div className={PapersStyles.mainPagination}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: ArrowBackIosNewIcon, next: ArrowForwardIosIcon }}
              {...item}
            />
          )}
          className={PapersStyles.pagination}
        />
        </div>
      </div>
    </>
  );
}
