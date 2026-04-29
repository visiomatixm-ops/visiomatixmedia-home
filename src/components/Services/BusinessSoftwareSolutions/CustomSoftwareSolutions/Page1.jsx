import React from "react";
import "../../page1.css";
import { motion } from "framer-motion";
import digimart from "../../../../assets/CustomSoftwareSolutions/images/1.png";

const Page1 = () => {
  return (
    <div className="service_1_root">
      <main className="hero-box-service1">
        <div className="title-box-service1">
          <motion.h1
            className="title2-service1"
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Custom Software Solutions
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Tailored Software Solutions. Designed for Efficiency, Control &
            Growth.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At Visiomatix Media, Custom Software Solutions are treated as
            strategic business enablers not just technical builds. We architect
            scalable, secure, and high-performance software systems designed to
            streamline operations, enhance productivity, and deliver measurable
            long term value. Through tailored architecture, clean development
            standards, & future ready frameworks, we transform complex business
            requirements into powerful, efficient, and growth oriented software
            ecosystems.
          </motion.p>
        </div>

        <div className="logo-box2-service1">
          <motion.img
            src={digimart}
            alt=""
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          />

          <div>
            <motion.div
              className="social-media-service1"
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <p>
                HOW CUSTOM SOFTWARE SOLUTIONS WORK
                <br />{" "}
                <span>THE STRATEGY BEHIND OUR CUSTOM SOFTWARE SOLUTIONS</span>
              </p>
            </motion.div>

            <div className="content-box-service1">
              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2>
                  <span>01.</span>Strategic Software Blueprint & Business
                  Alignment
                </h2>
                <p>
                  We define precise business objectives, evaluate operational
                  workflows, and design scalable software architectures aligned
                  with efficiency, automation, and long-term organizational
                  growth.
                </p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2>
                  <span>02.</span>Intelligent Development & System Engineering
                </h2>
                <p>
                  We develop secure, high performance custom software built on
                  clean architecture, seamless integrations, and structured
                  execution ensuring reliability across teams, processes, and
                  platforms.
                </p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2>
                  <span>03.</span>Performance, Security & Scalable Governance
                </h2>
                <p>
                  Through rigorous testing, data protection protocols, and
                  continuous optimization, we ensure long-term stability, system
                  resilience, and sustainable scalability as your business
                  evolves.
                </p>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With Visiomatix Media, Custom Software Solutions deliver more than
              operational functionality they drive efficiency, scalability, and
              long term strategic advantage. Through intelligent software
              architecture and precision driven development, we transform
              complex business processes into high performing, future ready
              digital ecosystems that create sustainable business value.
            </motion.p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page1;
