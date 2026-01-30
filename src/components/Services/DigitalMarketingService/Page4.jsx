<<<<<<< HEAD
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
=======
import "../page1.css";
import img1 from "../../../assets/Digital_Marketing_Services/icon/PPC.png";
import img2 from "../../../assets/Digital_Marketing_Services/icon/web-app.png";
import img3 from "../../../assets/Digital_Marketing_Services/icon/email.png";
import img4 from "../../../assets/Digital_Marketing_Services/icon/SEO.png";
import img5 from "../../../assets/Digital_Marketing_Services/icon/content.png";
import img6 from "../../../assets/Digital_Marketing_Services/icon/orm.png";
import img7 from "../../../assets/Digital_Marketing_Services/icon/ecommerce.png";
import img8 from "../../../assets/Digital_Marketing_Services/icon/analytics.png";



import arrow from '../../../assets/Digital_Marketing_Services/icon/arrow1.png'

>>>>>>> e780f4390a4d2acaea8a8e2c64ba87c9b54fda0c

const expertiseList = [
  {
    title: "Pay Per Click ( PPC )",
    description:
<<<<<<< HEAD
      "Drive high intent traffic and maximize Return on Investment with our data driven Pay Per Click campaigns, designed for precision targeting, impactful creatives, and measurable business results.",
    img: ppc,
=======
      "Drive high intent traffic and maximize ROI with our data driven PPC campaigns, designed for precision targeting, impactful creatives, and measurable business results.",
    img: img1,
>>>>>>> e780f4390a4d2acaea8a8e2c64ba87c9b54fda0c
  },
  {
    title: "Web & App Development",
    description:
<<<<<<< HEAD
      "Build scalable, high-performance websites, applications with our expert Web & App Development services designed for seamless user experience, strong functionality, long term business growth.",
    img: web,
=======
      "Build scalable, high-performance websites and applications with our expert Web & App Development services designed for seamless user experience, strong functionality, and long term business growth.",
    img: img2,
>>>>>>> e780f4390a4d2acaea8a8e2c64ba87c9b54fda0c
  },
  {
    title: "Email & Influencer Marketing",
    description:
<<<<<<< HEAD
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
=======
      "Strengthen brand trust and drive conversions through strategic email campaigns and carefully curated influencer collaborations designed to engage, nurture, and convert the right audience.",
    img: img3,
  },
{
  title: "SEO & Content Writing",
    description:
  "Improve search visibility and build content authority with SEO-driven content strategies designed to attract qualified traffic, strengthen credibility, and deliver long term organic growth.",
    img: img4,
  },
{
  title: "Content & Video Marketing",
    description:
  "Engage your audience with compelling content and high impact videos crafted to tell your brand story, boost engagement, and drive meaningful conversions across digital platforms.",
    img: img5,
  },
{
  title: "Online Reputation Management",
    description:
  "ORM - Protect, manage, and strengthen your brand’s online reputation through proactive monitoring, strategic response management, and trust-building digital practices.",
    img: img6,
  },
{
  title: "E-commerce Marketing",
    description:
  "Scale your online sales with performance driven e-commerce marketing strategies designed to boost product visibility, increase conversions, and maximize customer lifetime value.",
    img: img7,
  },
{
  title: "Analytics & ROI Tracking",
    description:
  "Gain complete visibility into campaign performance with advanced analytics and ROI tracking delivering actionable insights, data backed decisions, and measurable business outcomes.",
    img: img8,
  }
];

const Service3_4 = () => {
>>>>>>> e780f4390a4d2acaea8a8e2c64ba87c9b54fda0c
  return (
    <section className="business-software-solution4">
      <p className="blue-bss4">OUR SPECIALIZATION</p>
      <p className="divider-bss4"></p>
<<<<<<< HEAD
      <h2 className="h2-bss4">
        What We Have
=======
      <h2 className="h2-bss4">What We Have
>>>>>>> e780f4390a4d2acaea8a8e2c64ba87c9b54fda0c
        <span> to Offer</span>
      </h2>
      <div className="cards-bss4">
        {expertiseList.map((item, index) => (
<<<<<<< HEAD
          <div
            className={`feature-card-bss4-${index} feature-card-bss4`}
            key={index}
          >
=======
          <div className={`feature-card-bss4-${index} feature-card-bss4`} key={index}>
>>>>>>> e780f4390a4d2acaea8a8e2c64ba87c9b54fda0c
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
<<<<<<< HEAD
  )
}

export default Page4
=======
  );
};

export default Service3_4;
>>>>>>> e780f4390a4d2acaea8a8e2c64ba87c9b54fda0c
