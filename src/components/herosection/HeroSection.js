import React from "react";
import "./HeroSection.css";
import heroImage from "../../assets/hero-window-cleaning.jpg";

export default function HeroSection() {
  return (
    <section className="hero fade-in">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Wynyard’s Premium Window Care</h1>
          <p>
            Only £10 for a full house window clean – Hot Wash Technology
            Included!
          </p>
          <a href="#contact" className="cta-button">
            Book Now
          </a>
        </div>
        <img src={heroImage} alt="Window Cleaning" className="hero-img float" />
      </div>
    </section>
  );
}
