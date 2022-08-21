import React from 'react';
import { useNavigate } from 'react-router-dom';

function Intro() {
  let navigate = useNavigate(); 
  function handleClick() {
    navigate ('/intro4');
  };
    return (
      <div>
        <h2 className="title">Welcome to Easy Invest</h2>
        <button onClick={handleClick}>Next</button>
      </div>
    );
  }
  
  export default Intro;