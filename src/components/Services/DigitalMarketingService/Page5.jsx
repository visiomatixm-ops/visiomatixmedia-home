import React from 'react'

import '../page5.css'

import instagram from "../../../assets/Digital_Marketing_Services/icon/instagram.png";
import facebook from "../../../assets/Digital_Marketing_Services/icon/facebook.png";
import linkedin from "../../../assets/Digital_Marketing_Services/icon/linkedin.png";
import youtube from "../../../assets/Digital_Marketing_Services/icon/youtube.png";
import x from "../../../assets/Digital_Marketing_Services/icon/x.png";
import pinterest from "../../../assets/Digital_Marketing_Services/icon/pinterest.png";
import snapchat from "../../../assets/Digital_Marketing_Services/icon/snapchat.png";
import whatsapp from "../../../assets/Digital_Marketing_Services/icon/whatsapp.png";
import google from "../../../assets/Digital_Marketing_Services/icon/google.png";
import telegram from "../../../assets/Digital_Marketing_Services/icon/telegram.png";
import be from "../../../assets/Digital_Marketing_Services/icon/be.png";
import ball from "../../../assets/Digital_Marketing_Services/icon/ball.png";
import reddit from "../../../assets/Digital_Marketing_Services/icon/reddit.png";
import quora from "../../../assets/Digital_Marketing_Services/icon/quora.png";

const Page5 = () => {
  return (
    <main className="bss5">
      <section className="blue-title-bss5">
        <h1>
          Social Platforms We Specialize In
          <div>Strategic Partnerships</div>
        </h1>
      </section>
      <section className="slider-bss5">
        <div className="slider-box-bss5">
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={linkedin} alt="" />
          <img src={youtube} alt="" />
          <img src={x} alt="" />
          <img src={pinterest} alt="" />
          <img src={snapchat} alt="" />
          <img src={whatsapp} alt="" />
          <img src={google} alt="" />
          <img src={telegram} alt="" />
          <img src={be} alt="" />
          <img src={ball} alt="" />
          <img src={reddit} alt="" />
          <img src={quora} alt="" />
        </div>
      </section>
      <section className="para-bss5">
        <p>
          At Visiomatix Media, we specialize in managing a diverse ecosystem of
          social media platforms, selecting and optimizing each channel based on
          your brand’s objectives, industry, and target audience. From high
          impact platforms like Instagram, Facebook, LinkedIn, and YouTube to
          niche and creative networks such as Behance, Dribbble, and community
          driven platforms like Reddit and Quora, we design platform specific
          strategies that maximize reach, engagement, and relevance. Our
          expertise ensures every platform is used with purpose delivering
          consistent brand presence, meaningful audience interaction, and
          measurable growth across all digital touchpoints.
        </p>
        <button>Book Your Free Strategy Call</button>
      </section>
    </main>
  )
}

export default Page5