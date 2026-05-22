import React from "react";
import "../../page3.css";
import { motion } from "framer-motion";
import image3 from "../../../../assets/ContentAndVideoMarketing/images/2.png";

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
          <p>
            A Strategic Content & Video Marketing Agency Focused on Growth in
            Nashik
          </p>
          At Visiomatix Media, a trusted Content & Video Marketing agency, we
          specialize in driving meaningful visibility, audience engagement, and
          measurable growth through strategically engineered content and video
          ecosystems. Our focus goes beyond publishing content we design
          precision led content and video frameworks that connect with the right
          audience at the right moment through compelling, intent driven
          storytelling.
          <br />
          As a performance driven Content & Video Marketing agency, we believe
          impact is built through attention, relevance, and consistency. Through
          audience intelligence, creative strategy, and continuous performance
          optimization, we help brands scale reach, strengthen brand recall, and
          convert visibility into qualified engagement and business outcomes.
          This disciplined, results first approach ensures sustainable growth,
          stronger brand positioning, and long term content driven impact.
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
