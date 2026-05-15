import React from "react";
import "../../page3.css";
import { motion } from "framer-motion";

import image3 from "../../../../assets/EcommerceAndMarketing/images/hero2.png";

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
          <p>A Results Driven E-commerce Marketing Agency in Nashik</p>
          At Visiomatix Media, we specialize in driving high-intent shopper
          visibility, efficient customer acquisition, and measurable revenue
          growth through strategically engineered e-commerce marketing
          strategies. Our approach goes beyond basic promotions we focus on
          connecting the right products with the right audience at the right
          moment using data led insights and clear commercial intent. <br />
          <br />
          As a performance driven e-commerce marketing partner, we believe
          sustainable growth is built on demand capture, conversion
          optimization, and customer lifetime value. Through advanced shopper
          behavior analysis, data intelligence, and continuous optimization, we
          help brands scale sales, control acquisition costs, and convert
          digital visibility into qualified purchases and long-term
          profitability.{" "}
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
