import React from 'react';
import { useNavigate } from 'react-router-dom';

function Intro2() {
  let navigate = useNavigate(); 
  function handleClick() {
    navigate ('/intro3');
  };
    return (
      <div>
        <h2 className="title">With Annual Inflation at 7.6% in 2022, Lifestylewill Not Sustain with Lower % Pay Raises </h2>
        {/* insert inflation API?? https://tradingeconomics.com/canada/inflation-cpi */}
        <button onClick={handleClick}>Next</button>
      </div>
    );
  }
  
  export default Intro2;