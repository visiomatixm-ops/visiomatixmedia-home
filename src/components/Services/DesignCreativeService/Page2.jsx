import React from 'react'
import "../page2.css";

import frame1 from "../../../assets/design-creative/images/Frame 120.png";
import frame2 from "../../../assets/design-creative/images/Frame 121.png";
import frame3 from "../../../assets/design-creative/images/Frame 122.png";
import frame4 from "../../../assets/design-creative/images/Frame 123.png";
import frame5 from "../../../assets/design-creative/images/Frame 125.png";
import frame6 from "../../../assets/design-creative/images/Frame 124.png";


const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">
        <div className="benefites-2">BENEFITS</div>

        <div className="sub-title-2">
          Benefits of Design & Creative Services with Visiomatix Media
        </div>

        <div className="benefites-containr-2">
          <div className="column-2 custom-border-2 right-pad-30">
            <div>
              <img src={frame1} alt="Icon" />
              <h3 className="benefit-title">Strategic Brand Identity</h3>
              <p className="benefit-text">
                We develop cohesive design systems that clearly communicate your
                brand’s purpose, values, and positioning ensuring strong
                recognition and lasting impression.
              </p>
            </div>

            <div>
              <img src={frame2} alt="Icon" />
              <h3 className="benefit-title">Scalable Design Systems</h3>
              <p className="benefit-text">
                We build flexible and scalable creative frameworks that grow
                with your business, ensuring efficiency and consistency as your
                brand expands.
              </p>
            </div>
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame6} alt="Icon" />
              <h3 className="benefit-title">Premium Visual Consistency</h3>
              <p className="benefit-text">
                From digital platforms to marketing assets, we maintain strict
                consistency in design language, creating a unified and
                professional brand presence.
              </p>
            </div>

            <div>
              <img src={frame5} alt="Icon" />
              <h3 className="benefit-title">
                Data Informed Creative Decisions
              </h3>
              <p className="benefit-text">
                Design choices are guided by insights, user behavior, and
                performance feedback allowing continuous refinement and smarter
                creative outcomes.
              </p>
            </div>
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame3} alt="Icon" />
              <h3 className="benefit-title">High Impact Creative Execution</h3>
              <p className="benefit-text">
                Our designs are crafted to capture attention, communicate
                effectively, and support engagement and conversion goals without
                compromising brand integrity.
              </p>
            </div>

            <div>
              <img src={frame4} alt="Icon" />
              <h3 className="benefit-title">Stronger Brand Credibility</h3>
              <p className="benefit-text">
                Professional, well structured design builds trust, authority,
                and confidence helping your brand stand out in competitive
                markets.
              </p>
            </div>
          </div>
        </div>

        <div className="second-container-2">
          <p className="second-text">
            Design and creative services at Visiomatix Media are built to
            deliver more than visual appeal they create clarity, consistency,
            and long term brand value. Our strategic, performance driven
            approach ensures every creative asset supports brand authority,
            enhances user experience, and strengthens business impact across
            digital and offline channels.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul>
            <li className="second-text">
              Strategic Brand Identity Establish a clear, credible, and
              differentiated brand identity through purpose driven design and
              creative direction.
            </li>
            <li className="second-text">
              Performance Aligned Creativity Design execution guided by strategy
              and business objectives focused on impact, clarity, and measurable
              brand value.
            </li>
            <li className="second-text">
              Consistent Visual Language Unified design systems and visual
              standards across all touchpoints to ensure consistency,
              recognition, and professionalism.
            </li>
            <li className="second-text">
              High Impact Creative Communication Transform ideas into compelling
              visuals that communicate effectively, engage audiences, and
              support business goals.
            </li>
            <li className="second-text">
              Brand Trust & Visual Credibility Strengthen brand trust through
              refined, professional, and consistent creative assets that enhance
              long term brand equity.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Page2