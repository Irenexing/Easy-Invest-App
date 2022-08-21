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
    <div>CHAPTER 1</div>
    <h1>The benefit of investing early</h1>
    <p>Investing when you’re young is one of the best ways to see solid returns on your money.</p>
    <br></br>
    <p>a little goes a long way...</p>
    <ul>
        <li>Compound earnings: your investment returns start earning their own return.</li>
        <li>Compounding allows your account balance to snowball over time.</li> 
    </ul>
    <br></br>
    <p>Let's take an example...</p>
    <br></br>
    <img className="module__image" src="images/Frame 40.png"/>
    <br></br>
    <p>Ride out the waves...</p>
    <ul>
        <li>Investing young means you have decades to wait out the ups and downs of the stock market</li>
    </ul>
    <br></br>
    <p>Let's take the royal Bank of Canada as an example</p>
    <br></br>
    <p>Compare the graph results for 5 years. What do you notice?</p>
    <img className="module__image" src="images/graph.png"/>
    <br></br>
    <button className="module__button">Test your knowledge</button>
  </div>
  </div>
)}

export default Module1Page1;