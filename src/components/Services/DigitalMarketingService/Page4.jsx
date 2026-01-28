import React from 'react'


import '../page4.css'

import arrow from "../../../assets/Digital_Marketing_Services/icon/arrow1.png";

import ppc from "../../../assets/Digital_Marketing_Services/icon/PPC.png";
import web from "../../../assets/Digital_Marketing_Services/icon/web-app.png";
import email from "../../../assets/Digital_Marketing_Services/icon/email.png";
import seo from "../../../assets/Digital_Marketing_Services/icon/SEO.png";

import contentIcon from "../../../assets/Digital_Marketing_Services/icon/content.png";
import ormIcon from "../../../assets/Digital_Marketing_Services/icon/orm.png";
import ecommerceIcon from "../../../assets/Digital_Marketing_Services/icon/ecommerce.png";
import analyticsIcon from "../../../assets/Digital_Marketing_Services/icon/analytics.png";

const expertiseList = [
  {
    title: "Pay Per Click ( PPC )",
    description:
      "Drive high intent traffic and maximize Return on Investment with our data driven Pay Per Click campaigns, designed for precision targeting, impactful creatives, and measurable business results.",
    img: ppc,
  },
  {
    title: "Web & App Development",
    description:
      "Build scalable, high-performance websites, applications with our expert Web & App Development services designed for seamless user experience, strong functionality, long term business growth.",
    img: web,
  },
  {
    title: "Email & Influencer Marketing",
    description:
      "Strengthen brand trust and drive conversions through strategic email campaigns, carefully curated influencer collaborations designed to engage, nurture, convert the right audience.",
    img: email,
  },
  {
    title: "SEO & Content Writing",
    description:
      "Improve search visibility and build content authority with SEO-driven content strategies designed to attract qualified traffic, and strengthen credibility, and deliver long term organic growth.",
    img: seo,
  },
  {
    title: "Content & Video Marketing",
    description:
      "Engage your audience with compelling content and high impact videos crafted to tell your brand story, and boost engagement, and drive meaningful conversions across digital platforms.",
    img: contentIcon,
  },
  {
    title: "Online Reputation Management",
    description:
      "ORM-Protect, manage, strengthen your brand’s online reputation through proactive monitoring, strategic response management, trust-building digital practices.",
    img: ormIcon,
  },
  {
    title: "E-commerce Marketing",
    description:
      "Scale your online sales with performance driven e-commerce marketing strategies designed to boost product visibility, increase conversions, and maximize customer lifetime value.",
    img: ecommerceIcon,
  },
  {
    title: "Analytics & ROI Tracking",
    description:
      "Gain complete visibility into campaign performance with advanced analytics and Return on Investment tracking delivering actionable insights, data backed decisions, and measurable business outcomes.",
    img: analyticsIcon,
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
            <div className="read-more-wrapper-bss4">
              <button className="read-more-btn-bss4">
                Read More
                <img src={arrow} alt="arrow" className="read-more-icon-bss4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Page4