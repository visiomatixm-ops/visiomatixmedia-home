import frame1 from '../../../../assets/ECommerceDevelopmentSolutions/icon/1.png'
import frame2 from '../../../../assets/ECommerceDevelopmentSolutions/icon/2.png'
import frame3 from '../../../../assets/ECommerceDevelopmentSolutions/icon/3.png'
import frame4 from '../../../../assets/ECommerceDevelopmentSolutions/icon/4.png'
import frame5 from '../../../../assets/ECommerceDevelopmentSolutions/icon/5.png'
import frame6 from '../../../../assets/ECommerceDevelopmentSolutions/icon/6.png'

import '../../page2.css'

const Benefit = ({ img, title, text }) => (
  <div className='e-commerce-services-benefits-div'>
    <img src={img} alt={title} />
    <h3 className="benefit-title">{title}</h3>
    <p className="benefit-text">{text}</p>
  </div>
);

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">

        <div className="benefites-2">
          BENEFITS
        </div>

        <div className="sub-title-2">
          Benefits of E-Commerce Development Solution with Visiomatix Media
        </div>

        <div className="benefites-containr-2">

          <div className="column-2 custom-border-2 right-pad-30">

            <Benefit
              img={frame1}
              title="Revenue Focused E-Commerce Strategy"
              text="We design e-commerce platforms around business goals and customer behavior, ensuring every feature supports sales growth, operational efficiency, and measurable ROI."
            />

            <Benefit
              img={frame2}
              title="Conversion-Driven User Experience"
              text="We craft intuitive navigation, optimized product journeys, and frictionless checkout flows that improve engagement, usability, and conversion rates across devices."
            />

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <Benefit
              img={frame3}
              title="High-Performance Commerce Architecture"
              text="Our platforms are optimized for speed, stability, and reliability, delivering fast page loads and smooth shopping experiences even during high traffic and peak sales."
            />

            <Benefit
              img={frame4}
              title="Post-Launch Support & Continuous Optimization"
              text="Beyond launch, we provide ongoing maintenance, performance monitoring, updates, and enhancements to keep your e-commerce platform competitive and future-ready."
            />

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <Benefit
              img={frame5}
              title="Secure & Reliable Transaction Systems"
              text="Industry-standard security practices ensure safe transactions, protected customer data, and long-term platform trust."
            />

            <Benefit
              img={frame6}
              title="Custom & Scalable Commerce Platforms"
              text="Each e-commerce solution is built from the ground up, allowing seamless scalability as product catalogs, traffic, and transactions grow without performance bottlenecks."
            />

          </div>

        </div>

        <div className="second-container-2">

          <p className="second-text">
            At Visiomatix Media, we build scalable and secure e-commerce platforms 
            designed for performance and long-term revenue growth. Our digital 
            storefronts are reliable, conversion-focused, and built to scale 
            across products, users, and transactions. With a commerce-first 
            approach, we combine strategic planning and experience-led development 
            to align each platform with business goals and deliver measurable results.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul style={{ marginLeft: '40px', width: '100%' }}>
            <li className="second-text">We design e-commerce platforms around business goals, customer journeys, and sales workflows to support scalable growth and revenue performance.</li>
            <li className="second-text">Our e-commerce solutions are built for speed, stability, and efficiency, ensuring smooth browsing, fast checkout, and consistent performance under traffic.</li>
            <li className="second-text">Structured development frameworks and clean implementation practices make platforms easy to manage, update, and scale over time.</li>
            <li className="second-text">Intuitive navigation, optimized product flows, and user-friendly interfaces are crafted to improve engagement, usability, and conversions.</li>
            <li className="second-text">Strong security practices, protected customer data, and stable system performance ensure long-term trust and operational reliability.</li>
          </ul>

        </div>

      </section>
    </div>
  )
}

export default Page2