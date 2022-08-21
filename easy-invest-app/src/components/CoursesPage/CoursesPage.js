import React, { useState, useEffect } from "react";
import Cards from '../Cards/Cards';
import { Link } from "react-router-dom";
import './CoursesPage.scss'; 

function CoursesPage() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
    return (
      <>
      <h2> What do you want to learn? </h2>
        <section className="card-list">
        <Link to="/module11" onClick={(closeMobileMenu)}> 
          <Cards
              img= "images/invest.png"
              title="How to invest"/>

        </Link>
        <Cards
          img= "images/save.png"
          title="Best ways to save"/>
        <Cards
          img= "images/budget.png"
          title="Budgeting tips"/>

      </section>
      </>
    );
  }
  
  export default CoursesPage;