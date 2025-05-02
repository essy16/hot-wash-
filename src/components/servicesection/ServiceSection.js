import React from "react";
import "./ServiceSection.css";

const services = [
  {
    title: "Residential Cleaning",
    desc: "Make your home windows sparkle inside and out.",
  },
  {
    title: "Commercial Cleaning",
    desc: "Professional window cleaning for storefronts and offices.",
  },
  {
    title: "Gutter Cleaning",
    desc: "Keep your gutters clean and flowing year-round.",
  },
];

export default function ServicesSection() {
  return (
    <section className="services slide-in">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((s, i) => (
          <div className="service-item" key={i}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
