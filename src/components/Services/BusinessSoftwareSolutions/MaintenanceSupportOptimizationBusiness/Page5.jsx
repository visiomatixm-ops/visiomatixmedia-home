import React from "react";

import "../../page5.css";
import { NavLink } from "react-router-dom";

import erp from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/1.png";
import crm from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/2.png";
import bpm from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/3.png";
import a from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/4.png";
import dot from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/5.png";
import hr from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/6.png";
import camel from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/7.png";
import finance from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/8.png";
import saas from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/9.png";
import ppt from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/10.png";
import ecom from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/11.png";
import ssas from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/12.png";
import nitro from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/13.png";
import api from "../../../../assets/MaintenanceSupportOptimizationBusiness/icon/14.png";

const Page5 = () => {
  const logos = [
    erp,
    crm,
    bpm,
    a,
    dot,
    hr,
    camel,
    finance,
    saas,
    ppt,
    ecom,
    ssas,
    nitro,
    api,
  ];

  return (
    <main className="bss5">
      <section className="blue-title-bss5">
        <h1>
          Continuous Support Systems We Manage
          <div>Long-Term Performance Partnerships</div>
        </h1>
      </section>
      <section className="slider-bss5">
        <div className="slider-track-bss5">
          {[...logos, ...logos].map((img, index) => (
            <img src={img} alt="software-icon" key={index} />
          ))}
        </div>
      </section>

      <section className="para-bss5">
        <p>
          At Visiomatix Media, our Maintenance, Support & Optimization services
          are engineered to ensure seamless performance across complex business
          environments and digital systems. We manage and enhance platforms in
          alignment with operational requirements, user roles, and evolving
          business objectives ensuring consistent stability, performance, and
          scalability across departments and workflows.
          <br />
          We provide structured support for enterprise systems, internal tools,
          dashboards, ERP and CRM platforms, workflow automation solutions, SaaS
          products, and integrated digital ecosystems. Every system is
          continuously optimized for performance, security, scalability, and
          usability enabling organizations to maintain reliable, efficient, and
          future-ready digital operations with confidence.
        </p>
        <button>
          <NavLink to="/contact" className="nav-avoid-blue">
            Book Your Free Strategy Call
          </NavLink>
        </button>
      </section>
    </main>
  );
};

export default Page5;
