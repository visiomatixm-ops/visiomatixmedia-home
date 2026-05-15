import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import React from "react";
import "./index.css";

import hero from "../../../assets/images/image.png";
import vector from "../../../assets/images/Vector 3.png";
import ellipse from "../../../assets/images/Ellipse 6.png";

import star from "../../../assets/images/Group 202.png";
import hand from "../../../assets/images/Group 203.png";
import bulb from "../../../assets/images/Group 204.png";
import human from "../../../assets/images/Group 205.png";
import arrow from "../../../assets/images/Union-1.png";
import { NavLink } from "react-router";

import {
  fadeLeft,
  fadeUp,
  scaleIn,
  staggerContainer,
  staggerSlow,
  staggerItem,
  drawLine,
  flipUp,
  bounceIn,
  glowPulse,
  viewport,
  EASE,
} from "../../../hooks/useScrollAnimation";

/* ── Animated counter using IntersectionObserver ── */
const Counter = ({ value, duration = 2000 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime = null;
          const number = parseFloat(value);
          const suffix = value.replace(/[0-9.]/g, "");
          const startValue = number - 20;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const current = Math.min(
              startValue + (progress / duration) * 20,
              number,
            );
            if (ref.current) {
              ref.current.textContent = Number.isInteger(number)
                ? Math.floor(current) + suffix
                : current.toFixed(1) + suffix;
            }
            if (progress < duration) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        } else {
          if (ref.current) {
            ref.current.textContent =
              Math.floor(number - 20) + value.replace(/[0-9.]/g, "");
          }
        }
      },
      { threshold: 0.3 },
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{value}</span>;
};

/* Icon + label card */
const FeatureCard = ({ src, alt, label, delay }) => (
  <div className="card">
    <motion.img
      src={src}
      alt={alt}
      variants={bounceIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      whileHover={{ scale: 1.15, rotate: [0, -6, 6, 0] }}
      transition={{ duration: 0.4, delay }}
    />
    <motion.p
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, ease: EASE, delay: delay + 0.15 }}
      viewport={viewport}
    >
      {label}
    </motion.p>
  </div>
);

const AboutUs3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="about_us_2">
      <main className="about_us">
        {/* LEFT INFO — stagger paragraph reveal */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="info"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {[
              "As CEO & Operations Head, I oversee end-to-end operations including delivery planning, workflow optimization, quality assurance, resource allocation, and performance tracking. I am accountable for building systems that ensure predictable delivery, cost efficiency, and operational transparency—critical elements for scaling a global digital agency. My role also includes defining operational KPIs, managing risk, and continuously improving internal processes to support growth at scale",
              "I work closely with leadership, clients, and cross-functional teams to maintain alignment between business objectives and execution realities. My analytical mindset and attention to operational detail allow me to proactively identify bottlenecks, streamline workflows, and implement solutions that improve productivity and profitability. I also lead the adoption of modern tools, automation frameworks, and process documentation to ensure consistency and operational maturity.",
            ].map((para, i) => (
              <motion.p key={i} variants={staggerItem}>
                {para}
              </motion.p>
            ))}
          </motion.div>

          <div className="read-more-wrapper">
            <NavLink to="/contact" className="read-more-btn">
              Read More
              <img src={arrow} alt="arrow" className="read-more-icon" />
            </NavLink>
          </div>
        </motion.div>

        {/* TITLE BOX — fade up, stagger paragraphs */}
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
          <p id="hero_job">CEO &amp; Operations head</p>

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
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.04, filter: "brightness(1.1)" }}
          />
        </motion.div>
      </main>

      {/* INNOVATION HEADING — clip-path reveal */}
      <motion.div
        className="blue"
        initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1.1, ease: EASE }}
        viewport={viewport}
      >
        <p>Innovation That Sets Us Apart</p>
      </motion.div>

      {/* DIVIDER */}
      <motion.div
        className="divider-about3"
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        style={{ transformOrigin: "center" }}
      />

      {/* FEATURE CARDS — bounce in */}
      <motion.div
        className="card_box"
        variants={staggerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <FeatureCard
          src={star}
          alt="star"
          label="6+ Years of Delivering Smart Digital Solutions"
          delay={0}
        />
        <FeatureCard
          src={hand}
          alt="hand"
          label="A Team Driving Creative Intelligence"
          delay={0.1}
        />
        <FeatureCard
          src={bulb}
          alt="bulb"
          label="Smart Execution for Smarter Results"
          delay={0.2}
        />
        <FeatureCard
          src={human}
          alt="human"
          label="Turning Ambition Into Measurable Success"
          delay={0.3}
        />
      </motion.div>

      {/* DIVIDER */}
      <motion.div
        className="divider-about3"
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        style={{ transformOrigin: "center" }}
      />

      {/* MARQUEE — CSS driven, no animation overhead */}
      <div className="digital_mart">
        <div className="marquee">
          <div className="track">
            <span className="star">*</span>
            <span className="tourney">Digital Marketing</span>
            <span className="star">*</span>
            <span>Design &amp; Creative</span>
            <span className="star">*</span>
            <span className="tourney">Web &amp; App Development</span>
            <span className="star">*</span>
            <span>Business Software Solutions</span>
            <span className="star">*</span>
            <span className="tourney">E-commerce Solutions</span>
            <span className="star">*</span>
            <span>Branding &amp; Strategy</span>
          </div>
          <div className="track">
            <span className="star">*</span>
            <span className="tourney">Digital Marketing</span>
            <span className="star">*</span>
            <span>Design &amp; Creative</span>
            <span className="star">*</span>
            <span className="tourney">Web &amp; App Development</span>
            <span className="star">*</span>
            <span>Business Software Solutions</span>
            <span className="star">*</span>
            <span className="tourney">E-commerce Solutions</span>
            <span className="star">*</span>
            <span>Branding &amp; Strategy</span>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <motion.div
        className="divider-about3"
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        style={{ transformOrigin: "center" }}
      />

      {/* STATS ROW — stagger flip-up with animated counters */}
      <motion.div
        className="about_us3_end"
        variants={staggerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {[
          { value: "178+", label: "Success Campaigns" },
          { value: "200+", label: "Brands Empowered" },
          { value: "24/7", label: "Support Availability" },
          { value: "100+", label: "Optimised Websites" },
          { value: "96.7%", label: "Continued Partnerships" },
        ].map((stat, i) => (
          <motion.div
            className="div-end"
            key={i}
            variants={flipUp}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 8px 32px rgba(0,200,255,0.25)",
              transition: { type: "spring", stiffness: 260 },
            }}
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: EASE }}
              viewport={viewport}
            >
              <Counter value={stat.value} />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: i * 0.1 + 0.15, ease: EASE }}
              viewport={viewport}
            >
              {stat.label}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutUs3;
