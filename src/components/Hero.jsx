import React from "react";
import "../css/Hero.css";
import speakAI from "../assests/svg/speak-ai.svg";
import pagesBg from "../assests/svg/pages-bg.svg";

const Hero = () => {
  return (
    <div className="hero">
      <nav className="hero__navbar">
        <h1 className="hero__navbar__logo">PDF-Landing</h1>
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
      <div className="hero__half-bg"></div>

      <section className="lower__hero">
        <div className="lower__hero__container">
          <div className="custom--header-text-block">
            <h1 className="heading">Listen</h1>
            <img className="heading--support-image" src={speakAI} alt="image" />
          </div>
          <p className="heading--text">
            to how your published PDF documents sound to readers...
          </p>
          <button className="heading--btn" type="button">
            Give Us A Try
          </button>
        </div>
        <div className="lower__hero__custom--image-1">
          <img className="heading--main-image" src={pagesBg} alt="image-1" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
