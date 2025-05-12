import React from "react";
import "./HeroSection.css";
import logoImage from "../../assets/the_hot_wash.jpeg";

export default function HeroSection() {
  return (
    <section className="hero fade-in">
      <div className="hero-content">
        <h1 className="main-heading">Welcome to the Hot Wash Window Co</h1>
        <p className="sub-heading">Wynyard’s premier window cleaning service</p>
        <img src={logoImage} alt="Hot Wash Logo" className="logo-img bounce" />
      </div>
    </section>
  );
}
