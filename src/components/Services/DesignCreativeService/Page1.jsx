import React from 'react'
import "../page1.css";
import digimart from "../../../assets/design-creative/images/1.png";


const Page1 = () => {
  return (
    <div className="service_1_root">
      <main className="hero-box-service1">
        <div className="title-box-service1">
          <h1 className="title2-service1">Design & Creative Services</h1>
          <p className="sub-title-service1">
            Strategic Design & Creative Services. Built to Elevate Brand
            Authority.
          </p>
          <p className="service-para1-service1">
            At Visiomatix Media, design and creativity are treated as strategic
            brand assets, not just visual execution. We craft sophisticated
            design systems and creative frameworks that elevate brand
            perception, command attention, and create lasting influence across
            digital and offline touchpoints. Our work is intentional,
            disciplined, and performance driven built for organizations that
            value precision, consistency, and measurable brand impact.
          </p>
        </div>
        <div className="logo-box2-service1">
          <img src={digimart} alt="" />
          <div>
            <div className="social-media-service1">
              <p>
                HOW DESIGN & CREATIVE WORKS <br />{" "}
                <span>HOW OUR DESIGN & CREATIVE PROCESS WORKS</span>
              </p>
            </div>
            <div className="content-box-service1">
              <div className="content-service1">
                <h2>
                  <span>01.</span> Creative Framework
                </h2>
                <p>
                  We define clear brand objectives, understand business goals,
                  and establish a strong creative direction to build a
                  structured design roadmap aligned with long term brand
                  positioning
                </p>
              </div>
              <div className="content-service1">
                <h2>
                  <span>02.</span> High Impact Design Execution
                </h2>
                <p>
                  We create premium, purpose driven designs aligned with your
                  brand identity crafted to capture attention, communicate
                  value, and deliver consistent visual impact across all
                  touchpoints.
                </p>
              </div>
              <div className="content-service1">
                <h2>
                  <span>03.</span> Brand Consistency & Creative Governance
                </h2>
                <p>
                  We ensure design consistency, manage revisions efficiently,
                  and maintain creative standards across platforms strengthening
                  brand credibility, recognition, and long term equity.
                </p>
              </div>
            </div>
            <p>
              With Visiomatix Media, design and creative services deliver more
              than aesthetics they build brand authority, visual consistency,
              and long term business impact. Through strategic design thinking,
              premium creative execution, and disciplined brand alignment, we
              help brands communicate clearly, strengthen credibility, and
              transform visual identity into lasting value.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Page1