import React from 'react'
import "../../page3.css";
import { motion } from "framer-motion";

import image3 from "../../../../assets/SecureScableArchitecture/image2.png";


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
            Secure & Scalable Architecture Partner in Nashik Focused on Resilient Infrastructure & Digital Growth
          </p>
          At Visiomatix Media, a trusted Secure & Scalable Architecture partner in Nashik, we specialize in designing resilient, high-performance system foundations that support sustainable digital growth. Our focus goes beyond implementation we architect purpose-driven infrastructures that enhance stability, strengthen security, and ensure long-term reliability across evolving business environments.
          <br /><br />
          As a performance-focused architecture partner in Nashik, we believe robust digital systems are built on security-first design, clean structural planning, and disciplined engineering standards. This approach ensures protection, scalability, and operational continuity  enabling businesses to grow confidently on a secure, future-ready infrastructure.
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
  )
}

export default Page3