import React from "react";
import { motion } from "framer-motion";
import "./index.css";

import hero from "../../../assets/images/image.png";

import arrow from "../../../assets/images/Union-1.png";
import { NavLink } from "react-router";
import {
  fadeLeft,
  fadeUp,
  scaleIn,
  staggerContainer,
  staggerItem,
  drawLine,
  glowPulse,
  floatY,
  viewport,
  EASE,
} from "../../../hooks/useScrollAnimation";

import vectorImg from "../../../assets/images/Vector 3.png";
import ellipseImg from "../../../assets/images/Ellipse 6.png";

const style = {
  backgroundImage: `
    url(${vectorImg}),
    url(${ellipseImg}),
    linear-gradient(90deg, #000103, #000814, #01112c, #00307c)
  `,
  backgroundRepeat: "no-repeat, no-repeat, no-repeat",
  backgroundPosition: "right 10% top, left 0px top 0px, center",
  backgroundSize: `
    84.5% 100%,
    clamp(260px, 30vw, 300px) 300px,
    cover
  `,
};

const AboutUs3 = () => {
  return (
    <div className="about_us_2" style={style}>
      <main className="about_us">
        {/* LEFT INFO — fade from left */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="info"
        >
          <motion.p
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {[
              "As CEO & Operations Head, I oversee end-to-end operations including delivery planning, workflow optimization, quality assurance, resource allocation, and performance tracking. I am accountable for building systems that ensure predictable delivery, cost efficiency, and operational transparency—critical elements for scaling a global digital agency. My role also includes defining operational KPIs, managing risk, and continuously improving internal processes to support growth at scale",
              "I work closely with leadership, clients, and cross-functional teams to maintain alignment between business objectives and execution realities. My analytical mindset and attention to operational detail allow me to proactively identify bottlenecks, streamline workflows, and implement solutions that improve productivity and profitability. I also lead the adoption of modern tools, automation frameworks, and process documentation to ensure consistency and operational maturity.",
            ].map((para, i) => (
              <motion.span
                key={i}
                variants={staggerItem}
                style={{ display: "block", marginBottom: "1em" }}
              >
                {para}
              </motion.span>
            ))}
          </motion.p>

          <motion.div
            className="read-more-wrapper"
            animate="pulse"
            variants={glowPulse}
          >
            <NavLink to="/contact" className="read-more-btn-home4">
              Read More
              <img src={arrow} alt="arrow" className="read-more-icon" />
            </NavLink>
          </motion.div>
        </motion.div>

        {/* TITLE BOX — fade up */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="title_box"
        >
          <motion.p
            id="hero_title"
            className="hero_title"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            viewport={viewport}
          >
            Pooja Patil
          </motion.p>
          <p id="hero_job">CEO & Operations head</p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {[
              "I am the CEO & Head of Operations at Visiomatix Media, responsible for driving operational strategy, execution governance, and scalable systems that support the company's long-term growth and global ambitions. With a strong background in software engineering and over five years of professional experience, I bring a technology led, process driven, and performance oriented approach to managing complex digital operations.",
              "My engineering foundation enables me to design and implement structured operational frameworks that align business strategy with execution. At Visiomatix Media, I ensure that digital marketing initiatives are not only creative and data driven but also technically robust, scalable, and consistently deliver measurable outcomes. I play a central role in translating strategic vision into repeatable execution models across teams and clients",
              "I bring deep expertise in performance marketing, SEO, growth funnels, and analytics driven decision making. Certified in Google Ads and Google Analytics, I work hands-on with advanced platforms including SEMrush, Google Keyword Planner, and Google Analytics to drive acquisition, retention, and scalable digital growth.",
            ].map((para, i) => (
              <motion.p
                key={i}
                variants={staggerItem}
                className={i === 0 ? "first_letter" : ""}
              >
                {para}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* HERO IMAGE — scale in + float */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="hero_box"
        >
          <motion.img
            src={hero}
            width="346"
            height="520"
            alt="hero"
            className="hero_img"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.04, filter: "brightness(1.1)" }}
          />
        </motion.div>
      </main>
    </div>
  );
};

export default AboutUs3;
