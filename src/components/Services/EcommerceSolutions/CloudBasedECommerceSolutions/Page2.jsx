import React from 'react'
import "../../page2.css";
import { motion } from "framer-motion";

import frame1 from "../../../../assets/ecommerce-solutions/images/Frame 120.png";
import frame2 from "../../../../assets/ecommerce-solutions/images/Frame 123.png";
import frame3 from "../../../../assets/ecommerce-solutions/images/Frame 122.png";
import frame4 from "../../../../assets/ecommerce-solutions/images/Frame 125.png";
import frame5 from "../../../../assets/ecommerce-solutions/images/Frame 124.png";
import frame6 from "../../../../assets/ecommerce-solutions/images/Frame 121.png";

// 🔥 SAME GLOBAL SYSTEM
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

const Page2 = () => {
  return (
    <>
      <section className="digital-marketing-services-2-2">

        <motion.div
          className="benefites-2"
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          BENEFITS
        </motion.div>

        <motion.div
          className="sub-title-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Benefits of Cloud-Based E-commerce Solutions with Visiomatix Media
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">

            <Benefit img={frame1} title="Cloud-Native Commerce Architecture"
              text="Our cloud-based e-commerce platforms are architected around your business model, product strategy, and customer journey  ensuring seamless alignment between cloud infrastructure, operations, and long-term revenue growth." />

            <Benefit img={frame2} title="Secure & Compliant Cloud Commerce"
              text="We implement advanced cloud security protocols, encrypted transactions, role-based access control, and compliance-ready infrastructure to safeguard customer data and business operations." />

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <Benefit img={frame6} title="Elastic & Future-Ready Scalability"
              text="We build flexible, modular cloud commerce systems that automatically scale with traffic spikes, product expansion, and market demand  without compromising performance or uptime." />

            <Benefit img={frame5} title="Seamless Cloud Integrations"
              text="Our solutions integrate effortlessly with CRMs, ERPs, payment gateways, logistics partners, and third-party tools  creating a unified, scalable digital commerce ecosystem." />

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <Benefit img={frame3} title="High Performance & Uptime Stability"
              text="Our cloud environments are optimized for speed, resilience, and availability delivering smooth browsing, fast checkouts, and uninterrupted performance during peak sales events." />

            <Benefit img={frame4} title="Automated Operations & Efficiency"
              text="Through cloud-based automation for order processing, inventory sync, reporting, and performance monitoring, we reduce manual effort, minimize errors, and enhance operational efficiency across teams." />

          </div>

        </motion.div>

        <motion.div
          className="second-container-2"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >

          <p className="second-text">
            Cloud-Based E-commerce Solutions at Visiomatix Media go beyond hosting online stores we build scalable, secure, and high-performance cloud commerce ecosystems engineered for long-term revenue growth and operational agility. Our cloud-native, performance-driven approach ensures every platform aligns with business objectives, enhances customer journeys, optimizes infrastructure efficiency, and delivers measurable commercial impact.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{ width: '100%' }} variants={containerVariant}>

            <motion.li className="second-text" variants={fadeUp}>
              Cloud-Native Commerce Architecture Future-ready, scalable cloud infrastructures designed around your business model, customer lifecycle, and growth strategy.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Built for speed and uptime stability, our platforms dynamically scale during traffic spikes, peak sales, and expansion phases without compromising performance.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Optimized code, modular frameworks, and standardized cloud deployment practices ensure maintainability, resilience, and professional execution.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Conversion-Focused User Experiences High-performance storefronts and role-based admin systems engineered for usability, agility, and operational control.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Advanced cloud security protocols, encrypted transactions, and stable infrastructure ensure trust, compliance readiness, and long-term transactional stability.
            </motion.li>

          </motion.ul>

        </motion.div>

      </section>
    </>
  )
};

// 🔥 SAME reusable component
const Benefit = ({ img, title, text }) => (
  <motion.div
    className='e-commerce-services-benefits-div'
    variants={fadeUp}
  
    whileHover={{
      y: -8,
      scale: 1.03,
      boxShadow: "0 14px 40px rgba(0,200,255,0.20)",
      transition: { type: "spring", stiffness: 260 }
    }}>
    <motion.img
      src={img}
      alt="Icon"
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ rotate: [0, -6, 6, 0], scale: 1.15, transition: { duration: 0.4 } }}
    />
    <h3 className="benefit-title">{title}</h3>
    <p className="benefit-text">{text}</p>
  </motion.div>
);

export default Page2;