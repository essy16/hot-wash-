import React from "react";
import "./HeroSection.css";
import logoImage from "../../assets/the_hot_wash.jpeg";

export default function HeroSection() {
  return (
    <section className="hero fade-in">
      <img src={logoImage} alt="Hot Wash Logo" className="logo-full" />
      <h1 className="tagline">The Premier Window Cleaning Service</h1>
    </section>
  );
}
