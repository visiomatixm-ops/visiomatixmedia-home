import React from "react";
import { motion } from "framer-motion";
import "../../page3.css";

import image3 from "../../../../assets/MaintenanceSupportAndOptimization/images/2.png";

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
            Maintenance, Support & Optimization Partner in Nashik Focused on
            Stability, Performance & Sustainable Growth
          </p>
          At Visiomatix Media, a trusted Maintenance, Support & Optimization
          partner in Nashik, we specialize in ensuring digital platforms remain
          secure, stable, and high-performing long after launch.
          <br />
          Our focus goes beyond routine updates we implement structured support
          systems that enhance reliability, streamline operations, and protect
          long-term business continuity.
          <br />
          As a performance-driven support partner, we believe sustainable
          digital success is built on proactive monitoring, disciplined
          optimization, and security-first maintenance standards. This approach
          ensures uptime stability, system efficiency, and scalable performance
          — enabling businesses to operate confidently and sustain consistent
          growth.
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
