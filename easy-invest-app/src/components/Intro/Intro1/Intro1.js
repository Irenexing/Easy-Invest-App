import React from 'react';
import { useNavigate } from 'react-router-dom';

function Intro1() {
  let navigate = useNavigate(); 
  function handleClick() {
    navigate ('/intro2');
  };
    return (
      <div>
        <h2 className="title">Investing, Saving, and Budgeting is NOT only for the Privilages Population</h2>
        <button onClick={handleClick}>Next</button>
      </div>
    );
  }
  
  export default Intro1;