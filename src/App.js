import React from "react";
import Herosection from "../src/components/herosection/HeroSection.js";
import AboutSection from "../src/components/about/AboutSection";
import ContactSection from "../src/components/contactsection/ContactSection";
import "./App.css";
import OfferSection from "./components/offer/OfferSection";
import WhatsAppSection from "./components/whatsapp/WhatsappSection";

export default function App() {
  return (
    <div className="App">
      <Herosection />
      <AboutSection />
      <OfferSection />
      <WhatsAppSection />
      <ContactSection />
    </div>
  );
}
