import React from 'react'
import "../page2.css";


import frame1 from '../../../assets/ecommerce-solutions/images/Frame 120.png'
import frame2 from '../../../assets/ecommerce-solutions/images/Frame 121.png'
import frame3 from '../../../assets/ecommerce-solutions/images/Frame 122.png'
import frame4 from '../../../assets/ecommerce-solutions/images/Frame 123.png'
import frame5 from '../../../assets/ecommerce-solutions/images/Frame 125.png'
import frame6 from '../../../assets/ecommerce-solutions/images/Frame 124.png'




const Page2 = () => {
  return (
    <>
      <section className="digital-marketing-services-2-2">

        <div className="benefites-2">
          BENEFITS
        </div>

        <div className="sub-title-2">
          Benefits of E-commerce Solutions with Visiomatix Media
        </div>

        <div className="benefites-containr-2">

          <div className="column-2 custom-border-2 right-pad-30">
            <div className='e-commerce-services-benefits-div'>
              <img src={frame1} alt="Icon" />
              <h3 className="benefit-title">
                Business Centric E-commerce Architecture
              </h3>
              <p className="benefit-text">
                Our e-commerce solutions are designed around your business model, product strategy, and customer journey ensuring seamless alignment between technology, operations, and revenue objectives for long term growth.
              </p>
            </div>

            <div className='e-commerce-services-benefits-div'>
              <img src={frame2} alt="Icon" />
              <h3 className="benefit-title">
                Secure & Compliant E-commerce Development
              </h3>
              <p className="benefit-text">
                We implement industry standard security protocols, secure payment integrations, role based access control, and data protection measures to safeguard customer data and ensure compliance with regulatory standards.
              </p>
            </div>
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <div className='e-commerce-services-benefits-div'>
              <img src={frame6} alt="Icon" />
              <h3 className="benefit-title">
                Scalable & Future Ready Platforms
              </h3>
              <p className="benefit-text">
                We build flexible, modular e-commerce architectures that scale effortlessly as your business grows. New features, products, users, and integrations can be added without impacting performance or platform stability.
              </p>
            </div>

            <div className='e-commerce-services-benefits-div'>
              <img src={frame5} alt="Icon" />
              <h3 className="benefit-title">
                Seamless System Integrations
              </h3>
              <p className="benefit-text">
                Our solutions integrate smoothly with CRMs, ERPs, payment gateways, inventory systems, logistics partners, and third party tools creating a unified, efficient commerce ecosystem.
              </p>
            </div>
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <div className='e-commerce-services-benefits-div'>
              <img src={frame3} alt="Icon" />
              <h3 className="benefit-title">
                High Performance & Reliability
              </h3>
              <p className="benefit-text">
                Our platforms are optimized for speed, stability, and consistent performance ensuring smooth browsing, fast checkouts, and uninterrupted operations even during high traffic, sales events, or peak demand.
              </p>
            </div>

            <div className='e-commerce-services-benefits-div'>
              <img src={frame4} alt="Icon" />
              <h3 className="benefit-title">
                Operational Automation & Efficiency
              </h3>
              <p className="benefit-text">
                By automating order processing, inventory updates, payment workflows, and reporting, our e-commerce platforms reduce manual effort, minimize errors, and improve operational efficiency across teams.
              </p>
            </div>
          </div>

        </div>

        <div className="second-container-2">

            
              <p className="second-text">
                E-commerce solutions at Visiomatix Media go beyond building online stores we develop scalable, secure, and high performance commerce platforms that drive long term revenue growth and operational efficiency. Our strategic, performance driven e-commerce development approach ensures every solution aligns with business goals, enhances customer journeys, streamlines commerce operations, and delivers measurable commercial impact.
                <br /><br />
                <span className="second-text">Key Highlights</span>
              </p>
            
          <ul style={{marginLeft:'40px',width:'100%'}}>
            <li className="second-text">Strategic E-commerce Architecture Future ready architectures aligned with business goals, customer journeys, and scalability.</li>
            <li className="second-text">Performance Driven Development Focused on speed and conversion efficiency to deliver optimized performance and reliable transactions.</li>
            <li className="second-text">Consistent Systems & Code Standards Standardized frameworks and clean code ensure consistency, maintainability, and professional execution.</li>
            <li className="second-text">High Impact Functionality & User Experience Conversion focused shopping experiences and role based admin workflows that enhance usability and efficiency.</li>
            <li className="second-text">Security, Stability & Transactional Credibility Secure payments and reliable platform performance ensure trust, compliance, and long term stability.</li>
          </ul>
        </div>

      </section>
    </>
  )
}

export default Page2