import React from "react";
import "./index.css";

import hero from "../../../assets/images/image.png";

import arrow from "../../../assets/images/Union-1.png";
import { NavLink } from "react-router";


const AboutUs3 = () => {
  return (
    
    <div className="about_us_2">
      <main className="about_us">
        <div className="info">
          <p>
            As CEO & Operations Head, I oversee end-to-end operations including
            delivery planning, workflow optimization, quality assurance,
            resource allocation, and performance tracking. I am accountable for
            building systems that ensure predictable delivery, cost efficiency,
            and operational transparency—critical elements for scaling a global
            digital agency. My role also includes defining operational KPIs,
            managing risk, and continuously improving internal processes to
            support growth at scale
          </p>
          <p>
            I work closely with leadership, clients, and cross-functional teams
            to maintain alignment between business objectives and execution
            realities. My analytical mindset and attention to operational detail
            allow me to proactively identify bottlenecks, streamline workflows,
            and implement solutions that improve productivity and profitability.
            I also lead the adoption of modern tools, automation frameworks, and
            process documentation to ensure consistency and operational
            maturity.
          </p>
          <div className="read-more-wrapper">
            <NavLink className="read-more-btn">
              Read More
              <img src={arrow} alt="arrow" className="read-more-icon" />
            </NavLink>
          </div>
        </div>
        <div className="title_box">
          <p id="hero_title" className="hero_title">
            Pooja Patil
          </p>
          <p id="hero_job">CEO & Operations head</p>
          <p className="first_letter">
            I am the CEO & Head of Operations at Visiomatix Media, responsible
            for driving operational strategy, execution governance, and scalable
            systems that support the company’s long-term growth and global
            ambitions. With a strong background in software engineering and over
            five years of professional experience, I bring a technology led,
            process driven, and performance oriented approach to managing
            complex digital operations.
          </p>
          <p>
            My engineering foundation enables me to design and implement
            structured operational frameworks that align business strategy with
            execution. At Visiomatix Media, I ensure that digital marketing
            initiatives are not only creative and data driven but also
            technically robust, scalable, and consistently deliver measurable
            outcomes. I play a central role in translating strategic vision into
            repeatable execution models across teams <br /> and clients
          </p>
          <p>
            I bring deep expertise in performance marketing, SEO, growth
            funnels, and analytics driven decision making. Certified in Google
            Ads and Google Analytics, I work hands-on with advanced platforms
            including SEMrush, Google Keyword Planner, and Google Analytics to
            drive acquisition, retention, and scalable digital growth.
          </p>
        </div>
        <div className="hero_box">
          <img
            src={hero}
            width="346"
            height="520"
            alt="hero"
            className="hero_img"
          />
        </div>
      </main>
      
    </div>
    
  );
};

export default AboutUs3;
