import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button  } from "../Button/Button";
import "./Navbar.scss"

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

useEffect(()=> {
  showButton()
}, [])

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> 
            EasyInvest <i className="fab.fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-links" onClick={closeMobileMenu}>
              Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-links" onClick={closeMobileMenu}>
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          </ul>
          {button && <Button buttonStyle='btn--secondary'> Get Started</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
