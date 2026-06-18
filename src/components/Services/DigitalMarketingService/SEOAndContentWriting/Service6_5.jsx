import React from "react";
import "../../page5.css";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import erp from "../../../../assets/SEO/icon/Group 196.png";
import crm from "../../../../assets/SEO/icon/Group 197.png";
import bpm from "../../../../assets/SEO/icon/Group 198.png";
import a from "../../../../assets/SEO/icon/Group 199.png";
import dot from "../../../../assets/SEO/icon/Group 200.png";
import hr from "../../../../assets/SEO/icon/Group 201.png";
import camel from "../../../../assets/SEO/icon/Group 202.png";
import { NavLink } from "react-router-dom";

const logos = [erp, crm, bpm, a, dot, hr, camel];

const Service6_5 = () => {
  return (
    <main className="bss5">
      <section className="blue-title-bss5">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Social Platforms We Specialize In
          <div>Strategic Partnerships</div>
        </motion.h1>
      </section>

      <motion.section
        className="slider-bss5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="slider-track-bss5">
          {[...logos, ...logos].map((img, index) => (
            <img src={img} alt="logo"key={index} />
          ))}
        </div>
      </motion.section>

      <motion.section
        className="para-bss5"
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p>
          At Visiomatix Media, we manage a strategic ecosystem of SEO & Content
          Writing initiatives, carefully planning and optimizing every element
          based on your business goals, industry dynamics, and audience search
          intent. From website pages and long form content to blogs, landing
          pages, and authority building assets, we design intent led SEO and
          content strategies focused on visibility, relevance, and long term
          performance. Through disciplined execution, advanced keyword
          intelligence, and continuous optimization, we deliver consistent
          organic visibility, qualified traffic, and sustainable growth
          transforming search interactions into measurable business value while
          strengthening long term brand credibility and trust.
        </p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <NavLink to="/contact" className="nav-avoid-blue">
            Book Your Free Strategy Call
          </NavLink>
        </motion.button>
      </motion.section>
    </main>
  );
};

export default Service6_5;
