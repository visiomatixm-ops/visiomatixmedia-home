import React from "react";
import "../../page3.css";
import { motion } from "framer-motion";

import image3 from "../../../../assets/Analytics&ROI/images/hero2.png";

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
          <p>A Performance Focused Analytics & ROI Tracking Agency in Nashik</p>
          At Visiomatix Media, a trusted Analytics & ROI Tracking agency, we
          specialize in delivering clear performance visibility, controlled
          measurement frameworks, and measurable business impact through
          strategically engineered analytics ecosystems. Our focus goes beyond
          basic reporting we design precision led analytics structures that
          track the right metrics, measure true performance, and support
          confident decision making. As a performance-driven analytics partner,
          we believe growth comes from clarity, accountability, and actionable
          insight. Through advanced data integration, attribution modeling, and
          continuous performance analysis, we help brands optimize investments,
          improve efficiency, and convert data into measurable ROI without
          relying on vanity metrics. This disciplined, results first approach
          ensures sustainable growth, stronger strategic alignment, and long
          term business value.
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
