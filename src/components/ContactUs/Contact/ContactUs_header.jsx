import React from 'react'
import './ContactUs-header.css'
import { motion } from "framer-motion";

const ContactUs_header = () => {
  return (
    <section className="contact-us">
<motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.h1
          className="contact-title"
          initial={{ opacity: 0, y: -40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="contact-breadcrumb"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          Home | <span>Contact</span>
        </motion.p>
      </motion.div>
    </section>
  )
}

export default ContactUs_header