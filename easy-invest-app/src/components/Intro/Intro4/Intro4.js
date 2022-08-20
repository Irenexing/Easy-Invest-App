import React from 'react';
import { useNavigate } from 'react-router-dom';

function Intro4() {
  let navigate = useNavigate(); 
  function handleClick() {
    navigate ('/courses');
  };
    return (
      <div>
        <h2 className="title">Are you ready to learn?</h2>
        <button onClick={handleClick}>YES!</button>
      </div>
    );
  }
  
  export default Intro4;
