import { motion } from 'framer-motion'
import React from "react";

import "../../page2.css";

import frame1 from "../../../../assets/MaintenanceSupportOptimizationBusiness/images/image21.png";
import frame2 from "../../../../assets/MaintenanceSupportOptimizationBusiness/images/image23.png";
import frame3 from "../../../../assets/MaintenanceSupportOptimizationBusiness/images/image25.png";
import frame4 from "../../../../assets/MaintenanceSupportOptimizationBusiness/images/image26.png";
import frame5 from "../../../../assets/MaintenanceSupportOptimizationBusiness/images/image24.png";
import frame6 from "../../../../assets/MaintenanceSupportOptimizationBusiness/images/image22.png";

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">
        <motion.div className="benefites-2" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.7 }}>BENEFITS</motion.div>

        <motion.div className="sub-title-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.15 }}>
          Benefits of Maintenance, Support & Optimization with Visiomatix Media
        </motion.div>

        <motion.div className="benefites-containr-2" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.75, delay: 0.2 }}>
          <div className="column-2 custom-border-2 right-pad-30">
            <div>
              <img src={frame1} alt="Icon"/>
              <h3 className="benefit-title">
                Strategic System Health Management
              </h3>
              <p className="benefit-text">
                Proactive monitoring frameworks designed to ensure system
                stability, early risk detection, and long-term digital
                resilience.
              </p>
            </div>

            <div>
              <img src={frame2} alt="Icon"/>
              <h3 className="benefit-title">
                Workflow Stability & Efficiency Enhancement
              </h3>
              <p className="benefit-text">
                Continuous improvements that eliminate inefficiencies, refine
                processes, and strengthen overall operational productivity.
              </p>
            </div>
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame6} alt="Icon"/>
              <h3 className="benefit-title">
                Scalable & Future-Ready Performance Optimization
              </h3>
              <p className="benefit-text">
                Structured optimization strategies that adapt as your business
                evolves maintaining peak performance without disruption.
              </p>
            </div>

            <div>
              <img src={frame5} alt="Icon"/>
              <h3 className="benefit-title">
                Secure & Compliant System Governance
              </h3>
              <p className="benefit-text">
                Timely security patches, compliance-ready updates, and
                controlled access frameworks safeguard data and protect business
                continuity.
              </p>
            </div>
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame3} alt="Icon"/>
              <h3 className="benefit-title">
                High Availability & Operational Reliability
              </h3>
              <p className="benefit-text">
                Systems engineered for consistent uptime, reduced downtime
                risks, and seamless functionality under dynamic workloads.
              </p>
            </div>

            <div>
              <img src={frame4} alt="Icon"/>
              <h3 className="benefit-title">
                Seamless Platform Support & Enhancements
              </h3>
              <p className="benefit-text">
                Ongoing updates, feature improvements, and structured support
                ensure your digital ecosystem remains competitive and
                future-ready.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="second-container-2" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.75, delay: 0.25 }}>
          <p className="second-text">
            Maintenance, Support & Optimization at Visiomatix Media go beyond
            routine upkeep we safeguard, enhance, and continuously strengthen
            your digital systems to ensure sustained performance and long-term
            operational growth. Our strategic, performance-driven approach
            ensures every system remains aligned with evolving business
            objectives, optimized for efficiency, and protected against
            potential risks.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul style={{ width: "105%" }}>
            <li className="second-text">
              Strategic System Stability Framework Structured maintenance
              roadmaps designed around operational continuity, performance
              consistency, and long-term scalability.
            </li>
            <li className="second-text">
              Performance-Driven Optimization Execution focused on speed,
              stability, & efficiency ensuring systems operate at peak
              performance with measurable improvements.
            </li>
            <li className="second-text">
              Structured Maintenance Standards Disciplined processes and
              standardized update frameworks ensure consistency,
              maintainability, and enterprise-grade support.
            </li>
            <li className="second-text">
              Operational Efficiency & Experience Enhancement Continuous
              refinements that improve usability, streamline workflows, and
              enhance overall system productivity.
            </li>
            <li className="second-text">
              Timely security patches, proactive risk management, and stable
              infrastructure ensure long-term trust, compliance readiness, and
              uninterrupted operations.
            </li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
};

export default Page2;

