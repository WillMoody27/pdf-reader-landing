import React, { useState, useEffect } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrollPosition > 20 ? "rgba(0, 0, 0, 0.8)" : "transparent",
    transition: "background-color 0.25s ease-in-out",

    backdropFilter: `blur(${scrollPosition > 20 ? "10px" : "0px"})`,
  };

  return (
    <nav className="navbar" style={navbarStyle}>
      <h1 className="navbar__logo">Doc-To-Speech</h1>
      <div className="navbar__menu">
        <ul className="navbar__menu__list">
          <li className="navbar__menu__link">
            <a href="#">Home</a>
          </li>
          <li className="navbar__menu__link">
            <a href="#">About</a>
          </li>
          <li className="navbar__menu__link">
            <a href="#">Contact</a>
          </li>
          <li className="navbar__menu__link">
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
