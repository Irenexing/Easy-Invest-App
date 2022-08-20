
import './App.scss';
import CoursesPage from './components/CoursesPage/CoursesPage';
import HomePage from './components/HomePage/HomePage';
import Invest101Page from './components/Invest101Page/Invest101Page';
import Module1Page from './components/Module1Page/Module1Page';
import Simulation from './components/Simulation/Simulation';
// import {useState} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="title">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
