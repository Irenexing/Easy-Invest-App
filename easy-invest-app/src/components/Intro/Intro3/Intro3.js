
  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  import LineChart from 'reactochart/LineChart';
  import XYPlot from 'reactochart/XYPlot';
  import XAxis from 'reactochart/XAxis';
  import YAxis from 'reactochart/YAxis';
  // import {useState} from "react"
  
  function Intro3() {
    let navigate = useNavigate(); 
    function handleClick() {
      navigate ('/intro4');
    };
    // const [first, setfirst] = useState(0)
    // const addChange=(e)=>{
    // setfirst(e.target.value)
    // Math.
    // };

      return (
        <div>
          <h2 className="title">Even with Low Budget, Investing is Still Possible</h2>
          <div className="charts">
            <div className="chart__title"> Save and Invest</div>
            <input type="text" className="chart__label" placeholder="Budgeted Savings"/>
            <input type="text" className="text-field__input text-field__input__currency" placeholder="Dollar Amount" />
              <div className="dropdown">
                <select className="dropdown__select">
                  <option value="once">Once</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
              {/* <label>Sum of inputs:{first} <input type="text"  onChange={addChange}></input></label> */}
              <XYPlot>
                <XAxis title="Phase" />
                <YAxis title="Intensity" />
                <LineChart
                  data={Array(100)
                    .fill()
                    .map((e, i) => i + 1)}
                    x={d => d}
                    y={d => Math.sin(d * 0.1)}
                  />
                </XYPlot>
            </div>
          <button onClick={handleClick}>Next</button>
        </div>
       
      );
    }
    
    export default Intro3;