import React from 'react'


import '../page2.css'

import frame1 from "../../../assets/Digital_Marketing_Services/images/image1.png";
import frame2 from "../../../assets/Digital_Marketing_Services/images/image2.png";
import frame3 from "../../../assets/Digital_Marketing_Services/images/image3.png";
import frame4 from "../../../assets/Digital_Marketing_Services/images/image4.png";
import frame5 from "../../../assets/Digital_Marketing_Services/images/image5.png";
import frame6 from "../../../assets/Digital_Marketing_Services/images/image6.png";

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
              <h3 className="benefit-title">Strategic Brand Positioning</h3>
              <p className="benefit-text">
                We position your brand with clear intent and strategic
                direction, ensuring that every post, campaign, and interaction
                contributes to stronger brand perception, enhanced credibility,
                and long term market authority.
              </p>
            </div>

            <div>
              <img src={frame2} alt="Icon" />
              <h3 className="benefit-title">Performance Driven Visibility</h3>
              <p className="benefit-text">
                Our approach prioritizes quality reach over vanity metrics,
                ensuring your brand consistently reaches the right audience with
                higher intent, relevance, and potential to convert into real
                business outcomes.
              </p>
            </div>
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame6} alt="Icon" />
              <h3 className="benefit-title">Consistent Brand Experience</h3>
              <p className="benefit-text">
                From visual identity to brand messaging, we maintain complete
                consistency across all social media platforms helping build
                recognition, trust, and a cohesive brand experience that
                audiences remember.
              </p>
            </div>

            <div>
              <img src={frame5} alt="Icon" />
              <h3 className="benefit-title">
                Qualified Lead & Demand Generation
              </h3>
              <p className="benefit-text">
                We design structured social media journeys that transform
                engagement into high quality leads, supporting sustainable
                demand generation, improved conversion rates, and measurable
                revenue growth.
              </p>
            </div>
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame3} alt="Icon" />
              <h3 className="benefit-title">Data Backed Decision Making</h3>
              <p className="benefit-text">
                Every strategy and campaign is guided by in depth analytics,
                audience insights, and performance data allowing continuous
                optimization, smarter decisions, and predictable marketing
                results.
              </p>
            </div>

            <div>
              <img src={frame4} alt="Icon" />
              <h3 className="benefit-title">Reputation & Community Growth</h3>
              <p className="benefit-text">
                We actively manage conversations, interactions, and feedback to
                build trust driven communities, strengthen brand reputation, and
                foster long term customer loyalty around your business.
              </p>
            </div>
          </div>
        </div>

        <div className="second-container-2">
          <p className="second-text">
            Social media marketing with Visiomatix Media is built for brands
            that demand strategic clarity, consistent execution, and measurable
            outcomes. We go beyond routine posting to create structured social
            media ecosystems that strengthen brand positioning, elevate
            credibility, and drive sustainable business growth. Our approach
            integrates data intelligence, refined creative direction, and
            disciplined execution to ensure every interaction contributes to
            long term value. We help brands connect with the right audience
            through purposeful storytelling, platform specific strategies, and
            performance focused campaigns transforming visibility into trust,
            engagement, and qualified demand.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul>
            <li className="second-text">
              Strategic Brand Authority Position your brand with clarity,
              credibility, and market relevance
            </li>
            <li className="second-text">
              Performance Led Growth Data driven execution focused on measurable
              results, not vanity metrics
            </li>
            <li className="second-text">
              Consistent Brand Presence Unified visuals and messaging across all
              platforms
            </li>
            <li className="second-text">
              Qualified Engagement & Leads Turn audience attention into real
              business opportunities
            </li>
            <li className="second-text">
              Reputation & Community Building Build trust driven digital
              communities that last
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Page2