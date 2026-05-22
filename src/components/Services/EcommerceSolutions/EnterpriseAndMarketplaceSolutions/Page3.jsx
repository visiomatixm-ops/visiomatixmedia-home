import React from "react";
import { motion } from "framer-motion";
import "../../page3.css";

import image3 from "../../../../assets/EnterpriseAndMarketplaceSolutions/images/2.png";

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
            Enterprise & Marketplace Solutions Company in Nashik Built for Scale
            & Sustainable Growth
          </p>
          At Visiomatix Media, a trusted Enterprise & Marketplace Solutions
          company in Nashik, we specialize in building scalable, secure, and
          high-performance multi-vendor platforms that drive sustainable
          commercial growth.
          <br />
          Our focus extends beyond traditional e-commerce we architect
          purpose-driven enterprise ecosystems that streamline vendor
          management, optimize operational workflows, and enhance large-scale
          digital commerce performance across complex marketplace environments.
          <br />
          As a performance-driven enterprise solutions provider in Nashik, we
          believe impactful marketplace platforms are built on intelligent
          architecture, structured governance, and strategic execution. This
          approach ensures scalability, operational control, and long-term
          stability empowering organizations to expand market reach and achieve
          sustained revenue growth.
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
