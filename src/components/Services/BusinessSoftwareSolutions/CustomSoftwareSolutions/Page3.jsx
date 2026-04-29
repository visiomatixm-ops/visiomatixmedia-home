import React from "react";
import { motion } from "framer-motion";
import "../../page3.css";

import image3 from "../../../../assets/CustomSoftwareSolutions/images/2.png";

const Page3 = () => {
  return (
    <>
      <section className="business-software-solution3">
        <motion.p
          className="para-bss3"
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p>
            A Performance-Driven Custom Software Company in Nashik Engineered
            for Scalability, Reliability & Operational Excellence
          </p>
          At Visiomatix Media, a trusted Custom Software Solutions company in
          Nashik, we specialize in architecting scalable, secure, and
          high-performance software systems that power sustainable business
          growth.
          <br />
          Our expertise goes beyond functional development we design
          purpose-built software tailored to operational workflows, enabling
          automation, efficiency, and long-term system reliability across
          dynamic business environments.
          <br />
          As a performance-driven custom software development company in Nashik,
          we believe impactful software is built on intelligent architecture,
          process-oriented design, and disciplined execution. This structured
          approach ensures stability, scalability, and technical excellence
          empowering organizations to streamline operations, enhance
          productivity, and achieve measurable, sustainable growth.
        </motion.p>
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
