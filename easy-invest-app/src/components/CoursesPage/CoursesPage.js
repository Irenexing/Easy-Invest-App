import React, { useState, useEffect } from "react";
import Cards from '../Cards/Cards';
import { Link } from "react-router-dom";
import './CoursesPage.scss'; 

function CoursesPage() {

    return (
      <>
      <h2> What do you want to learn? </h2>
        <section className="card-list">
       {cardArray.map((card) => <Cards key={card.id} cardData={card}/>)}
      </section>
      </>
    );
  }
  
  export default CoursesPage;