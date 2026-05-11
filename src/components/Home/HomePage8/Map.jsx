import React from "react";
import { motion } from "framer-motion";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleIn,
  floatYSlow,
  glowPulse,
  viewport,
  EASE,
} from "../../../hooks/useScrollAnimation";
import worldMap from "../../../assets/images/map_final.png";
import "./Map.css";

const Map = () => {
  return (
    <section className="global-stage">
      {/* Content Wrapper */}
      <div className="global-container">
        {/* Text Overlay */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="global-text"
        >
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            viewport={viewport}
          >
            Representing Visiomatix Media on the
          </motion.p>
          <motion.h1
            className="title"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            viewport={viewport}
          >
            Global Stage!
          </motion.h1>
        </motion.div>

        {/* Map Image — continuous subtle float */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          animate="float"
          {...floatYSlow}
          className="map-wrapper"
        >
          <img
            src={worldMap}
            alt="Global Presence Map"
            className="global-map"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Map;
