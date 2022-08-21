import React from "react";
import './Module1Pages.scss';
import ModuleCardList from "../ModuleCardList/ModuleCardList";


const Module1Page1 = () => {
return (
  <div className="module1page">
      <ModuleCardList/>
  <div className="module1">
    <iframe
      className="video"
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/URES59zcNyg`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    <div className="chapter">CHAPTER 1</div>
    <h1>The benefit of investing early</h1>
    <br></br>
    <br></br>
    <p>Investing when you’re young is one of the best ways to see solid returns on your money.</p>
    <br></br>
    <br></br>
    <p className="bold-text">A little goes a long way...</p>
    <ul>
        <li><b>Compound earnings:</b> your investment returns start earning their own return.</li>
        <li><b>Compounding</b> allows your account balance to snowball over time.</li> 
    </ul>
    <br></br>
    <p className="bold-text">Let's take an example...</p>
    <br></br>
    <img className="module__image" src="images/Frame 40.png"/>
    <br></br>
    <p className="bold-text">Ride out the waves...</p>
    <ul>
        <li>Investing young means you have decades to wait out the ups and downs of the stock market</li>
    </ul>
    <br></br>
    <p className="bold-text">Let's take the royal Bank of Canada as an example</p>
    <br></br>
    <p>Compare the graph results for 5 years. What do you notice?</p>
    <img className="module__image" src="images/graph.png"/>
    <br></br>
    <button className="module__button">Test your knowledge</button>
  </div>
  </div>
)}

export default Module1Page1;