import React from "react";

import "../../page4.css";

import cloud from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/CloudBasedSoftwareSolutions1.png";
import custom from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/CustomBusinessSoftwareDevelopment1.png";
import data from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/DataManagement&ReportingSystems1.png";
import enterprise from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/Enterprise&InternalSystems1.png";
import maintenance from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/Maintenance,Support&Optimization1.png";
import process from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/ProcessAutomationSolutions1.png";
import secure from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/Secure&ScalableArchitecture1.png";
import system from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/SystemIntegrationServices1.png";
import arrow from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/arrow1.png";

const expertiseList = [
  {
    title: "Custom Business Software Development",
    description:
      "We design and develop tailor made software solutions aligned with your unique business processes, operational goals, and growth plans ensuring flexibility and efficiency.",
    img: custom,
  },
  {
    title: "Enterprise & Internal Systems",
    description:
      "Robust ERP, CRM, dashboards, and internal tools engineered to streamline operations, improve collaboration, and support data driven decision making with reliability.",
    img: enterprise,
  },
  {
    title: "Process Automation Solutions",
    description:
      "Intelligent workflow automation that reduces manual effort, minimizes errors, and enhances productivity across departments and business functions.",
    img: process,
  },
  {
    title: "Data Management & Reporting Systems",
    description:
      "Centralized data platforms with real time dashboards and advanced reporting, enabling complete visibility, control, and actionable business insights.",
    img: data,
  },
  {
    title: "System Integration Services",
    description:
      "Seamless integration of software systems with existing tools, third party platforms, APIs, and enterprise applications to ensure smooth data flow and operational continuity.",
    img: system,
  },
  {
    title: "Secure & Scalable Architecture",
    description:
      "Software architectures built with enterprise grade security standards and scalable frameworks to support business expansion without compromising stability.",
    img: secure,
  },
  {
    title: "Cloud Based Software Solutions",
    description:
      "Cloud native and hybrid software solutions designed for flexibility, accessibility, high availability, and optimized performance across devices and locations.",
    img: cloud,
  },
  {
    title: "Maintenance, Support & Optimization",
    description:
      "Ongoing system monitoring, updates, security enhancements, and performance optimization to keep your software reliable, secure, and aligned with evolving business needs.",
    img: maintenance,
  },
];

const Page4 = () => {
  return (
    <section className="business-software-solution4">
      <p className="blue-bss4">OUR SPECIALIZATION</p>
      <p className="divider-bss4"></p>
      <h2 className="h2-bss4">
        What We Have
        <span> to Offer</span>
      </h2>
      <div className="cards-bss4">
        {expertiseList.map((item, index) => (
          <div
            className={`feature-card-bss4-${index} feature-card-bss4`}
            key={index}
          >
            <div className="icon-box-bss4">
              <img src={item.img} alt={item.title} />
            </div>

            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <motion.div
              className="read-more-wrapper-bss4"
              
            >
              <button className="read-more-btn-bss4">
                Read More
                <img src={arrow} alt="arrow"className="read-more-icon-bss4" />
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page4;
