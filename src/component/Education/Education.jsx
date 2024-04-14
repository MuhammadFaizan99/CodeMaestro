import React, { useEffect, useState } from 'react';
import styles from './Education.module.css'; 

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const educationData = [
    {
      year: '2015 - 2017',
      degree: 'SSC - Secondary School Certificate',
      description: 'Fauji Foundation Model School Adyala Road,Rawalpindi'
    },
    {
      year: '2017 - 2019',
      degree: 'HSSC - Higher Secondary School Certificate',
      description: 'FG Quaid e Azam Degree College,Chaklala Scheme III,Rawalpindi'
    },
    {
      year: '2019 - 2023',
      degree: 'Bachelor\'s Degree - Computer Engg',
      description: 'University of Engineering and Technology (UET), Taxila'
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.headerSection}>
        <h1 className={styles.header}>Education</h1>
        <p className={styles.subHeader}>Check it out</p>
        <hr className={styles.horizontalLine} />
      </div>
      <main className={styles.row}>
        <div className={styles.col}>
          <div className={styles.contents}>
            {educationData.map((item, index) => (
              <div key={index} className={styles.box}>
                <h4>{item.year}</h4>
                <h3>{item.degree}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
