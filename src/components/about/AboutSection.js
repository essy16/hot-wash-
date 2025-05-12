// File: src/components/AboutSection.js
import React from "react";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about">
      <h2>What We Do</h2>
      <ul className="features">
        <li>🔥 Greater cleaning power over cold wash</li>
        <li>🧼 Dissolves builders’ grime and dust</li>
        <li>🐦 Removes bird grime and residue</li>
        <li>💧 Streak-free with fewer water spots</li>
        <li>💦 Better in hard water areas</li>
        <li>⚡ 50% more efficient – quicker cleans, reduced costs</li>
      </ul>
      <div className="offer">
        <div className="starburst">£10 Wynyard Resident Offer</div>
        <p>
          Full house window clean with Hot Wash tech – Includes all doors,
          ground floor sills, front, rear & sides.
        </p>
      </div>
    </section>
  );
}
