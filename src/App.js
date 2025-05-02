import React from "react";
import Herosection from "../src/components/herosection/HeroSection";
import ServicesSection from "../src/components/servicesection/ServiceSection";
import AboutSection from "../src/components/about/AboutSection";
import ContactSection from "../src/components/contactsection/ContactSection";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Herosection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
