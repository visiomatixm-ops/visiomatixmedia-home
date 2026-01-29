import "./page1.css";
import logo from "../../../assets/Digital_Marketing_Services/images/logo.png";
import igIcon from "../../../assets/Digital_Marketing_Services/images/instgram2.png";
import fbIcon from "../../../assets/Digital_Marketing_Services/images/facebook3.png";
import liIcon from "../../../assets/Digital_Marketing_Services/images/linkedin1.png";
import xIcon from "../../../assets/Digital_Marketing_Services/images/X1.png.png";
import ytIcon from "../../../assets/Digital_Marketing_Services/images/Youtube4.png";
import arrow from "../../../assets/Digital_Marketing_Services/images/union-1.png";
// import eclipse from "../../../assets/images/Ellipse.png";


const Service3_6 = () => {
  return (
    <div className="page-root-bss6 decalotype-font-bss6">
      {/* HERO */}
       {/* <img src={eclipse} className="eclipse" alt="" /> */}
      <section className="hero-section-bss6">
        <div className="hero-header-row-bss6">
          <h1 className="hero-title-bss6">Let’s Build Your Growth Strategy</h1>

          <div className="arrow-box-bss6">
            <img className="arrow-icon-bss6" src={arrow} alt="" />
          </div>
        </div>

        <div className="top-divider-bss6" />
      </section>

      {/* FOOTER */}
      <footer className="service-footer-bss6">
        <div className="footer-grid-bss6">
          {/* BRAND */}
          <div className="footer-col-bss6">
            <div className="logo-section-bss6">
              <img src={logo} alt="Visiomatix" className="brand-logo-bss6" />
              <h2 className="brand-name-bss6">
                Visiomatix <br /> Media
              </h2>
            </div>

            <p className="brand-text-bss6">
              At Visiomatix Media, we don’t just market brands we engineer digital
              growth systems. <br />Built with a global mindset and driven by
              performance, we help businesses cut through noise, capture
              attention, and convert audiences into loyal customers. <br />Founded in India and working with brands acoress industries our team of strategies, designer, marketers, and technologists blends creativity with data to deliver measurable results. From brand positioning and SEO to high-impact creatives, social media, and conversion focused campaigns every move is intentional, every outcome is tracked.We believe in clarity over clutter, strategy over shortcuts, andresults over promises.
           <br /> Visiomatix Media is where ambition meets execution and digital presence turn into digital dominace.
            <br />  Think Global. Build Strong. Grow with Visiomatix.
            </p>

            <div className="contact-block-bss6">
              <span className="blue-label-bss6">For Sales</span>
              <p className="brand-text-bss6 brand-contact-bss6">+91 89991 01916</p>

              <span className="blue-label-bss6">For Careers</span>
              <p className="brand-text-bss6 brand-contact-bss6">+91 92702 71916</p>
            </div>
          </div>

          {/* SERVICES */}
          <div className="footer-col-bss6">
            <h3 className="footer-header-bss6">SERVICES</h3>
            <ul className="footer-list-bss6">
              <li>Social Media Marketing (SMM)</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Design & Creative Services</li>
              <li>Visual Effects (VFX) & Post–Production</li>
              <li>3D Product Visualization</li>
              <li>UI/UX Design</li>
              <li>Web & App Development</li>
              <li>Custom Web Solutions</li>
              <li>Business Software Solutions</li>
              <li>AI Voice Sales Assistant Integration</li>
              <li>E-commerce Solutions</li>
              <li>Branding & Strategy</li>
              <li>Competitor & Market Research</li>
              <li>E-commerce Website Development</li>
            </ul>
          </div>

          {/* EXPLORE */}
          <div className="footer-col-bss6">
            <h3 className="footer-header-bss6">EXPLORE</h3>
            <ul className="footer-list-bss6">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Blogs</li>
              <li>Company</li>
              <li>Our Team</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Digital Services</li>
              <li>IT Services</li>
            </ul>
          </div>

          {/* JOURNEY */}
          <div className="footer-col-bss6 journey-col-bss6">
            <h3 className="footer-header-bss6">Start Your Growth Journey</h3>

            <p className="address-text-bss6">
              Om Sai Apartment, Road, Manmad – Chandwad Rd, Davkhar Nagar, Ganur,
              Nashik, Maharashtra – 423101
            </p>
            <p className="footer-para2-bss6">Our office serves as a hub for strategy, creativity, and digital innovation, where ideas are transformed into impactful digital solutions. From this central workspace, our team collaborates closely with clients across regions and industries, ensuring seamless communication, reliable support, and consistent execution. We focus on building scalable strategies, delivering measurable results, and driving long-term growth through data driven insights, creative excellence, and performance oriented digital solutions.</p>

            <div className="contact-block-bss6">
              <span className="blue-label-bss6">For Sales</span>
            <p className="brand-text-bss6 brand-contact-bss6">visiomatixmedia@gmail.com</p>

            <span className="blue-label-bss6">For Careers</span>
            <p className="brand-text-bss6 brand-contact-bss6">visiomatixm@gmail.com</p>
            </div>

            {/* FORM — CORRECT POSITION */}
            <div className="subscribe-block-bss6">
              <p className="subscribe-title-bss6">Stay ahead of the curve.</p>
              <p className="subscribe-text-bss6">
                Subscribe for updates, trends, and insights.
              </p>

              <div className="subscribe-form-bss6">
                <input
                  type="email"
                  placeholder="Enter your work email"
                />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="bottom-divider-bss6" />

        <div className="footer-bottom-bss6">
          <div className="socials-bss6">
            <img src={igIcon} alt="Instagram" />
            <img src={fbIcon} alt="Facebook" />
            <img src={liIcon} alt="LinkedIn" />
            <img src={xIcon} alt="X" />
            <img src={ytIcon} alt="YouTube" />
          </div>

          <p className="copy-rights">© Copyright 2026 by Visiomatix Media</p>
        </div>
      </footer>
    </div>
  );
};

export default Service3_6;