import frame1 from '../../../assets/branding-and-strategy/images/Frame 120.png'
import frame3 from '../../../assets/branding-and-strategy/images/Frame 121.png'
import frame5 from '../../../assets/branding-and-strategy/images/Frame 122.png'
import frame2 from '../../../assets/branding-and-strategy/images/Frame 123.png'
import frame4 from '../../../assets/branding-and-strategy/images/Frame 124.png'
import frame6 from '../../../assets/branding-and-strategy/images/Frame 125.png'
import '../page2.css'

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">

        <div className="benefites-2">
          BENEFITS
        </div>

        <div className="sub-title-2">
          Benefits of Branding & Strategy with Visiomatix Media
        </div>

        <div className="benefites-containr-2">

          <div className="column-2 custom-border-2 right-pad-30">
            <div className='e-commerce-services-benefits-div'>
              <img src={frame1} alt="Icon" />
              <h3 className="benefit-title">
                Business Centric Brand Strategy
              </h3>
              <p className="benefit-text">
                Our branding and strategy solutions are built around your business vision, market positioning, and growth objectives ensuring clear brand direction, strong differentiation, and long term relevance across all touchpoints.
                </p>
            </div>

            <div className='e-commerce-services-benefits-div'>
              <img src={frame2} alt="Icon" />
              <h3 className="benefit-title">
              Secure & Consistent Brand Governance
              </h3>
              <p className="benefit-text">
                We establish clear brand guidelines, usage standards, and governance frameworks that protect brand integrity and ensure consistency across teams, platforms, and campaigns.
                </p>
            </div>
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <div className='e-commerce-services-benefits-div'>
              <img src={frame3} alt="Icon" />
              <h3 className="benefit-title">
              Scalable & Future Ready Brand Systems
              </h3>
              <p className="benefit-text">
                We create flexible and scalable brand frameworks that grow with your business. As markets, products, and audiences evolve, your brand remains consistent, adaptable, and future ready.
                </p>
            </div>

            <div className='e-commerce-services-benefits-div'>
              <img src={frame4} alt="Icon" />
              <h3 className="benefit-title">
                Seamless Brand Integration Across Channels
              </h3>
              <p className="benefit-text">
               Your brand is aligned seamlessly across websites, social media, marketing campaigns, packaging, and internal communications creating a unified and professional brand experience.
                </p>
            </div>
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <div className='e-commerce-services-benefits-div'>
              <img src={frame5} alt="Icon" />
              <h3 className="benefit-title">
              High Brand Impact & Market Credibility
              </h3>
              <p className="benefit-text">
               Our strategic approach strengthens brand credibility, improves market perception, and ensures consistent brand performance across digital, offline, and communication channels.
               </p>
            </div>

            <div className='e-commerce-services-benefits-div'>
              <img src={frame6} alt="Icon" />
              <h3 className="benefit-title">
               Operational Alignment & Brand Efficiency
              </h3>
              <p className="benefit-text">
               By aligning branding with business strategy and operations, we reduce confusion, improve execution speed, and enable teams to communicate and perform with clarity and confidence.
               </p>
            </div>
          </div>

        </div>

        <div className="second-container-2">

            
              <p className="second-text">
                Branding and strategy at Visiomatix Media go beyond logos and visuals we build strategic brand foundations that drive recognition, trust, and long term business growth. Our structured, insight driven branding approach ensures every brand aligns with business goals, resonates with the right audience, and delivers measurable brand impact across markets.<br /><br />
                <span className="second-text">Key Highlights</span>
              </p>
            
          <ul style={{marginLeft:'40px',width:'100%'}}>
            <li className="second-text">Strategic Brand Architecture Future ready brand frameworks aligned with business goals, audience insights, and long term growth.</li>
            <li className="second-text">Performance Driven Brand Strategy Focused on clarity, differentiation, and market impact to strengthen brand positioning and recall.</li>
            <li className="second-text">Consistent Brand Systems & Standards Clear guidelines and structured frameworks ensure consistency, maintainability, and professional execution.</li>
            <li className="second-text">High Impact Brand Experience Purpose driven brand experiences that enhance usability, engagement, and customer trust.</li>
            <li className="second-text">Brand Stability & Market Credibility Strong brand governance and consistency ensure long term credibility, recognition, and compliance.</li>
          </ul>
        </div>

      </section>
    </div>
  )
}

export default Page2