import React from "react";
import "../../page1.css";
import { motion } from "framer-motion";

import image3 from "../../../../assets/WebAndApp/images/2.png";

const Page3 = () => {
  return (
    <>
      <section className="business-software-solution3">
        <motion.div
          className="para-bss3"
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p>A Performance Driven Web & App Development Agency in Nashik</p>
          At Visiomatix Media, a trusted Web & App Development agency, we
          specialize in building high performance digital platforms that deliver
          seamless user experiences, scalable architecture, and measurable
          business impact. Our focus goes beyond visual design or basic
          development we engineer precision led digital solutions that align
          with your business goals and user expectations.
          <br />
          As a performance driven development partner, we believe web and app
          development is about creating reliable, efficient, and future ready
          systems. Through strategic planning, user centric design, and
          continuous performance optimization, we help brands scale digital
          capabilities, enhance engagement, and convert digital interactions
          into meaningful outcomes. This disciplined, quality first approach
          ensures long term scalability, stronger digital presence, and
          sustained business value.
        </motion.div>

        <motion.img
          src={image3}
          alt=""
          className="image-bss3"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        />
      </section>
    </>
  );
};

export default Page3;
