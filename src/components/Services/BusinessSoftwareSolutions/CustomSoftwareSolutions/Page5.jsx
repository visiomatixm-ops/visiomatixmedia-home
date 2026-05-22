import React from "react";

import "../../page5.css";
import { NavLink } from "react-router-dom";

import erp from "../../../../assets/CustomSoftwareSolutions/icon/1.png";
import crm from "../../../../assets/CustomSoftwareSolutions/icon/2.png";
import bpm from "../../../../assets/CustomSoftwareSolutions/icon/3.png";
import a from "../../../../assets/CustomSoftwareSolutions/icon/4.png";
import dot from "../../../../assets/CustomSoftwareSolutions/icon/5.png";
import hr from "../../../../assets/CustomSoftwareSolutions/icon/6.png";
import camel from "../../../../assets/CustomSoftwareSolutions/icon/7.png";
import finance from "../../../../assets/CustomSoftwareSolutions/icon/8.png";
import saas from "../../../../assets/CustomSoftwareSolutions/icon/9.png";
import ppt from "../../../../assets/CustomSoftwareSolutions/icon/10.png";
import ecom from "../../../../assets/CustomSoftwareSolutions/icon/11.png";
import ssas from "../../../../assets/CustomSoftwareSolutions/icon/12.png";
import nitro from "../../../../assets/CustomSoftwareSolutions/icon/13.png";
import api from "../../../../assets/CustomSoftwareSolutions/icon/14.png";

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
          Tailored Software Systems We Build
          <div>Custom Software Collaboration Frameworks</div>
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
          At Visiomatix Media, our Custom Software Solutions are engineered to
          operate seamlessly within complex business ecosystems. We design and
          develop purpose-built software platforms aligned with operational
          workflows, user hierarchies, and strategic objectives ensuring
          consistency, scalability, and high performance across departments and
          processes. We specialize in delivering enterprise-grade software,
          internal management systems, intelligent dashboards, ERP and CRM
          platforms, workflow automation tools, SaaS products, and fully
          integrated business ecosystems. Every solution is optimized for speed,
          security, scalability, and usability enabling organizations to
          streamline operations, enhance decision-making, and build resilient,
          future-ready digital infrastructures.
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
