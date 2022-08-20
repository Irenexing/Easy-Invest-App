
  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  
  function Intro3() {
    let navigate = useNavigate(); 
    function handleClick() {
      navigate ('/intro4');
    };
      return (
        <div>
          <h2 className="title">Even with Low Budget, Investing is Still Possible</h2>
          {/* insert budgeting charts https://wealthie.works/ */}
          <button onClick={handleClick}>Next</button>
        </div>
      );
    }
    
    export default Intro3;