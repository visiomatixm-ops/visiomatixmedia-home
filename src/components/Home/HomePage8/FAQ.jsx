import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeLeft,
  fadeUp,
  staggerContainer,
  viewport,
  EASE,
} from "../../../hooks/useScrollAnimation";
import { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    id: 1,
    q: "How does digital marketing turn strategy into measurable growth?",
    a: "We combine data-driven planning, performance tracking, and continuous optimization to ensure measurable ROI.",
  },
  {
    id: 2,
    q: "How does Local SEO help your business attract nearby customers?",
    a: "Local SEO improves visibility in nearby searches, helping customers find your business faster.",
  },
  {
    id: 3,
    q: "What services are included in a full-scale digital marketing solution?",
    a: "SEO, paid ads, content marketing, social media, branding, and analytics.",
  },
  {
    id: 4,
    q: "How does SEO drive long-term growth for your business?",
    a: "SEO builds authority over time, generating consistent organic traffic.",
  },
  {
    id: 5,
    q: "How often should your website be updated to stay effective?",
    a: "Regular updates help performance, UX, and security.",
  },
  {
    id: 6,
    q: "What technologies do you use for website development?",
    a: "React, Next.js, Node.js, WordPress, and scalable cloud platforms.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq-wrapper">
      <div className="faq-container">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="faq-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            viewport={viewport}
          >
            FAQs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            viewport={viewport}
          >
            Got questions? We've got answers.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="faq-right"
        >
          {faqData.map((item, i) => (
            <motion.div
              key={item.id}
              className="border-wrapper"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: i * 0.07 }}
              viewport={viewport}
            >
              <div className={`faq-box ${open === i ? "open" : ""}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span>{item.q}</span>
                  <motion.span
                    className="icon"
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    style={{ display: "inline-block", transformOrigin: "center" }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      style={{ overflow: "hidden" }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
