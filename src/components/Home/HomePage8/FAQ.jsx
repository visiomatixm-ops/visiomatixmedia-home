import React from 'react'
import { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    q: "How does digital marketing turn strategy into measurable growth?",
    a: "We combine data-driven planning, performance tracking, and continuous optimization to ensure measurable ROI."
  },
  {
    q: "How does Local SEO help your business attract nearby customers?",
    a: "Local SEO improves visibility in nearby searches, helping customers find your business faster."
  },
  {
    q: "What services are included in a full-scale digital marketing solution?",
    a: "SEO, paid ads, content marketing, social media, branding, and analytics."
  },
  {
    q: "How does SEO drive long-term growth for your business?",
    a: "SEO builds authority over time, generating consistent organic traffic."
  },
  {
    q: "How often should your website be updated to stay effective?",
    a: "Regular updates help performance, UX, and security."
  },
  {
    q: "What technologies do you use for website development?",
    a: "React, Next.js, Node.js, WordPress, and scalable cloud platforms."
  }
];
const FAQ = () => {
   const [open, setOpen] = useState(null);

  return (
    <section className="faq-wrapper">
      <div className="faq-container">

        <div className="faq-left">
          <h1>FAQs</h1>
          <p>Got questions? We’ve got answers.</p>
        </div>

        <div className="faq-right">
          {faqData.map((item, i) => (
            <div className="border-wrapper">
              <div key={i} className={`faq-box ${open === i ? "open" : ""}`}>
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className="icon">{open === i ? "−" : "+"}</span>
              </button>

              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


export default FAQ