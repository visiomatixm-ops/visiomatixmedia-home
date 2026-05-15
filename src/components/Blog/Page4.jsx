import React from "react";
import "./service4.css";
import { motion } from "framer-motion";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
  staggerItem,
  flipUp,
  drawLine,
  glowPulse,
  viewport,
  EASE,
} from "../../hooks/useScrollAnimation";
import icon1 from "../../assets/blog/images/icon1.png";
import icon2 from "../../assets/blog/images/icon2.png";
import icon3 from "../../assets/blog/images/icon3.png";
import icon4 from "../../assets/blog/images/icon4.png";
import icon5 from "../../assets/blog/images/icon5.png";

const blogPhilosophyList = [
  {
    title: "Mission",
    img: icon1,
    description:
      "Our blog's mission is to empower businesses with clear, actionable digital insights that help them navigate complexity, adopt smarter strategies, and achieve measurable growth in an ever-evolving digital ecosystem.",
  },
  {
    title: "Vision",
    img: icon2,
    description:
      "We envision our blog as a trusted knowledge platform where brands, founders, and marketers discover future-ready ideas, emerging trends, and proven frameworks that drive sustainable digital success.",
  },
  {
    title: "Purpose",
    img: icon3,
    description:
      "The purpose of our blog is to bridge the gap between strategy and execution by translating complex digital concepts into practical guidance that businesses can apply with confidence.",
  },
  {
    title: "Values",
    img: icon4,
    description:
      "Our content is rooted in integrity, relevance, and value creation. We prioritize clarity over complexity, insights over noise, and long term impact over short term trends ensuring every article delivers meaningful takeaways.",
  },
  {
    title: "Approach",
    img: icon5,
    description:
      "Our approach is insight led and execution focused. We combine real world experience, data driven thinking, and creative perspectives to publish content that is scalable, actionable, and aligned with real business goals.",
  },
];

const Service_4 = () => {
  return (
    <section className="service4-container-blog">
      <div className="service4-content-wrapper-blog">
        {/* ── Tag — letter-spacing expand (matches AboutUs2/Page2 tags) ── */}
        <motion.p
          className="service4-tagline-blog"
          initial={{ opacity: 0, letterSpacing: "0em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.1em" }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={viewport}
        >
          OUR BLOG PHILOSOPHY
        </motion.p>

        {/* ── Section heading — fade from left ── */}
        <motion.h2
          style={{
            color: "#ffffff",
            fontSize: "clamp(24px, 4vw, 38px)",
            fontFamily: "decalotype-semibold",
            marginBottom: "8px",
          }}
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          What Drives Our Content
        </motion.h2>

        {/* ── Decorative line — draws from left ── */}
        <motion.div
          variants={drawLine}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          style={{
            height: "2px",
            background: "linear-gradient(90deg, #00c8ff, #1e88e5, transparent)",
            margin: "12px 0 40px",
            transformOrigin: "left",
          }}
        />

        {/* ── Philosophy cards — stagger flipUp (matches AboutUs1/HomePage4 cards) ── */}
        <motion.div
          className="service4-cards-grid-blog"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {blogPhilosophyList.map((item, index) => (
            <motion.div
              className="service4-philosophy-card-blog"
              key={index}
              variants={flipUp}
              whileHover={{
                y: -10,
                scale: 1.04,
                boxShadow: "0 16px 48px rgba(0,100,255,0.25)",
                transition: { type: "spring", stiffness: 260, damping: 18 },
              }}
            >
              {/* Icon wobble on card hover (matches site-wide icon behaviour) */}
              <motion.div
                className="service4-icon-box-blog-blog"
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.18 }}
                transition={{ duration: 0.45 }}
              >
                <img src={item.img} alt={item.title} />
              </motion.div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Divider — draws from center (matches AboutUs3) ── */}
        <motion.div
          className="service4-divider-blog"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE }}
          viewport={viewport}
          style={{ transformOrigin: "left" }}
        />

        {/* ── Thought Leadership 3-col — stagger fade ── */}
        <motion.div
          className="service4-thought-leadership-blog"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Col 1 — fade left */}
          <motion.div className="service4-tl-col-blog" variants={fadeLeft}>
            <motion.h3
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              viewport={viewport}
            >
              Thought Leadership That Drives Action
            </motion.h3>
            <motion.p variants={staggerItem}>
              At Visiomatix Media, our thought leadership goes beyond opinions
              and trends it is built on real world experience, data backed
              insights, and proven execution. We believe true leadership in the
              digital space is defined by the ability to turn ideas into impact.
              Our blogs are designed to help businesses think strategically, act
              decisively, and implement digital solutions that deliver
              measurable outcomes. By sharing practical frameworks, emerging
              industry insights, and performance driven strategies, we empower
              brands, founders, and marketers to move from inspiration to
              execution with confidence, clarity, and long term vision.
            </motion.p>
          </motion.div>

          {/* Col 2 — fade up */}
          <motion.div className="service4-tl-col-blog" variants={fadeUp}>
            <motion.p variants={staggerItem}>
              Beyond insights, our content is structured to guide decision
              making at every stage of digital growth. We focus on real
              challenges faced by modern businesses and offer clarity through
              actionable guidance, strategic perspectives, and tested
              methodologies.
            </motion.p>
            <motion.p variants={staggerItem}>
              Each article is crafted to help leaders anticipate change, adapt
              to evolving technologies, and build resilient digital strategies
              that scale. Through consistency, relevance, and depth, we aim to
              create a knowledge ecosystem that supports long term success not
              just awareness, but meaningful progress.
            </motion.p>
          </motion.div>

          {/* Col 3 — fade right */}
          <motion.div className="service4-tl-col-blog" variants={fadeRight}>
            <motion.p variants={staggerItem}>
              Ultimately, our goal is to equip businesses with the confidence to
              make smarter, faster, and more informed decisions in an
              increasingly complex digital landscape. By combining strategic
              thinking with practical execution, we ensure our content remains
              relevant, impactful, and aligned with real business outcomes.
            </motion.p>
            <motion.p variants={staggerItem}>
              Whether it's navigating digital transformation, improving
              performance, or building scalable systems, our blogs are designed
              to serve as a reliable resource for leaders committed to
              sustainable growth and continuous innovation.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* ── Bottom divider — draws from right ── */}
        <motion.div
          className="service4-divider-blog"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE }}
          viewport={viewport}
          style={{ transformOrigin: "right" }}
        />
      </div>
    </section>
  );
};

export default Service_4;
