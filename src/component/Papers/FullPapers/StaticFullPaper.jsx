import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FullPapersStyles from './FullPapers.module.css';
import { Facebook, Twitter, Share } from '@mui/icons-material';

export default function StaticFullPaper() {
  const [paper, setPaper] = useState(null);
  const { id } = useParams();

  const staticPapers = [
    {
      _id: "1",
      Title: "The Ever-Expanding Benefits of Information Technology in Our Daily Lives",
      Description: "In today's hyper-connected world, the influence of Information Technology (IT) spans far beyond traditional office settings. From the moment we wake up to the time we lay our heads down to sleep, IT plays a crucial role in enhancing various aspects of our daily lives. Let's delve into the myriad ways IT enriches our day-to-day experiences:\n\nCommunication Revolution: With the advent of smartphones and social media platforms, staying connected with friends, family, and colleagues has never been easier. Instant messaging, video calls, and social networking apps allow us to bridge geographical gaps effortlessly.\n\nAccess to Information: The internet serves as a vast repository of knowledge, offering answers to virtually any question at our fingertips. Whether it's researching a topic, learning new skills through online courses, or staying updated with current events, IT empowers us with unparalleled access to information.\n\nE-commerce Convenience: Online shopping has revolutionized the way we purchase goods and services. From groceries to gadgets, consumers can browse, compare prices, and make purchases without leaving the comfort of their homes. E-commerce platforms offer convenience, variety, and often cost savings.\n\nHealthcare Innovations: Information Technology has transformed the healthcare industry, leading to improved patient care, diagnostics, and treatment outcomes. Electronic Health Records (EHRs), telemedicine, wearable health devices, and medical apps enhance access to healthcare services and promote proactive wellness management.\n\nSmart Home Integration: IoT (Internet of Things) technology has enabled the creation of smart homes equipped with interconnected devices. From smart thermostats and lighting systems to voice-activated assistants, IT enhances home automation, security, and energy efficiency.\n\nTransportation Advancements: GPS navigation systems and ride-sharing apps have revolutionized transportation, making commuting more efficient and convenient. Additionally, IT plays a vital role in the development of autonomous vehicles, paving the way for safer and more sustainable transportation solutions.\n\nEntertainment On-Demand: Streaming services, gaming platforms, and digital content creation tools offer a plethora of entertainment options tailored to individual preferences. Whether binge-watching a TV series, listening to music, or playing interactive games, IT provides on-demand entertainment anytime, anywhere.\n\nEducation Transformation: IT tools and platforms have revolutionized the education landscape, enabling remote learning, personalized instruction, and collaborative projects. Digital textbooks, educational apps, and online learning platforms make learning more engaging, accessible, and interactive.\n\nFinancial Management: Banking and financial services have evolved with the integration of IT solutions. Mobile banking apps, digital wallets, and investment platforms empower users to manage their finances, conduct transactions, and monitor investments with ease and security.\n\nEnvironmental Sustainability: IT contributes to environmental sustainability through innovations such as smart grid technology, energy-efficient infrastructure, and remote monitoring systems. By optimizing resource utilization and reducing carbon footprints, IT plays a crucial role in building a greener future.\n\nIn conclusion, the pervasive influence of Information Technology in our daily lives continues to shape and enrich our experiences in unprecedented ways. From communication and commerce to healthcare and entertainment, IT serves as a catalyst for innovation, convenience, and progress, driving positive change across diverse facets of modern society.",
      Image: "../../../public/assets/Picture.jpg",
      createdBy: { Name: "Author 1" }
    },
    
  ];

  useEffect(() => {
    const selectedPaper = staticPapers.find(paper => paper._id === id);
    setPaper(selectedPaper);
  }, [id, staticPapers]);

  if (!paper) {
    return <div>Loading...</div>;
  }

  const formattedDescription = paper.Description.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className={FullPapersStyles.container}>
      <h1 className={FullPapersStyles.title}>{paper.Title}</h1>
      <div className={FullPapersStyles.header}>
        <div className={FullPapersStyles.author}>{paper.createdBy.Name}</div>
        <div className={FullPapersStyles.socialIcons}>
          <Facebook className={FullPapersStyles.icon} />
          <Twitter className={FullPapersStyles.icon} />
          <Share className={FullPapersStyles.icon} />
        </div>
      </div>
      <img src={`/${paper.Image}`} alt="Meditation" className={FullPapersStyles.image}/>
      <p className={FullPapersStyles.description}>
        {formattedDescription}
      </p>
    </div>
  );
}
