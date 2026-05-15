import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./HomePage6.css";
import { motion } from "framer-motion";

import wordpress from "../../../assets/images/Group 120.png";
import googlePartner from "../../../assets/images/Group 126.png";
import meta from "../../../assets/images/Group 121.png";
import bing from "../../../assets/images/Group 122.png";
import html5 from "../../../assets/images/Group 123.png";
import linkedin from "../../../assets/images/Group 124.png";
import googleAds from "../../.././assets/images/Group 125.png";

import dotIcon1 from "../../../assets/images/Group 129.png";
import dotIcon2 from "../../../assets/images/Group 130.png";
import dotIcon3 from "../../../assets/images/Group 131.png";
import growthArrow from "../../../assets/images/growth arrow 1.png";
import {
  fadeRight,
  fadeUp,
  staggerContainer,
  cardReveal,
  viewport,
} from "../../../hooks/useScrollAnimation";

export default function HomePage6() {
  const logos = [
    wordpress,
    googlePartner,
    meta,
    bing,
    html5,
    linkedin,
    googleAds,
  ];

  return (
    <section className="partners-home6">
      {/* Animated divider line */}
      <motion.div
        className="top-line-home6"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        viewport={viewport}
        style={{ transformOrigin: "left" }}
      />

      <motion.div
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="heading-home6"
      >
        <h1>Powered by Strong Partnerships</h1>
        <p>Partners & Certificates</p>
      </motion.div>

      {/* ===== INFINITE LOGO SCROLLER ===== */}
      <div className="logo-slider-home6">
        <div className="logo-track-home6">
          {[...logos, ...logos].map((logo, i) => (
            <div className="logo-pill-home6" key={i}>
              <img src={logo} alt="partner" />
            </div>
          ))}
        </div>
      </div>

      <div className="cards-wrapper-home6">
        <img src={growthArrow} className="arrow-bg-home6" alt="" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="cards-row-home6"
        >
          {[
            {
              icon: dotIcon1,
              title: "Data & Intelligence",
              text: "We analyze patterns, user behavior, and performance metrics to uncover what truly drives results. Every insight fuels smarter decisions, optimized campaigns, and sustainable brand growth. At Visiomatix Media, data powers precision, performance, and progress.",
              active: false,
            },
            {
              icon: dotIcon2,
              title: "Design That Works",
              text: "We don't design for trends,we design for results. Every pixel is purposeful, every interaction intentional. Design at Visiomatix Media is engineered to perform.",
              active: true,
            },
            {
              icon: dotIcon3,
              title: "Strategy & Planning",
              text: "We develop data-backed digital strategies that align brand vision with customer behavior and market dynamics. Our approach ensures every campaign, channel, and investment works together to drive consistent, scalable results.",
              active: false,
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={cardReveal}
              style={{ height: "100%" }}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { type: "spring", stiffness: 260, damping: 18 },
              }}
            >
              <div
                className={`info-card-home6${card.active ? " active-home6" : ""}`}
              >
                <motion.img
                  src={card.icon}
                  className="card-dot-home6"
                  alt=""
                  initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  whileHover={{ rotate: 180, scale: 1.15 }}
                  transition={{
                    delay: i * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 220,
                  }}
                  viewport={viewport}
                />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="footer-text-home6"
      >
        We don't guess, we engineer growth. Every engagement begins with Data &
        Intelligence, where we decode real user behavior, market dynamics, and
        performance signals to uncover where true opportunities exist. These
        insights directly inform Design That Works—intuitive, conversion-focused
        experiences built to guide attention, remove friction, and drive action.
        Finally, Strategy & Planning aligns channels, capital, timelines, and
        execution into a clear, scalable roadmap. This three-step system
        eliminates guesswork, minimizes risk, and transforms insight into
        execution and execution into measurable ROI. It's not a one-off campaign
        or a creative experiment, it's a repeatable, performance-led growth
        engine built to scale brands with precision and confidence.
      </motion.p>
    </section>
  );
}
