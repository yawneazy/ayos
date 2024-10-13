import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';


const Navbar = () => {
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [burgerClass, setBurgerClass] = useState("");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("close");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const handleLinkClick = () => {
    if (isMenuClicked) {
      setBurgerClass("");
      setMenuClass("menu hidden");
      setIsMenuClicked(false);
    }
  };

  useEffect(() => {
    handleLinkClick();
  }, [location]);

  return (
    <nav className="navbar">
      <div className={`burger-menu ${burgerClass}`} onClick={toggleMenu}>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>
      <Link to="/" className="brand">AY.OLSON</Link>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/play">Play</Link>
      </div>
      <div className={`${menuClass} nav-links`}>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/play">Play</Link>
      </div>
    </nav>
  );
};

export default Navbar;