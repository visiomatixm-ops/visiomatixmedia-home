import React from "react";
import "../../page3.css";
import { motion } from "framer-motion";

import image3 from "../../../../assets/ProductInventoryOrders/image2.png";

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
            Product, Inventory & Order Management Partner in Nashik Focused on
            Accuracy & Scalable Growth
          </p>
          At Visiomatix Media, a trusted Product, Inventory & Order Management
          partner in Nashik, we specialize in building scalable, secure, and
          high-performance systems that strengthen operational control and
          business efficiency. <br /> <br />
          Our focus goes beyond basic tracking we develop purpose-driven
          management solutions that streamline inventory workflows, enhance
          order accuracy, and ensure long-term reliability across sales and
          fulfillment channels. As a performance-driven systems partner in
          Nashik, we believe effective operations are built on clean
          architecture, structured logic, and strategic execution. This approach
          ensures accuracy, stability, and scalability helping businesses
          optimize stock management, reduce errors, and maintain consistent
          operational growth.
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
