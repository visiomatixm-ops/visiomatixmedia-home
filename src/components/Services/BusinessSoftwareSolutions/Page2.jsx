import React from 'react'

import '../page2.css'


import frame1 from '../../../assets/business-software-solutions/images/Frame 120.png'
import frame2 from '../../../assets/business-software-solutions/images/Frame 121.png'
import frame3 from '../../../assets/business-software-solutions/images/Frame 122.png'
import frame4 from '../../../assets/business-software-solutions/images/Frame 123.png'
import frame5 from '../../../assets/business-software-solutions/images/Frame 125.png'
import frame6 from '../../../assets/business-software-solutions/images/Frame 124.png'

const Page2 = () => {
  return (
        <div>
      <section className="digital-marketing-services-2-2">

        <div className="benefites-2">
          BENEFITS
        </div>

        <div className="sub-title-2">
          Benefits of Design & Creative Services with Visiomatix Media
        </div>

        <div className="benefites-containr-2">

          <div className="column-2 custom-border-2 right-pad-30">
            <div>
              <img src={frame1} alt="Icon" />
              <h3 className="benefit-title">
                Business Centric Software Architecture
              </h3>
              <p className="benefit-text">
                Our software solutions are tailored to your business workflows and objectives, ensuring seamless alignment between technology and operations for improved efficiency and long term effectiveness.
              </p>
            </div>

            <div>
              <img src={frame2} alt="Icon" />
              <h3 className="benefit-title">
                Process Automation & Efficiency
              </h3>
              <p className="benefit-text">
                By automating repetitive and manual tasks, our software reduces errors, saves time, and enhances productivity across teams, enabling organizations to focus on strategic initiatives.
              </p>
            </div>
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame6} alt="Icon" />
              <h3 className="benefit-title">
                Scalable & Future Ready Systems
              </h3>
              <p className="benefit-text">
                We build flexible and modular architectures that scale effortlessly as your organization grows. New features, users, and integrations can be added without affecting system stability or performance.
              </p>
            </div>

            <div>
              <img src={frame5} alt="Icon" />
              <h3 className="benefit-title">
                Secure & Compliant Development
              </h3>
              <p className="benefit-text">
                We implement industry standard security measures, role based access control, and data protection protocols to safeguard sensitive information and ensure compliance with business and regulatory requirements.
              </p>
            </div>
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame3} alt="Icon" />
              <h3 className="benefit-title">
                High Performance & Reliability
              </h3>
              <p className="benefit-text">
                Our systems are engineered for speed, stability, and consistent performance, ensuring minimal downtime and smooth operations even under high workloads or peak usage.
              </p>
            </div>

            <div>
              <img src={frame4} alt="Icon" />
              <h3 className="benefit-title">
                Seamless System Integrations
              </h3>
              <p className="benefit-text">
                Our solutions integrate smoothly with existing tools, CRMs, ERPs, payment systems, and third party platforms, enabling unified operations and efficient data flow across systems.
              </p>
            </div>
          </div>

        </div>

        <div className="second-container-2">
          <p className="second-text">
            Business Software Solutions at Visiomatix Media go beyond building functional systems we develop scalable, secure, and high-performance software that drives long term operational and business growth. Our strategic, performance driven development approach ensures every software solution aligns with business objectives, streamlines workflows, and delivers measurable impact across operations.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul style={{marginLeft:'40px',width:'100%'}} >
            <li className="second-text">Strategic Software Architecture Robust, future ready software architectures designed around business processes, operational needs, and long term scalability.</li>
            <li className="second-text">Performance Driven Development Execution focused on speed, stability, and efficiency, ensuring optimized system performance, reliability, and measurable outcomes.</li>
            <li className="second-text">Consistent Systems & Code Standards Standardized frameworks & clean code practices ensure consistency, maintainability, & professional execution across systems.</li>
            <li className="second-text">High Impact Functionality & User Experience  Intuitive, role based software experiences that improve usability, productivity, and operational efficiency.</li>
            <li className="second-text">Security, Stability & Technical Credibility Secure coding practices, strong data protection, reliable system performance ensure long term trust, compliance, & stability.</li>
          </ul>
        </div>

      </section>
    </div>
  )
}

export default Page2