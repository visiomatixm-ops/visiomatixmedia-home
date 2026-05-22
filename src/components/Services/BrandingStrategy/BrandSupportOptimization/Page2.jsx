import { motion } from 'framer-motion'
import frame1 from '../../../../assets/branding-and-strategy/images/Frame 120.png'
import frame3 from '../../../../assets/branding-and-strategy/images/Frame 121.png'
import frame5 from '../../../../assets/branding-and-strategy/images/Frame 122.png'
import frame2 from '../../../../assets/branding-and-strategy/images/Frame 123.png'
import frame4 from '../../../../assets/branding-and-strategy/images/Frame 124.png'
import frame6 from '../../../../assets/branding-and-strategy/images/Frame 125.png'
import '../../page2.css'

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">

        <motion.div className="benefites-2" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.7 }}>
          BENEFITS
        </motion.div>

        <motion.div className="sub-title-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.15 }}>
          Benefits of Brand Support & Optimization with Visiomatix Media
        </motion.div>

        <motion.div className="benefites-containr-2" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.75, delay: 0.2 }}>

          <div className="column-2 custom-border-2 right-pad-30">
            <div className='e-commerce-services-benefits-div'>
              <img src={frame1} alt="Icon" />
              <h3 className="benefit-title">
                Continuous Brand Performance Monitoring
              </h3>
              <p className="benefit-text">
                We regularly evaluate brand positioning, messaging effectiveness, and market response to ensure consistent performance and strategic alignment.
              </p>
            </div>

            <div className='e-commerce-services-benefits-div'>
              <img src={frame2} alt="Icon" />
              <h3 className="benefit-title">
                Structured Quality Control & Governance
              </h3>
              <p className="benefit-text">
                We implement review systems and consistency checks that protect brand standards and maintain execution excellence across teams and campaigns.
              </p>
            </div>
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <div className='e-commerce-services-benefits-div'>
              <img src={frame3} alt="Icon" />
              <h3 className="benefit-title">
                Scalable Optimization Systems
              </h3>
              <p className="benefit-text">
                Our structured optimization frameworks adapt to market shifts, audience behavior changes, and business growth  keeping your brand relevant and competitive.
              </p>
            </div>

            <div className='e-commerce-services-benefits-div'>
              <img src={frame4} alt="Icon" />
              <h3 className="benefit-title">
                Cross-Channel Performance Alignment
              </h3>
              <p className="benefit-text">
                Your brand communication remains unified across websites, marketing campaigns, internal operations, and customer touchpoints.
              </p>
            </div>
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <div className='e-commerce-services-benefits-div'>
              <img src={frame5} alt="Icon" />
              <h3 className="benefit-title">
                Stronger Market Presence & Relevance
              </h3>
              <p className="benefit-text">
                Insight-led refinements enhance perception, improve engagement, and maintain consistent brand visibility across digital and offline channels.
              </p>
            </div>

            <div className='e-commerce-services-benefits-div'>
              <img src={frame6} alt="Icon" />
              <h3 className="benefit-title">
                Operational Efficiency & Growth Stability
              </h3>
              <p className="benefit-text">
                Through disciplined optimization processes, we reduce inconsistencies, improve execution speed, and support sustained brand growth over time.
              </p>
            </div>
          </div>

        </motion.div>

        <motion.div className="second-container-2" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.75, delay: 0.25 }}>


          <p className="second-text">
            At Visiomatix Media, brand support goes beyond design and strategy we build structured optimization systems that sustain recognition, trust, and long-term business growth. Our insight-driven and performance-focused approach ensures your brand remains aligned with business goals, responsive to market shifts, and consistently impactful across evolving digital and offline environments.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul style={{width: '100%' }}>
            <li className="second-text">Continuous Brand Performance Review Regular evaluation of positioning, messaging, and execution to maintain clarity and market relevance.</li>
            <li className="second-text">Strategic Refinement & Enhancement Ongoing improvements that strengthen differentiation, engagement, and competitive impact.</li>
            <li className="second-text">Consistency Monitoring Systems Structured quality checks that protect brand standards across teams, platforms, and campaigns.</li>
            <li className="second-text">Cross-Channel Optimization Aligned brand performance across digital, marketing, and operational touchpoints.</li>
            <li className="second-text">Long-Term Brand Stability Adaptive optimization frameworks that preserve credibility, recognition, and sustained market presence.</li>
          </ul>
        </motion.div>
      </section>
    </div>
  )
}

export default Page2
