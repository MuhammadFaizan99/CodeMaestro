import React, { useState, useEffect, useRef } from 'react';
import PortfolioStyles from './Portfolio.module.css';

// Example workSamples array
const workSamples = [
  {
    id: 1,
    title: "Weather Dashboard",
    skill : "Machine Learning",
    image: "https://preview.colorlib.com/theme/digilab/images/project-1.jpg.webp",
  },
  {
    id: 2,
    title: "Personal Website Redesign",
    skill : "Web design",
    image: "https://preview.colorlib.com/theme/digilab/images/project-2.jpg.webp",
  },
  {
    id: 3,
    title: "Online Store Project",
    skill : "Machine Learning",
    image: "https://preview.colorlib.com/theme/digilab/images/project-3.jpg.webp",
  },
  {
    id: 4,
    title: "Social Media Overhaul & Analytics",
    skill : "Machine Learning",
    image: "https://preview.colorlib.com/theme/digilab/images/project-4.jpg.webp",
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeSampleIndex, setActiveSampleIndex] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveSampleIndex((prevActiveIndex) => (prevActiveIndex + 1) % workSamples.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Add your filtering logic here
  };

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      setActiveSampleIndex((prevActiveIndex) => (prevActiveIndex + 1) % workSamples.length);
    }, 2000);
  };

  const getSamplesForDisplay = () => {
    let samplesForDisplay = [];
    for (let i = 0; i < 3; i++) {
      samplesForDisplay.push(workSamples[(activeSampleIndex + i) % workSamples.length]);
    }
    return samplesForDisplay;
  };

  return (
    <div className={PortfolioStyles.container}>
      <h1 className={PortfolioStyles.header}>Samples</h1>
      <p className={PortfolioStyles.subHeader}>Check it out</p>
      <hr className={PortfolioStyles.horizontalLine} />

      <div className={PortfolioStyles.tabContainer}>
        {['All', 'Web', 'Design', 'Brand'].map((tab) => (
          <button
            key={tab}
            className={`${PortfolioStyles.tab} ${activeTab === tab.toLowerCase() ? PortfolioStyles.activeTab : ''}`}
            onClick={() => handleTabClick(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={PortfolioStyles.workSamplesContainer} onMouseLeave={handleMouseLeave}>
        {getSamplesForDisplay().map((sample, index) => (
          <div
            key={sample.id}
            className={PortfolioStyles.workSample}
            onMouseEnter={handleMouseEnter}
          >
            <img src={sample.image} alt={sample.title} />
            <div className={PortfolioStyles.projectName}>
              <p style={{fontSize:"18px"}}>{sample.title}</p>
              <p style={{color:'rgba(255, 255, 255, 0.8)',fontSize:"14px"}}>{sample.skill}</p>
              </div>
          </div>
        ))}
      </div>

      <div className={PortfolioStyles.sliderContainer}>
        {workSamples.map((_, index) => (
          <div
            key={index}
            className={`${PortfolioStyles.dot} ${activeSampleIndex === index ? PortfolioStyles.activeDot : ''}`}
            onClick={() => setActiveSampleIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}