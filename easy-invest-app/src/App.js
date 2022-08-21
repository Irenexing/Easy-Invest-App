
import './App.scss';
import Intro from './components/Intro/Intro';
import Intro4 from './components/Intro/Intro4/Intro4';
import HomePage from './components/HomePage/HomePage';
import CoursesPage from './components/CoursesPage/CoursesPage';
import Invest101Page from './components/Invest101Page/Invest101Page';
import Module1Page3 from './components/Module1Page/Module1Page3';
import Module1Page1 from './components/Module1Page/Module1Page1';
import Simulation from './components/Simulation/Simulation';
// import {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="title">
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route  path="/intro" element={<Intro />} />
            <Route path="/intro4" element={<Intro4 />} />
          <Route path="/courses" element={<CoursesPage />}/>
          <Route path="/invest101" element={<Invest101Page />} />
          <Route path="/module11" element={<Module1Page1 />} />
          <Route path="/module13" element={<Module1Page3 />} />
          <Route path="/simulation" element={<Simulation />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
