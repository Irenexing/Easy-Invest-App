
import './App.scss';
import Intro from './components/Intro/Intro';
import Intro1 from './components/Intro/Intro1/Intro1';
import Intro2 from './components/Intro/Intro2/Intro2';
import Intro3 from './components/Intro/Intro3/Intro3';
import Intro4 from './components/Intro/Intro4/Intro4';
import CoursesPage from './components/CoursesPage/CoursesPage';
import Invest101Page from './components/Invest101Page/Invest101Page';
import Module1Page from './components/Module1Page/Module1Page';
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
          <Route  path="/intro" element={<Intro />} />
            <Route path="/intro1" element={<Intro1 />} />
            <Route path="/intro2" element={<Intro2 />} />
            <Route path="/intro3" element={<Intro3 />} />
            <Route path="/intro4" element={<Intro4 />} />
          <Route path="/courses" element={<CoursesPage />}/>
          <Route path="/invest101" element={<Invest101Page />} />
          <Route path="module1" element={<Module1Page />} />
          <Route path="/simulation" element={<Simulation />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
