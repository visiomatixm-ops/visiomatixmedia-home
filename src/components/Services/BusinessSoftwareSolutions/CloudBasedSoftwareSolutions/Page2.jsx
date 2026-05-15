import { motion } from 'framer-motion'
import React from "react";

import "../../page2.css";

import frame1 from "../../../../assets/CloudBasedSoftwareSolutions/images/image21.png";
import frame2 from "../../../../assets/CloudBasedSoftwareSolutions/images/image23.png";
import frame3 from "../../../../assets/CloudBasedSoftwareSolutions/images/image25.png";
import frame4 from "../../../../assets/CloudBasedSoftwareSolutions/images/image26.png";
import frame5 from "../../../../assets/CloudBasedSoftwareSolutions/images/image24.png";
import frame6 from "../../../../assets/CloudBasedSoftwareSolutions/images/image22.png";

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">
        <motion.div className="benefites-2" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.7 }}>BENEFITS</motion.div>

        <motion.div className="sub-title-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.15 }}>
          Benefits of Cloud-Based Software Solutions with Visiomatix Media
        </motion.div>

        <motion.div className="benefites-containr-2" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.75, delay: 0.2 }}>
          <div className="column-2 custom-border-2 right-pad-30">
            <div>
              <img src={frame1} alt="Icon" />
              <h3 className="benefit-title">
                Cloud-Native Architecture Design
              </h3>
              <p className="benefit-text">
                Solutions architected specifically for cloud environments
                ensuring agility, resilience, and seamless scalability from day
                one.
              </p>
            </div>

            <div>
              <img src={frame2} alt="Icon" />
              <h3 className="benefit-title">
                Operational Agility & Workflow Efficiency
              </h3>
              <p className="benefit-text">
                Cloud-driven systems streamline processes, enhance
                collaboration, and enable teams to work securely from anywhere.
              </p>
            </div>
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame6} alt="Icon" />
              <h3 className="benefit-title">
                Scalable & Future-Ready Cloud Systems
              </h3>
              <p className="benefit-text">
                Flexible cloud infrastructures that grow with your business
                allowing rapid deployment of new features, users, and
                integrations without disruption.
              </p>
            </div>

            <div>
              <img src={frame5} alt="Icon" />
              <h3 className="benefit-title">
                Secure & Compliant Cloud Environments
              </h3>
              <p className="benefit-text">
                Advanced cloud security frameworks, access controls, and
                compliance-ready configurations safeguard data and ensure
                regulatory alignment.
              </p>
            </div>
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame3} alt="Icon" />
              <h3 className="benefit-title">
                High Performance & Reliable Availability
              </h3>
              <p className="benefit-text">
                Optimized cloud platforms engineered for speed, uptime, and
                consistent performance even under dynamic workloads.
              </p>
            </div>

            <div>
              <img src={frame4} alt="Icon" />
              <h3 className="benefit-title">Seamless Cloud Integrations</h3>
              <p className="benefit-text">
                Smooth integration with SaaS platforms, enterprise systems,
                APIs, and third-party tools enabling unified, connected digital
                ecosystems.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="second-container-2" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.75, delay: 0.25 }}>
          <p className="second-text">
            Cloud-Based Software Solutions at Visiomatix Media go beyond
            traditional deployments we build scalable, secure, and
            high-performance cloud-native systems that accelerate operational
            efficiency and long-term digital growth. Our strategic,
            performance-driven cloud approach ensures every solution aligns with
            business objectives, enhances flexibility, and delivers measurable
            impact across distributed environments.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul style={{ width: "105%" }}>
            <li className="second-text">
              Strategic Cloud Architecture Robust, future-ready cloud
              infrastructures designed around business workflows, operational
              scalability, and long-term agility.
            </li>
            <li className="second-text">
              Performance Optimized Cloud Development Execution focused on
              speed, resilience, and availability ensuring consistent uptime,
              reliable performance, and outcomes.
            </li>
            <li className="second-text">
              Frameworks & Standards Standardized deployment models and clean
              engineering practices ensure maintainability, scalability, and
              enterprise-grade execution.
            </li>
            <li className="second-text">
              Agile User Experience & Accessibility Cloud enabled, role based
              systems that enhance collaboration, improve productivity, and
              support secure access from anywhere.
            </li>
            <li className="second-text">
              Advanced cloud security protocols, strong data protection
              measures, and stable infrastructure ensure long-term trust,
              compliance, and operational continuity.
            </li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
};

export default Page2;

