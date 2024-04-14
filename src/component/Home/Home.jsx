// Home.jsx
import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";

export default function Home() {
  const [frontendDevProgress, setFrontendDevProgress] = useState("0%");
  const [backendDevProgress, setBackendDevProgress] = useState("0%");
  const [dataScienceProgress, setDataScienceProgress] = useState("0%");
  const [mlProgress, setMLProgress] = useState("0%");
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Start the animation after the component mounts
    setFrontendDevProgress("90%");
    setBackendDevProgress("85%");
    setDataScienceProgress("80%");
    setMLProgress("75%");

    // After 1000ms, set animationComplete to true
    const animationTimeout = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className={`${styles.container} ${animationComplete && styles.show}`}>
      <canvas
        data-generated="true"
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: 0,
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
        aria-hidden="true"
        width="1898"
        height="530"
      ></canvas>

      <h1 className={styles.header}>Portfolio</h1>
      <p className={styles.subHeader}>Check it out</p>
      <hr className={styles.horizontalLine} />

      <p className={styles.description}>
        Hey there, I'm Muhammad Faizan — a results-driven computer engineer with
        a deep passion for technology. My journey involves transforming creative
        ideas into powerful, user-centric digital solutions. With a focus on
        frontend development, backend development, data science, and machine
        learning, I thrive on challenges that demand innovative thinking and
        technical expertise. My goal is to bring value through technology,
        making a positive impact on individuals and businesses alike.
      </p>
      <p className={styles.description}>
        Beyond coding, I'm an avid learner, always exploring the latest trends
        in tech. My curiosity extends to the realms of artificial intelligence,
        data analysis, and creating seamless user experiences. I believe in the
        synergy of creativity and technology, and I'm excited to contribute my
        skills to the ever-evolving landscape of digital innovation.
      </p>
      <div className={`${styles.service} ${animationComplete && styles.show}`}>
        <h2 className={styles.serviceTitle}>Frontend Development</h2>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: frontendDevProgress }}
          >
            <span className={styles.progressText}>{frontendDevProgress}</span>
          </div>
        </div>
      </div>
      <div className={`${styles.service} ${animationComplete && styles.show}`}>
        <h2 className={styles.serviceTitle}>Backend Development</h2>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: backendDevProgress }}
          >
            <span className={styles.progressText}>{backendDevProgress}</span>
          </div>
        </div>
      </div>
      <div className={`${styles.service} ${animationComplete && styles.show}`}>
        <h2 className={styles.serviceTitle}>Data Science</h2>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: dataScienceProgress }}
          >
            <span className={styles.progressText}>{dataScienceProgress}</span>
          </div>
        </div>
      </div>
      <div className={`${styles.service} ${animationComplete && styles.show}`}>
        <h2 className={styles.serviceTitle}>Machine Learning</h2>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: mlProgress }}>
            <span className={styles.progressText}>{mlProgress}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
