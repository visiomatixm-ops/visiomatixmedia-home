
import "../../page1.css";
import ecommerceImg from "../../../../assets/ECommerceDevelopmentSolutions/icon/1.png";

const Page1 = () => {
  return (
    <div className="service_1_root">
      <main className="hero-box-service1">
        <div className="title-box-service1" style={{ width: "100%" }}>
          
          <h1 className="title2-service1" style={{ width: "100%" }}>
            E-Commerce Development Solutions
          </h1>

          <p className="sub-title-service1" style={{ width: "100%" }}>
            E-Commerce Platforms Designed for Seamless Shopping and Long-Term Growth
          </p>

          <p className="service-para1-service1" style={{ width: "100%" }}>
            At Visiomatix Media, e-commerce development is treated as a revenue-driven 
            digital ecosystem, not just an online store. We build scalable, high-performance 
            e-commerce platforms that deliver smooth shopping experiences and long-term growth. 
            Our approach combines strategic planning, conversion-focused development, and 
            disciplined execution for brands that value reliability, scalability, and 
            measurable commercial impact.
          </p>
        </div>

        <div className="logo-box2-service1">
          <img src={ecommerceImg} alt="Ecommerce"/>

          <div>
            <div className="social-media-service1">
              <p>
               E-COMMERCE DEVELOPMENT. OUR METHODOLOGY
                <br />
                <span>OUR APPROACH TO SCALABLE E-COMMERCE DEVELOPMENT</span>
              </p>
            </div>

            <div className="content-box-service1">

              <div className="content-service1">
                <h2>
                  <span>01.</span> E-Commerce Strategy & Platform Planning
                </h2>
                <p>
                 We define business goals, product structure, and customer journeys to 
                 design a scalable e-commerce roadmap aligned with growth, performance, 
                 and revenue objectives.
                </p>
              </div>

              <div className="content-service1">
                <h2>
                  <span>02.</span> Store Development & Performance Execution
                </h2>
                <p>
                  We build secure, high-performance e-commerce platforms with clean 
                  architecture, smooth navigation, and optimized checkout experiences 
                  across devices.
                </p>
              </div>

              <div className="content-service1">
                <h2>
                  <span>03.</span>  Testing, Optimization & Scalability Control
                </h2>
                <p>
                  We ensure platform reliability through functional testing, performance 
                  tuning, security validation, and scalable frameworks that support 
                  long-term stability and expansion.
                </p>
              </div>

            </div>

            <p>
             With Visiomatix Media, e-commerce development goes beyond building online stores 
             to creating scalable commerce experiences that deliver consistent performance 
             and long-term growth. We design robust e-commerce platforms with smooth customer 
             journeys and combine strategic planning, conversion-focused development, and 
             disciplined execution to drive lasting business value.
            </p>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Page1;