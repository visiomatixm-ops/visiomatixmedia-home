import { motion } from 'framer-motion'
import React from "react";

import "../../page2.css";

import frame1 from "../../../../assets/CustomSoftwareSolutions/images/image21.png";
import frame2 from "../../../../assets/CustomSoftwareSolutions/images/image23.png";
import frame3 from "../../../../assets/CustomSoftwareSolutions/images/image25.png";
import frame4 from "../../../../assets/CustomSoftwareSolutions/images/image26.png";
import frame5 from "../../../../assets/CustomSoftwareSolutions/images/image24.png";
import frame6 from "../../../../assets/CustomSoftwareSolutions/images/image22.png";

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">
        <motion.div className="benefites-2" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.7 }}>BENEFITS</motion.div>

        <motion.div className="sub-title-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.15 }}>
          Benefits of Custom Software Solutions with Visiomatix Media
        </motion.div>

        <motion.div className="benefites-containr-2" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.75, delay: 0.2 }}>
          <div className="column-2 custom-border-2 right-pad-30">
            <div>
              <img src={frame1} alt="Icon"/>
              <h3 className="benefit-title">
                Business-Aligned Software Architecture
              </h3>
              <p className="benefit-text">
                We design software systems tailored to your unique workflows,
                ensuring seamless alignment between technology, operations, and
                long-term business objectives.
              </p>
            </div>

            <div>
              <img src={frame2} alt="Icon"/>
              <h3 className="benefit-title">
                Process Automation & Operational Efficiency
              </h3>
              <p className="benefit-text">
                By automating repetitive processes and streamlining workflows,
                we reduce manual effort, improve accuracy, and enhance overall
                organizational productivity.
              </p>
            </div>
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame6} alt="Icon"/>
              <h3 className="benefit-title">Scalable & Future-Ready Systems</h3>
              <p className="benefit-text">
                Our modular architectures are built to evolve with your
                organization allowing effortless expansion, feature
                enhancements, and system integrations without performance
                disruption.
              </p>
            </div>

            <div>
              <img src={frame5} alt="Icon"/>
              <h3 className="benefit-title">
                Secure, Compliant & Data-Driven Development
              </h3>
              <p className="benefit-text">
                Advanced security frameworks, access controls, and
                compliance-ready structures protect critical data and strengthen
                system integrity.
              </p>
            </div>
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame3} alt="Icon"/>
              <h3 className="benefit-title">
                High-Performance & Reliability Engineering
              </h3>
              <p className="benefit-text">
                We engineer software for speed, stability, and consistent
                performance, ensuring minimal downtime and smooth operations
                even under high workloads.
              </p>
            </div>

            <div>
              <img src={frame4} alt="Icon"/>
              <h3 className="benefit-title">Seamless Integration Ecosystem</h3>
              <p className="benefit-text">
                Our solutions integrate effortlessly with CRMs, ERPs, payment
                systems, and third-party tools enabling unified workflows and
                efficient data synchronization.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="second-container-2" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.75, delay: 0.25 }}>
          <p className="second-text">
            Custom Software Solutions at Visiomatix Media go beyond building
            functional applications we engineer scalable, secure, and
            high-performance software ecosystems that accelerate operational
            efficiency and long-term business growth. Our strategic and
            performance driven approach ensures every solution aligns with
            business goals, optimizes workflows, and delivers measurable digital
            and operational impact.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul style={{ width: "105%" }}>
            <li className="second-text">
              Strategic Software Architecture Future-ready, scalable
              architectures designed around business logic, operational
              workflows, and long-term system evolution.
            </li>
            <li className="second-text">
              Performance-Focused Engineering Development built on speed,
              stability, and efficiency ensuring reliable system performance and
              measurable business outcomes.
            </li>
            <li className="second-text">
              Structured Systems & Clean Code Standards Standardized frameworks
              and disciplined practices ensure maintainability, consistency, and
              professional execution.
            </li>
            <li className="second-text">
              High Impact Functionality & Role Based UX Intuitive, process
              driven interfaces that enhance productivity, streamline
              operations, & improve user adoption across teams.
            </li>
            <li className="second-text">
              Security, Compliance & System Reliability Advanced security
              protocols and stable infrastructure ensure long-term trust,
              compliance, and operational continuity.
            </li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
};

export default Page2;

