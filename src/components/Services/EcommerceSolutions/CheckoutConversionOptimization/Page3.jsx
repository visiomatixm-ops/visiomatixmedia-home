import React from 'react'
import '../../page3.css'
import { motion } from "framer-motion";

import image3 from "../../../../assets/CheckoutConversionOptimization/images/2.png";

const Page3 = () => {
  return (
    <section className="business-software-solution3">

      <motion.div
        className="para-bss3"
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >

        <p>
          Checkout & Conversion Optimization Partner in Nashik 
          Focused on Revenue Growth & Measurable Impact
        </p>

        
          At Visiomatix Media, a trusted Checkout & Conversion Optimization 
          partner in Nashik, we specialize in transforming underperforming 
          checkout journeys into high-converting revenue engines.
        

        <br />
        Our focus goes beyond basic UI adjustments  we implement purpose-driven 
        optimization strategies that reduce cart abandonment, enhance payment 
        trust, and streamline the entire purchase flow across digital channels.
        As a performance-driven conversion optimization provider in Nashik, we believe 
        impactful results are built on behavioral analytics, frictionless design, and 
        disciplined testing. This approach ensures faster checkouts, improved user 
        confidence, and measurable revenue growth through data-backed conversion improvements
        

      </motion.div>

      <motion.img
        src={image3}
        alt="Checkout Conversion Optimization"
        className="image-bss3"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      />

    </section>
  )
}

export default Page3