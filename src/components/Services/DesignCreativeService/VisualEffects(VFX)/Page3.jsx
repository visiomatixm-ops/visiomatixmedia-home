import React from "react";
import "../../page3.css";
import { motion } from "framer-motion";
import image3 from "../../../../assets/VisualEffects(VFX)/images/2.png";

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
            A Trusted, Results Focused Visual Effects (VFX) Agency in Nashik
          </p>
          At Visiomatix Media, a trusted Visual Effects (VFX) agency, we
          specialize in elevating visual credibility, narrative control, and
          cinematic impact through strategically engineered VFX pipelines. Our
          focus goes beyond basic post-production we design precision-led VFX
          frameworks that enhance realism, strengthen storytelling, and position
          content at a high production standard across films, ads, and digital
          platforms.
          <br />
          As a performance driven VFX agency, we believe visual effects are
          about shaping perception, reinforcing narrative authority, and
          delivering measurable visual impact. Through strategic planning,
          technical excellence, real-time quality control, and continuous
          refinement, we help brands and creators manage visual consistency,
          enhance immersion, and convert attention into lasting audience impact
          without compromising authenticity or creative integrity. This
          disciplined, results first approach ensures scalable VFX execution,
          stronger visual presence, and long-term cinematic value.
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
