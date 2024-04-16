import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import PapersStyles from "./Papers.module.css";
import CommentIcon from "@mui/icons-material/Comment";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function StaticPaper() {
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [articles] = useState([
    {
      _id: "1",
      createdAt: "2022-04-15",
      Title: "The Ever-Expanding Benefits of Information Technology in Our Daily Lives",
      Description: "In today's hyper-connected world, the influence of Information Technology (IT) spans far beyond traditional office settings. From the moment we wake up to the time we lay our heads down to sleep, IT plays a crucial role in enhancing various aspects of our daily lives. Let's delve into the myriad ways IT enriches our day-to-day experiences:\n\nCommunication Revolution: With the advent of smartphones and social media platforms, staying connected with friends, family, and colleagues has never been easier. Instant messaging, video calls, and social networking apps allow us to bridge geographical gaps effortlessly.\n\nAccess to Information: The internet serves as a vast repository of knowledge, offering answers to virtually any question at our fingertips. Whether it's researching a topic, learning new skills through online courses, or staying updated with current events, IT empowers us with unparalleled access to information.\n\nE-commerce Convenience: Online shopping has revolutionized the way we purchase goods and services. From groceries to gadgets, consumers can browse, compare prices, and make purchases without leaving the comfort of their homes. E-commerce platforms offer convenience, variety, and often cost savings.\n\nHealthcare Innovations: Information Technology has transformed the healthcare industry, leading to improved patient care, diagnostics, and treatment outcomes. Electronic Health Records (EHRs), telemedicine, wearable health devices, and medical apps enhance access to healthcare services and promote proactive wellness management.\n\nSmart Home Integration: IoT (Internet of Things) technology has enabled the creation of smart homes equipped with interconnected devices. From smart thermostats and lighting systems to voice-activated assistants, IT enhances home automation, security, and energy efficiency.\n\nTransportation Advancements: GPS navigation systems and ride-sharing apps have revolutionized transportation, making commuting more efficient and convenient. Additionally, IT plays a vital role in the development of autonomous vehicles, paving the way for safer and more sustainable transportation solutions.\n\nEntertainment On-Demand: Streaming services, gaming platforms, and digital content creation tools offer a plethora of entertainment options tailored to individual preferences. Whether binge-watching a TV series, listening to music, or playing interactive games, IT provides on-demand entertainment anytime, anywhere.\n\nEducation Transformation: IT tools and platforms have revolutionized the education landscape, enabling remote learning, personalized instruction, and collaborative projects. Digital textbooks, educational apps, and online learning platforms make learning more engaging, accessible, and interactive.\n\nFinancial Management: Banking and financial services have evolved with the integration of IT solutions. Mobile banking apps, digital wallets, and investment platforms empower users to manage their finances, conduct transactions, and monitor investments with ease and security.\n\nEnvironmental Sustainability: IT contributes to environmental sustainability through innovations such as smart grid technology, energy-efficient infrastructure, and remote monitoring systems. By optimizing resource utilization and reducing carbon footprints, IT plays a crucial role in building a greener future.\n\nIn conclusion, the pervasive influence of Information Technology in our daily lives continues to shape and enrich our experiences in unprecedented ways. From communication and commerce to healthcare and entertainment, IT serves as a catalyst for innovation, convenience, and progress, driving positive change across diverse facets of modern society.",
      Image: "../../assets/Picture.jpg",
      adminCount: 2
    },
    {
      _id: "2",
      createdAt: "2022-04-16",
      Title: "Sample Title 2",
      Description: "Sample Description 2",
      Image: "../../assets/Picture.jpg",
      adminCount: 3
    },
    // Add more sample articles if needed
  ]);
  const articlesPerPage = 3;

  const pageCount = Math.ceil(articles.length / articlesPerPage);
  const displayedArticles = articles.slice(
    (page - 1) * articlesPerPage,
    page * articlesPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const splitDate = (dateString) => {
    if (!dateString) {
      return { day: '', year: '', month: '' };
    }
    const dateObject = new Date(dateString);
    const day = dateObject.getDate().toString().padStart(2, '0');
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[dateObject.getMonth()];
    const year = dateObject.getFullYear().toString();
    return { day, month, year };
  };

  useEffect(() => {
    setIsVisible(true); // Set isVisible to true when component mounts
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
                  src={`/${article.Image}`} // Assuming the images are in the public folder
                  alt="Article"
                  className={PapersStyles.image}
                />
                <div className={PapersStyles.content}>
                  <h3 className={PapersStyles.title}>{article.Title}</h3>
                  {/* Render first 15 words of the description */}
                  <p className={PapersStyles.description}>
                    {article.Description.split(' ').slice(0, 15).join(' ')}
                  </p>
                  <div className={PapersStyles.interactionArea}>
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
