import React from "react";
import "../../page3.css";
import { motion } from "framer-motion";

import image3 from "../../../../assets/CloudBasedE-CommerceSolutions/image8.png";

function Page3() {
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
            Cloud-Based E-commerce Experts in Nashik Driving Scalable
            Infrastructure & Commerce Growth
          </p>
          At Visiomatix Media, a trusted Cloud-Based E-commerce Solutions
          company in Nashik, we specialize in building scalable, secure, and
          high-performance cloud commerce platforms that power sustainable
          digital growth. Our focus goes beyond launching online stores we
          architect cloud-native ecosystems that enhance agility, optimize
          customer experiences, and ensure long-term reliability across
          multi-channel sales environments. As a performance-driven cloud
          commerce partner, we believe successful e-commerce platforms are built
          on resilient cloud architecture, seamless integrations, and strategic
          execution. This approach ensures uptime stability, effortless
          scalability, and operational efficiency enabling businesses to scale
          faster and achieve consistent revenue growth in a dynamic digital
          marketplace.
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
}

export default Page3;
