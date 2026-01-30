import React from 'react'

import '../page5.css'

import erp from "../../../assets/business-software-solutions/icon/Group 196.png";
import crm from "../../../assets/business-software-solutions/icon/Group 226.png";
import bpm from "../../../assets/business-software-solutions/icon/Group 227.png";
import a from "../../../assets/business-software-solutions/icon/Group 199.png";
import dot from "../../../assets/business-software-solutions/icon/Group 231.png";
import hr from "../../../assets/business-software-solutions/icon/Group 212.png";
import camel from "../../../assets/business-software-solutions/icon/Group 232.png";
import finance from "../../../assets/business-software-solutions/icon/Group 196 (2).png";
import saas from "../../../assets/business-software-solutions/icon/Group 238.png";
import ppt from "../../../assets/business-software-solutions/icon/Group 227 (2).png";
import ecom from "../../../assets/business-software-solutions/icon/Group 199 (2).png";
import ssas from "../../../assets/business-software-solutions/icon/Group 234.png";
import nitro from "../../../assets/business-software-solutions/icon/Group 212 (2).png";
import api from "../../../assets/business-software-solutions/icon/Group 235.png";

const Page5 = () => {
  return (
    <main className="bss5">
        <section className="blue-title-bss5">
            <h1>Business Software Solutions We Build
                <div>Strategic Technology Partnerships</div>
            </h1>
        </section>
        <section className="slider-bss5">
            <div className="slider-box-bss5">
                <img src={erp} alt="" />
                <img src={crm} alt="" />
                <img src={bpm} alt="" />
                <img src={a} alt="" />
                <img src={dot} alt="" />
                <img src={hr} alt="" />
                <img src={camel} alt="" />
                <img src={finance} alt="" />
                <img src={saas} alt="" />
                <img src={ppt} alt="" />
                <img src={ecom} alt="" />
                <img src={ssas} alt="" />
                <img src={nitro} alt="" />
                <img src={api} alt="" />


            </div>
        </section>
        <section className="para-bss5">
            <p>At Visiomatix Media, our Business Software Solutions are engineered to perform seamlessly across complex business environments and systems. We develop software platforms aligned with operational requirements, user roles, and business objectives ensuring consistency, performance, and scalability across departments and workflows.<br />
We specialize in building high quality business software including enterprise systems, internal tools, dashboards, ERP and CRM solutions, workflow automation platforms, SaaS products, and integrated business systems. Every solution is optimized for performance, security, scalability, and usability helping organizations maintain reliable, efficient, and future-ready digital operations.</p>
            <button>Book Your Free Strategy Call</button>
        </section>

    </main>
  )
}

export default Page5