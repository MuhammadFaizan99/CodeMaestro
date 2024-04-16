import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Sidebar from './component/Sidebar/Sidebar';
import Education from './component/Education/Education';
import Portfolio from './component/Portfolio/Portfolio';
import Papers from './component/Papers/Papers';
import Experience from './component/Experience/Experience';
import Signup from './component/Signup/Signup';
import Signin from './component/Signin/Signin';
import UploadPapers from './component/UploadPapers/UploadPapers';
import FullPapers from './component/Papers/FullPapers/FullPapers';
import StaticPaper from './component/Papers/StaticPaper';
import StaticFullPaper from './component/Papers/FullPapers/StaticFullPaper';

export default function App() {
  return (
      <div style={{ display: 'flex' ,height : "100vh"}} >
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Route path="/papers" element={<Papers />} /> */}
          <Route path="/papers" element={<StaticPaper />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/upload-paper" element={<UploadPapers />} />
          {/* <Route path="/papers/:id" element={<FullPapers />} /> */}
          <Route path="/papers/:id" element={<StaticFullPaper />} />
        </Routes>
      </div>
  );
}