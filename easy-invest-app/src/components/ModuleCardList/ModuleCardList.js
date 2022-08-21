import Invest101Page from "../Invest101Page/Invest101Page";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";


const ModuleCardList = () => {
const [click, setClick] = useState(false);
const closeMobileMenu = () => setClick(false);
    return (

<div>
      <h2 className="module1page__title"> Investing 101 </h2>
        <section className="cards-list">
        <Link to="/module11" onClick={(closeMobileMenu)}> 
          <Invest101Page
              img= "images/Chapter1.png"
              chapter="Chapter 1"
              title="The benefit of investing early"
              description="We'll discuss why it's important to start investing early"
              duration="30 minutes"/>
        </Link>
          <Invest101Page
              img= "images/Chapter2.png"
              chapter="Chapter 2"
              title="Setting your goals"
              description="Here we learn about setting up your TFSA, RRSP, and chas accounts to begin investing."
              duration="40 minutes"/>
        <Link to="/module13" onClick={(closeMobileMenu)}> 
          <Invest101Page
              img= "images/Chapter3.png"
              chapter="Chapter 3"
              title="How to choose the right investment method for me?"
              description="Learn about the different types of investment methods."
              duration="20 minutes"/>
        </Link>
          <Invest101Page
              img= "images/Chapter4.png"
              chapter="Chapter 4"
              title="Understanding the stock market"
              description="Learn how to read the stock market and know where to put your money."
              duration="10 minutes"/>
      </section>
      </div>
    )};

export default ModuleCardList; 