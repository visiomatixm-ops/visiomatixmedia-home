import { motion } from 'framer-motion'
import React from 'react'

import '../../page2.css'


import frame1 from '../../../../assets/business-software-solutions/images/Frame 120.png'
import frame2 from '../../../../assets/business-software-solutions/images/Frame 121.png'
import frame3 from '../../../../assets/business-software-solutions/images/Frame 122.png'
import frame4 from '../../../../assets/business-software-solutions/images/Frame 123.png'
import frame5 from '../../../../assets/business-software-solutions/images/Frame 125.png'
import frame6 from '../../../../assets/business-software-solutions/images/Frame 124.png'

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">

        <motion.div className="benefites-2" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.7 }}>
          BENEFITS
        </motion.div>

        <motion.div className="sub-title-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.15 }}>
          Benefits of Process Automation Solutions with Visiomatix Media
        </motion.div>

        <motion.div className="benefites-containr-2" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.75, delay: 0.2 }}>

          <div className="column-2 custom-border-2 right-pad-30">
            <div>
              <img src={frame1} alt="Icon"/>
              <h3 className="benefit-title">
                Business-Aligned Automation Architecture
              </h3>
              <p className="benefit-text">
                Automation frameworks designed around your operational workflows, ensuring seamless alignment between technology, processes, and strategic objectives.
              </p>
            </div>

            <div>
              <img src={frame2} alt="Icon"/>
              <h3 className="benefit-title">
                Workflow Optimization & Efficiency Gains
              </h3>
              <p className="benefit-text">
                Eliminate repetitive manual tasks, reduce human error, and significantly improve productivity across teams and departments.
              </p>
            </div>
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame6} alt="Icon"/>
              <h3 className="benefit-title">
                Scalable & Intelligent Automation Systems
              </h3>
              <p className="benefit-text">
                Flexible, rule-driven automation models that adapt as your business grows  enabling new processes, integrations, and workflows without disruption.
              </p>
            </div>

            <div>
              <img src={frame5} alt="Icon"/>
              <h3 className="benefit-title">
                Secure & Controlled Automation Environment
              </h3>
              <p className="benefit-text">
                Advanced access controls, data protection mechanisms, and governance structures ensure secure and compliant automated operations.
              </p>
            </div>
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame3} alt="Icon"/>
              <h3 className="benefit-title">
                High-Speed Execution & Reliability
              </h3>
              <p className="benefit-text">
                Automation systems engineered for accuracy, stability, and consistent performance  reducing delays and ensuring smooth operations even at scale.
              </p>
            </div>

            <div>
              <img src={frame4} alt="Icon"/>
              <h3 className="benefit-title">
                Seamless System Integrations
              </h3>
              <p className="benefit-text">
                Automation systems engineered for accuracy, stability, and consistent performance  reducing delays and ensuring smooth operations even at scale.
              </p>
            </div>
          </div>

        </motion.div>

        <motion.div className="second-container-2" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.75, delay: 0.25 }}>
          <p className="second-text">
            Process Automation Solutions at Visiomatix Media go beyond eliminating manual tasks — we design intelligent, scalable, and secure automation systems that transform operational efficiency and accelerate long-term business growth. Our strategic, performance-driven approach ensures every automation framework aligns with business objectives, streamlines workflows, and delivers measurable productivity gains across operations.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul style={{ width: '105%' }} >
            <li className="second-text">Strategic Automation Architecture Future ready automation frameworks designed around business processes, operational dependencies, and long-term scalability.</li>
            <li className="second-text">Performance Driven Automation Execution Execution focused on speed, accuracy, & stability, ensuring optimized workflows, reduced errors, & consistent outcomes.</li>
            <li className="second-text">Structured Systems & Standardized Automation Logic Rule-based automation models & clean frameworks ensure reliability, maintainability, & professional execution.</li>
            <li className="second-text">High Impact Workflow Optimization Role based, process centric automation that enhances productivity, improves turnaround time, & strengthens operational control.</li>
            <li className="second-text">Security, Governance System Reliability Secure automation environments with access control stable infrastructure ensure long term compliance, operational continuity.</li>
          </ul>
        </motion.div>

      </section>
    </div>
  )
}

export default Page2
