import React from "react";
import "../../page5.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import instagram from "../../../../assets/BrandGuidelinesGovernance/icon/1.png";
import facebook from "../../../../assets/BrandGuidelinesGovernance/icon/2.png";
import linkedin from "../../../../assets/BrandGuidelinesGovernance/icon/3.png";
import youtube from "../../../../assets/BrandGuidelinesGovernance/icon/4.png";
import x from "../../../../assets/BrandGuidelinesGovernance/icon/5.png";
import pinterest from "../../../../assets/BrandGuidelinesGovernance/icon/6.png";
import snapchat from "../../../../assets/BrandGuidelinesGovernance/icon/7.png";
import whatsapp from "../../../../assets/BrandGuidelinesGovernance/icon/8.png";
import google from "../../../../assets/BrandGuidelinesGovernance/icon/9.png";
import telegram from "../../../../assets/BrandGuidelinesGovernance/icon/10.png";
import be from "../../../../assets/BrandGuidelinesGovernance/icon/11.png";
import ball from "../../../../assets/BrandGuidelinesGovernance/icon/12.png";
import reddit from "../../../../assets/BrandGuidelinesGovernance/icon/13.png";
import quora from "../../../../assets/BrandGuidelinesGovernance/icon/14.png";

const logos = [
  instagram,
  facebook,
  linkedin,
  youtube,
  x,
  pinterest,
  snapchat,
  whatsapp,
  google,
  telegram,
  be,
  ball,
  reddit,
  quora,
];

const Page5 = () => {
  return (
    <main className="bss5">
      <section className="blue-title-bss5">
        <h1>
          Brand Guidelines & Governance Solutions
          <div>Strategic Brand Governance Systems</div>
        </h1>
      </section>

      <section className="slider-bss5">
        <div className="slider-track-bss5">
          {[...logos, ...logos].map((img, index) => (
            <motion.img
              src={img}
              alt="logo"
              key={index}
              whileHover={{
                scale: 1.15,
                filter:
                  "brightness(1.15) drop-shadow(0 0 10px rgba(0,200,255,0.5))",
                transition: { duration: 0.3 },
              }}
            />
          ))}
        </div>
      </section>

      <section className="para-bss5">
        <p>
          At Visiomatix Media, our Brand Guidelines & Governance solutions are
          designed to maintain consistency across complex brand ecosystems and
          market touchpoints. We develop structured governance frameworks
          aligned with business vision, communication standards, and operational
          workflows ensuring clarity, control, and scalability across digital
          and organizational channels. We specialize in delivering comprehensive
          guideline systems, including brand usage manuals, tone-of-voice
          standards, visual compliance rules, governance protocols, and
          multi-channel execution frameworks. Every system is crafted for
          consistency, accuracy, and long-term brand protection helping
          businesses safeguard brand equity, maintain credibility, and ensure
          professional execution across markets.
        </p>

        <motion.button
          whileHover={{
            scale: 1.07,
            boxShadow: "0 0 24px rgba(0,200,255,0.45)",
          }}
          whileTap={{ scale: 0.93 }}
        >
          <NavLink to="/contact" className="nav-avoid-blue">
            Book Your Free Strategy Call
          </NavLink>
        </motion.button>
      </section>
    </main>
  );
};

export default Page5;
