import React from 'react'

import "../page5.css";


import erp from "../../../assets/design-creative/icon/1.png";
import crm from "../../../assets/design-creative/icon/2.png";
import bpm from "../../../assets/design-creative/icon/3.png";
import a from "../../../assets/design-creative/icon/4.png";
import dot from "../../../assets/design-creative/icon/5.png";
import hr from "../../../assets/design-creative/icon/6.png";
import camel from "../../../assets/design-creative/icon/7.png";
import finance from "../../../assets/design-creative/icon/8.png";
import saas from "../../../assets/design-creative/icon/9.png";
import ppt from "../../../assets/design-creative/icon/10.png";
import ecom from "../../../assets/design-creative/icon/11.png";
import ssas from "../../../assets/design-creative/icon/12.png";
import nitro from "../../../assets/design-creative/icon/13.png";
import api from "../../../assets/design-creative/icon/14.png";

const Page5 = () => {
  return (
     <main className="bss5">
      <section className="blue-title-bss5">
        <h1>
          Creative Platforms We Design For
          <div>Strategic Creative Partnerships</div>
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
        <p>
          At Visiomatix Media, our Design & Creative Services are crafted to
          perform seamlessly across a wide range of digital platforms. We design
          platform specific creatives that align with technical requirements,
          user behavior, and brand objectives ensuring visual consistency and
          maximum impact everywhere your brand appears. We specialize in
          creating high quality design assets for platforms including Instagram,
          Facebook, LinkedIn, YouTube, Google Display, WhatsApp, websites,
          mobile apps, and creative networks such as Behance and Dribbble. Every
          design is optimized for format, performance, and audience engagement
          helping brands maintain a strong, professional, and recognizable
          presence across all digital touchpoints.
        </p>
        <button>Book Your Free Strategy Call</button>
      </section>
    </main>
  )
}

export default Page5