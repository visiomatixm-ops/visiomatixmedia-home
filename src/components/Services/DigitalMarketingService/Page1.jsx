import React from 'react'

import '../page1.css'

import digimart from "../../../assets/Digital_Marketing_Services/images/1.png";


const Page1 = () => {
  return (
    <div className="service_1_root">
      <main className="hero-box-service1">
        <div className="title-box-service1">
          <h1 className="title2-service1">Social Media Marketing</h1>
          <p className="sub-title-service1">
            Global Standard Social Media Strategy. Designed for Brand Authority.
          </p>
          <p className="service-para1-service1">
            At Visiomatix Media, social media is treated as a strategic brand
            asset, not a publishing task. We design sophisticated social
            ecosystems that elevate perception, command attention, and create
            long term influence across global digital platforms.
            <br />
            Our work is intentional, disciplined, and performance driven built
            for organizations that value precision, reputation, and measurable
            impact.
          </p>
        </div>
        <div className="logo-box2-service1">
          <img src={digimart} alt="" />
          <div>
            <div className="social-media-service1">
              <p>
                HOW SOCIAL MEDIA MARKETING WORKS <br />{" "}
                <span>Social Media Marketing Works</span>
              </p>
            </div>
            <div className="content-box-service1">
              <div className="content-service1">
                <h2>
                  <span>01.</span> Strategic Framework
                </h2>
                <p>
                  We define clear objectives, analyze audience behavior, and
                  select the right platforms to build a structured, goal-driven
                  content and campaign roadmap.
                </p>
              </div>
              <div className="content-service1">
                <h2>
                  <span>02.</span> High-Impact Content
                </h2>
                <p>
                  We create platform-specific, premium content aligned with your
                  brand identity—designed for engagement, reach, and conversion
                  through strategic storytelling.
                </p>
              </div>
              <div className="content-service1">
                <h2>
                  <span>03.</span> Engagement & Community Leadership
                </h2>
                <p>
                  We manage conversations in real time, foster authentic
                  relationships, and build loyal brand communities that enhance
                  reputation and long-term equity.
                </p>
              </div>
            </div>
            <p>
              With Visiomatix Media, social media marketing delivers more than
              visibility—it builds brand authority, meaningful engagement, and
              measurable business growth. Through strategic planning, premium
              content, and performance driven execution, we help brands attract
              the right audience, strengthen credibility, and convert attention
              into long term value.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Page1