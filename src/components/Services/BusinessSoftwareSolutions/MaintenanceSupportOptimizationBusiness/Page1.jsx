import React from "react";

import "../../page1.css";

import digimart from "../../../../assets/MaintenanceSupportOptimizationBusiness/images/1.png";

const Page1 = () => {
  return (
    <div className="service_1_root">
      <main className="hero-box-service1">
        <div className="title-box-service1">
          <h1 className="title2-service1">
            Maintenance, Support & Optimization
          </h1>
          <p className="sub-title-service1">
            Continuous Optimization Services. Securing Stability & Scalable
            Performance.
          </p>
          <p className="service-para1-service1">
            At Visiomatix Media, Maintenance, Support & Optimization are treated
            as strategic performance safeguards not just routine technical
            services. We proactively manage, secure, and enhance digital systems
            to ensure long-term stability, peak efficiency, and sustained
            business value. Through proactive monitoring, timely enhancements,
            and ongoing optimization, we help businesses maintain resilient,
            high-performing, and future-ready digital ecosystems.
          </p>
        </div>
        <div className="logo-box2-service1">
          <img src={digimart} alt=""/>
          <div>
            <div className="social-media-service1">
              <p>
                HOW MAINTENANCE, SUPPORT & OPTIMIZATION WORK
                <br />{" "}
                <span>
                  HOW WE DELIVER CONTINUOUS MAINTENANCE & OPTIMIZATION
                </span>
              </p>
            </div>
            <div className="content-box-service1">
              <div className="content-service1">
                <h2>
                  <span>01.</span>Proactive System Assessment & Strategy
                </h2>
                <p>
                  We evaluate system performance, identify potential risks, and
                  design structured maintenance roadmaps aligned with stability,
                  efficiency, and long-term digital sustainability.
                </p>
              </div>
              <div className="content-service1">
                <h2>
                  <span>02.</span>Continuous Support & Performance Optimization
                </h2>
                <p>
                  We implement timely updates, security patches, and performance
                  enhancements to ensure seamless functionality, improved speed,
                  and operational reliability across systems.
                </p>
              </div>
              <div className="content-service1">
                <h2>
                  <span>03.</span>Stability, Security & Ongoing Governance
                </h2>
                <p>
                  Through continuous monitoring, structured testing, and
                  optimization frameworks, we ensure long-term system
                  resilience, data protection, and scalable performance growth.
                </p>
              </div>
            </div>
            <p>
              With Visiomatix Media, Maintenance, Support & Optimization deliver
              more than routine upkeep they ensure sustained performance,
              operational stability, and long-term digital value. Through
              proactive monitoring, strategic enhancements, and disciplined
              system governance, we help organizations maintain reliable
              platforms, optimize performance efficiency, and transform ongoing
              system management into a competitive advantage that drives
              sustainable growth.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page1;
