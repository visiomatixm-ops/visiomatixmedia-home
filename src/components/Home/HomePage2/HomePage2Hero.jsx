import "./HomePage2Hero.css";
import { motion } from "framer-motion";

import heroImage from "../../../assets/images/hero.png";
import rocket from "../../../assets/images/rocket.png";
import vectorRight from "../../../assets/images/Vector (right)1.png";
import vectorLeft from "../../../assets/images/Vector (left)2.png";
import leftCoat from "../../../assets/icons/leftCoat.png";
import rightCoat from "../../../assets/icons/rightCoat.png";
import { NavLink } from "react-router";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleIn,
  floatY,
  floatYSlow,
  glowPulse,
  staggerContainer,
  staggerItem,
  drawLine,
  viewport,
  EASE,
} from "../../../hooks/useScrollAnimation";

/* Split heading text into words for word-by-word reveal */
const WordReveal = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.28em" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 35, rotate: 2 },
            visible: {
              opacity: 1,
              y: 0,
              rotate: 0,
              transition: { duration: 0.55, ease: EASE },
            },
          }}
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

const HomePage2Hero = () => {
  return (
    <section className="hero-home2">
      <div className="hero-container-home2">
        {/* ===== TOP ROW ===== */}
        <div className="hero-top-home2">
          {/* LEFT TEXT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="hero-text-home2"
          >
            <h1 className="hero-title-home2">
              <WordReveal text="Enter the Visiomatix system. Power" />
              <img src={rightCoat} alt="" />
              <br />
              <WordReveal text="every digital move you make!" />
            </h1>

            <motion.p
              className="hero-desc-home2"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              We provide result-driven digital marketing services that boost
              online visibility, engagement, and business growth through
              strategic SEO, social media, and performance campaigns.
            </motion.p>

            {/* Glowing CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.div
                animate="pulse"
                variants={glowPulse}
                style={{ display: "inline-block", borderRadius: "12px" }}
              >
                <NavLink to="/contact" className="hero-btn-home2">
                  Build With Visiomatix!
                </NavLink>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT CHARACTER */}
          <div className="hero-visual-home2">
            <img src={vectorRight} className="hero-vector-home2" alt="" />
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              /* after reveal, continuously float */
              animate="float"
              {...floatY}
            >
              <img src={heroImage} className="hero-img-home2" alt="" />
            </motion.div>
          </div>
        </div>

        {/* ===== BOTTOM ROW ===== */}
        <div className="hero-bottom-home2">
          {/* ROCKET */}
          <div className="rocket-home2">
            <img src={vectorLeft} className="rocket-vector-home2" alt="" />
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              animate="float"
              {...floatYSlow}
            >
              <img src={rocket} className="rocket-img-home2" alt="" />
            </motion.div>
          </div>

          {/* WELCOME TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="welcome-home2"
          >
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              viewport={viewport}
            >
              <img src={leftCoat} alt="" />
              Welcome to Visiomatix Media
            </motion.h2>

            <motion.p
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {[
                "Whether you're a startup entering the global market, a digital agency seeking a strategic partner, or an enterprise ready to scale across regions,  Visiomatix Media integrates seamlessly into your growth journey.",
                "Working with clients across industries and geographies, we combine strategy, creativity, technology, and performance marketing into a scalable digital system built for global impact.",
                "From startups to scale-ups, we adapt to diverse markets, align with your vision, and deliver results that transcend borders.",
                "This is digital growth without boundaries.",
                "This is Visiomatix Media.",
              ].map((line, i) => (
                <motion.span
                  key={i}
                  variants={staggerItem}
                  style={{ display: "block", marginBottom: "0.4em" }}
                >
                  {line}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomePage2Hero;
