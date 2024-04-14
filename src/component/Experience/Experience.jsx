import React, { useEffect, useState } from 'react';
import styles from './Experience.module.css';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after the component mounts to trigger the transition
    setIsVisible(true);
  }, []);

  return (
    <div className={`${styles.experienceContainer} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.primaryExperienceContainer}>
      <div className={styles.headerSection}>
        <h1 className={styles.header}>Work Experience</h1>
        <p className={styles.subHeader}>Check it out</p>
        <hr className={styles.horizontalLine} />
      </div>
      <div className={styles.experienceDetails}>
        <div className={styles.job}>
          <h3>MERN Stack Dev</h3>
          <p className={styles.company}>E Networks pvt ltd</p>
          <p className={styles.dates}>April 2024 - Present</p>
          <ul>
            <li>Developing and maintaining web applications.</li>
            <li>Collaborate with cross-functional teams.</li>
            <li>Troubleshoot and debug.</li>
          </ul>
        </div>

        <div className={styles.job}>
          <h3>Node.js Dev</h3>
          <p className={styles.company}>Rozi Academy</p>
          <p className={styles.dates}>November 2023 - April 2024</p>
          <ul>
            <li>Develop and maintain Node.js applications.</li>
            <li>Collaborate with teams to integrate Node.js services.</li>
            <li>Optimize application performance and scalability</li>
          </ul>
        </div>
        <div className={styles.job}>
          <h3>MERN Stack Dev</h3>
          <p className={styles.company}>Karobar IT Solutions LLP</p>
          <p className={styles.dates}>May 2023 - Nov 2023</p>
          <ul>
          <li>Developing and maintaining web applications.</li>
            <li>Collaborate with cross-functional teams.</li>
            <li>Develop Custom plugins </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
