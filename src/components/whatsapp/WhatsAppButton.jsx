import React from "react";
import "./whatsapp.css";

import whatsappIcon from "../../assets/icons/whatsapp1.svg";

const WhatsAppButton = () => {
  const phoneNumber = "919270271916";
  const message =
    "Hi Visiomatix Media team, I’m interested in exploring your services. Could you please share more details or arrange a consultation? Thank you.";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
