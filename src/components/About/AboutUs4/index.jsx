import { motion } from "framer-motion";
import "./index.css";
import worldMap from "../../../assets/images/map_final.png";
import {
  fadeLeft,
  scaleIn,
  staggerContainer,
  drawLine,
  glowPulse,
  floatYSlow,
  viewport,
  EASE,
} from "../../../hooks/useScrollAnimation";

/* Animated word reveal helper */
const WordSplit = ({ text }) => {
  const words = text.split(" ");
  return (
    <motion.span
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
            hidden: { opacity: 0, y: 40, skewY: 6 },
            visible: {
              opacity: 1, y: 0, skewY: 0,
              transition: { duration: 0.65, ease: EASE },
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

const AboutUs4 = () => {
  return (
    <div className="page-about4">
      <section className="global-stage-about4">
        <div className="global-container-about4">

          {/* TEXT — fade left + word split */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="global-text-about4"
          >
            <motion.p
              className="subtitle-about4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              viewport={viewport}
            >
              Representing Visiomatix Media on the
            </motion.p>

            <h1 className="title-about4">
              <WordSplit text="Global Stage!" />
            </h1>

            {/* Decorative glowing line under heading */}
            <motion.div
              variants={drawLine}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              style={{
                height: "3px",
                width: "140px",
                borderRadius: "4px",
                background: "linear-gradient(90deg, #00c8ff, #1e88e5)",
                marginTop: "14px",
                transformOrigin: "left",
              }}
            />
          </motion.div>

          {/* MAP IMAGE — scale in + subtle float */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="map-wrapper-about4"
          >
            <motion.img
              src={worldMap}
              alt="Global Presence Map"
              className="global-map-about4"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{
                scale: 1.04,
                filter: "brightness(1.12) drop-shadow(0 0 24px rgba(0,200,255,0.3))",
              }}
            />
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default AboutUs4;
