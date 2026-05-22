import React from 'react'
import "../../page5.css";



import erp from "../../../../assets/CloudBasedE-CommerceSolutions/image9.png";
import crm from "../../../../assets/CloudBasedE-CommerceSolutions/image10.png";
import bpm from "../../../../assets/CloudBasedE-CommerceSolutions/image11.png";
import a from "../../../../assets/CloudBasedE-CommerceSolutions/image12.png";
import dot from "../../../../assets/CloudBasedE-CommerceSolutions/image13.png";
import hr from "../../../../assets/CloudBasedE-CommerceSolutions/image14.png";
import camel from "../../../../assets/CloudBasedE-CommerceSolutions/image15.png";
// import finance from "../../../../assets/ecommerce-solutions/icon/Group 196 (2).png";
// import saas from "../../../../assets/ecommerce-solutions/icon/Group 238.png";
// import ppt from "../../../../assets/ecommerce-solutions/icon/Group 227 (2).png";
// import ecom from "../../../../assets/ecommerce-solutions/icon/Group 199 (2).png";
// import ssas from "../../../../assets/ecommerce-solutions/icon/Group 234.png";
// import nitro from "../../../../assets/ecommerce-solutions/icon/Group 212 (2).png";
// import api from "../../../../assets/ecommerce-solutions/icon/Group 235.png";
import { NavLink } from 'react-router-dom';

const logos = [
  erp, crm, bpm, a, dot, hr, camel,
  // finance, saas, ppt, ecom, ssas, nitro, api
];



const Page5 = () => {
  return (
    <main className="bss5">
      <section className="blue-title-bss5">
        <h1>
          Scalable Cloud E-commerce Systems
          <div>Long-Term Commerce Partnerships</div>
        </h1>
      </section>

      <section className="slider-bss5">
        <div className="slider-track-bss5">
          {[...logos, ...logos].map((img, index) => (
            <img width="150px" src={img} alt="creative-icon" key={index} />
          ))}
        </div>
      </section>


      <section className="para-bss5">
        <p>
          At Visiomatix Media, our Cloud-Based E-commerce Solutions are engineered to perform seamlessly across complex digital commerce environments and multi-channel sales ecosystems. We develop cloud-native platforms aligned with business models, customer journeys, & operational workflows ensuring consistent performance, uptime stability, and scalable growth across storefronts, admin systems, and integrations.We specialize in building high-performance cloud commerce platforms including custom online stores, B2C and B2B systems, multi-vendor marketplaces, centralized dashboards, cloud-based order and inventory management, & secure payment integrations. Every solution is optimized for speed, security, & reliability enabling businesses to operate agile, resilient, future ready cloud commerce ecosystems.
        </p>

        <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
      </section>
    </main>
  )
}

export default Page5