import React from "react";
import './Module1Pages.scss';
import ModuleCardList from "../ModuleCardList/ModuleCardList";

const Module1Page3 = () => {
return (
  <div className="module1page">
      <div>
      <ModuleCardList className="sidebar"/>
      </div>
  <div className="module1">
    <iframe
      className="video"
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/R7qaVo7NXKE`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    <div className="chapter">CHAPTER 3</div>
    <h1>INVESTMENT TYPES</h1>
    <ol className="list">
        <li className="list-items bold-text">High-Interest Savings Account</li>
            <ul>
              <li>Safest way - no volatility</li>
              <li>Earning guaranteed annual interest around 1.3%</li>
            </ul>
            <br></br>
        <li className="list-items bold-text">Money Market Account</li>
            <ul>
              <li>Safest way - no volatility</li>
              <li>Another type of high-interest savings account</li>
              <li>Less access to funds</li>
              <li>Returning around 1%-2% interest</li>
              <li>Potential monthly fees</li>
            </ul>
            <br></br>
        <li className="list-items bold-text">Certificate of Deposit</li>
            <ul>
            <li>Safest way - no volatility </li>
            <li>Promissory note from bank </li>
            <li>Fixed interest over a specified amount of time</li>
            <li>However, during that time it cannot be converted to cash without a penalty. </li>
            </ul>
            <br></br>
        <li className="list-items bold-text">Bond</li>
            <ul>
              <li>Bit riskier, corporate bonds aren't guaranteed by the full faith and credit</li>
              <li>A Note issued by the government or corporations when they're looking to fund a new project.</li>
              <li>The bonds face value is the amount of money that was borrowed. The coupon rate is the rate of interest on the face value. The maturity date is when the bonds face value will be paid back to the lender.</li>
              <li>As interest rates fall, bond prices rise. Vice Versa </li>
              <li>During that time it cannot be converted to cash </li>
            </ul>
            <br></br>
        <li className="list-items bold-text">Mutual Fund</li>
          <ul>
            <li>Pre-diversified collections of investments, safer than individual stocks</li>
            <li>Vary in risk depending on the type of fund</li>
            <li>Operated by a fund manager that chooses and maintains the portfolio</li>
          </ul>
          <br></br>
        <li className="list-items bold-text">Exchange Traded Fund (ETF)</li>
          <ul>
            <li>Similar to mutual funds but bit riskier</li>
            <li>and are traded on an exchange like stocks</li>
            <li>More tax advantages compared to mutual funds</li>
            <li>ETFs are a more hands-on investment than mutual funds</li>
          </ul>
          <br></br>
        <li className="list-items bold-text">Stock</li>
          <ul>
            <li>Riskier than ETFs because there is no diversification</li>
            <li>It is a very hands-on investment </li>
            <li>A stock is a share of ownership of a company</li>
          </ul>
          <br></br>
        <li className="list-items bold-text">Real Estate</li>
          <ul>
            <li>Requires a lot of capital</li>
            <li>Could flip properties or rent out properties</li>
          </ul>
    </ol>
    <button className="module__button">Test your knowledge</button>
  </div>
  </div>
)}

export default Module1Page3;