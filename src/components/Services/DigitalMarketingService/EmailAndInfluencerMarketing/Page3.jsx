import React from "react";
import "../../page3.css";
import { motion } from "framer-motion";

import image3 from "../../../../assets/email-influencer/images/hero2.png";

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
          <p>A Results Driven Email & Influencer Marketing Agency in Nashik</p>
          At Visiomatix Media, a trusted Email & Influencer Marketing agency, we
          specialize in driving meaningful engagement, strategic influence, and
          measurable growth through carefully engineered communication and
          creator ecosystems. Our focus goes beyond generic outreach we design
          precision led email journeys and influencer strategies that connect
          with the right audience at the right moment with authentic, purpose
          driven messaging. Through advanced audience segmentation, data driven
          personalization, and curated creator partnerships, we help brands
          scale reach, strengthen credibility, and convert engagement into
          qualified demand and revenue without compromising authenticity. This
          disciplined, results first approach ensures sustainable growth,
          stronger brand authority, and long term relationship driven
          performance.
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
