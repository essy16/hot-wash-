import React from "react";
import logo from "../../assets/the_hot_wash.jpeg";
import "../home/Home.css";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <img src={logo} className="logo" />
      <h1>PAGE UNDER CONSTRUCTION</h1>
      <div className="contact-us">
        <h1>
          <a
            href={`https://wa.me/+447304097677?text=${encodeURIComponent(
              "I would love to get my windows cleaned"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            Contact Us on WhatsApp
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Home;
