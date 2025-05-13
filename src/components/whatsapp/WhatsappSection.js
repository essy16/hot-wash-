import React from "react";
import "../whatsapp/WhatsappSection.css";

export default function WhatsAppSection() {
  return (
    <section className="whatsapp">
      <h2>Contact Us</h2>
      <p className="call-to-action">
        Avoid the "Wynyard Tax" for your window cleaning.
      </p>
      <div className="whatsapp-box">
        <a
          href="https://wa.me/447304097677"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          Message Us on WhatsApp
        </a>
        <p className="phone">or call: 07304 097 677 (Anthony)</p>
      </div>
    </section>
  );
}
