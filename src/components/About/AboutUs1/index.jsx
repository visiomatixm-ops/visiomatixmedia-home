import { motion } from "framer-motion";
import mission from "../../../assets/icons/Group 194.png";
import vision from "../../../assets/icons/Group 195.png";
import purpose from "../../../assets/icons/Group 196.png";
import values from "../../../assets/icons/Group 197.png";
import approach from "../../../assets/icons/Group 198.png";

import "./index.css";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleIn,
  staggerContainer,
  staggerSlow,
  cardReveal,
  flipUp,
  bounceIn,
  drawLine,
  glowPulse,
  viewport,
  EASE,
} from "../../../hooks/useScrollAnimation";

const expertiseList = [
  {
    title: "Mission",
    description:
      "Our mission at Visiomatix Media is to empower businesses with smart digital strategies, creative design, and performance-driven solutions that deliver measurable growth. We focus on building strong brands, meaningful digital experiences, and long-term success for our clients.",
    img: mission,
  },
  {
    title: "Vision",
    description:
      "Our vision at Visiomatix Media is to become a trusted digital growth partner for brands by delivering innovative, scalable, and result-driven solutions in a rapidly evolving digital world.",
    img: vision,
  },
  {
    title: "Purpose",
    description:
      "Our purpose at Visiomatix Media is to help businesses grow by turning ideas into impactful digital experiences through strategy, creativity, and technology.",
    img: purpose,
  },
  {
    title: "Values",
    description:
      "At Visiomatix Media, our values are rooted in integrity, creativity, and a results-driven mindset. We believe in transparent communication, strong collaboration, and delivering high-quality work that creates real value for our clients and long-term partnerships.",
    img: values,
  },
  {
    title: "Approach",
    description:
      "Our approach at Visiomatix Media is strategy-first and execution-focused. We combine research, creativity, and technology to deliver tailored digital solutions that are scalable, measurable, and aligned with our clients' business goals.",
    img: approach,
  },
];

/* Word-by-word heading reveal */
const HeadingReveal = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.3em" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden:  { opacity: 0, y: 50, rotate: 5 },
            visible: {
              opacity: 1, y: 0, rotate: 0,
              transition: { duration: 0.7, ease: EASE, delay: i * 0.06 },
            },
          }}
          style={{ display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

const AboutUs1 = () => {
  return (
    <section className="about-section-about1">
      <div className="about-container-about1">

        {/* PAGE HERO HEADING — word-by-word entrance on load */}
        <motion.h1
          className="page1-about-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <HeadingReveal
            text="About Us"
            className="gradient-text-about1"
          />
        </motion.h1>

        {/* Sub-title — clip reveal */}
        <motion.p
          className="about-subtitle-about1"
          initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
        >
          Digital solutions that drive growth.
        </motion.p>

        {/* Divider draw-in */}
        <motion.div
          variants={drawLine}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          style={{
            height: "2px",
            background: "linear-gradient(90deg, #00c8ff, #1e88e5, transparent)",
            margin: "16px 0 24px",
            transformOrigin: "left",
          }}
        />

        {/* Description — fade from right */}
        <motion.p
          className="about-description-about1"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          We provide result-driven digital marketing services that boost online
          visibility, engagement, and business growth through strategic SEO,
          social media, and performance campaigns.
        </motion.p>

        {/* OUR EXPERTISE tag */}
        <motion.span
          className="about-tag-1-about1"
          initial={{ opacity: 0, x: -30, letterSpacing: "0em" }}
          whileInView={{ opacity: 1, x: 0, letterSpacing: "0.12em" }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={viewport}
        >
          OUR EXPERTISE
        </motion.span>

        {/* CARDS — stagger flip-up */}
        <motion.div
          className="cards-about1"
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {expertiseList.map((item, index) => (
            <motion.div
              className="feature-card-1-about1"
              key={index}
              variants={flipUp}
            >
              <motion.div
                className="icon-box-1-about1"
              >
                <img src={item.img} alt={item.title} />
              </motion.div>

              <motion.h4
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: EASE }}
                viewport={viewport}
              >
                {item.title}
              </motion.h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs1;
