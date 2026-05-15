import { motion } from "framer-motion";
import React from 'react'
import '../../page3.css'


import image3 from "../../../../assets/backend-api-development/images/image2.png";

// 🔥 Animation Variants (Reusable)
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeDown = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Page3 = () => {
  return (
     <>
      <motion.section className="business-software-solution3" variants={containerVariant} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
        <motion.p
          className="para-bss3"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <p>
            A Backend & API Engineering Partner in <br />
Nashik
          </p>
          At Visiomatix Media, we specialize in backend and API engineering that forms the backbone of scalable digital platforms. Our focus is on building secure, high-performance server-side systems that support complex business operations, efficient data flow, and long-term platform growth.<br />We believe strong digital products are powered by well-structured backend architecture, reliable integrations, and disciplined engineering practices. Our teams design backend systems that are resilient, maintainable, and adaptable to evolving technical and business requirements.<br />By prioritizing system stability, scalability, and performance optimization, we help businesses streamline operations, enable seamless connectivity across services, and build technically credible platforms that are reliable today and scalable for future digital expansion.
        </motion.p>
        <motion.img
          src={image3}
          alt=""
          className="image-bss3"
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        />
      </motion.section>
    </>
  )
}

export default Page3