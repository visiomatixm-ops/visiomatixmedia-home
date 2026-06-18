import { motion } from "framer-motion";
import "./index.css";
import integration from "../../../assets/icons/integration.png";
import arrowupright from "../../../assets/icons/arrow-up-right.png";
import collaboration from "../../../assets/icons/collaboration.png";
import data from "../../../assets/icons/data.png";
import rohitshinde from "../../../assets/images/rohitshinde.png";
import { NavLink, useNavigate } from "react-router";
import { ArrowUpRight } from "lucide-react";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleIn,
  staggerContainer,
  staggerSlow,
  staggerItem,
  cardReveal,
  flipUp,
  drawLine,
  glowPulse,
  viewport,
  EASE,
} from "../../../hooks/useScrollAnimation";

const expertiseList = [
  {
    title: "Collaboration",
    description:
      "Great results come from great collaboration. We team up with ambitious brands, combining creativity and expertise to craft digital solutions that make an impact, together.",
    img: collaboration,
  },
  {
    title: "Data-Driver Insights",
    description:
      "Insights power innovation. We use data to identify opportunities, refine strategy, and ensure every action drives impact and success.",
    img: data,
  },
  {
    title: "Seamless Integration",
    description:
      "We ensure every system, platform, and tool works together smoothly. Our seamless integration approach keeps your digital ecosystem efficient, secure, and easy to manage.",
    img: integration,
  },
];

const AboutUs2 = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/contact");
  };

  return (
    <section className="about-page-about2">
      <div className="about-inner-about2">
        {/* ================= TOP SECTION ================= */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="top-section-about2"
        >
          {/* LEFT TEXT */}
          <div className="top-left-about2">
            {/* Tag — letter-spacing expand */}
            <motion.span
              className="about-tag-about2"
              initial={{ opacity: 0, letterSpacing: "0em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.14em" }}
              transition={{ duration: 0.7, ease: EASE }}
              viewport={viewport}
            >
              ABOUT COMPANY
            </motion.span>

            {/* Heading — word-by-word */}
            <motion.h1
              className="about-title-about2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {["We", "Reinvent", "Digital", "Experiences"].map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1, y: 0,
                      transition: { duration: 0.55, ease: EASE },
                    },
                  }}
                  style={{ display: "inline-block", marginRight: "0.3em" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="about-desc-about2"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              We create intelligent digital solutions that elevate brands and
              accelerate growth. With a commitment to quality and innovation,
              Visiomatix Media ensures every experience we build delivers value,
              clarity, and measurable success.
            </motion.p>
            <br />

            {/* Glowing CTA */}
            <motion.div
              animate="pulse"
              variants={glowPulse}
              style={{ display: "inline-block", borderRadius: "10px" }}
            >
              <motion.button
                onClick={handleButton}
                className="connect-btn-about2"
                
              >
                Let's connect
                <ArrowUpRight size={20} color="#ffffff" className="read-more-icon-home4" />
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT CARDS — stagger flip-up */}
          <motion.div
            className="cards-about2"
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {expertiseList.map((item, index) => (
              <motion.div
                className="feature-card-1-about2"
                key={index}
                variants={flipUp}
              >
                <motion.div
                  className="icon-box-1-about2"
                >
                  <img src={item.img} alt={item.title} />
                </motion.div>

                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Divider draw */}
        <motion.div
          variants={drawLine}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          style={{
            height: "1px",
            background: "linear-gradient(90deg, #00c8ff, transparent)",
            margin: "32px 0",
            transformOrigin: "left",
          }}
        />

        {/* ================= FOUNDER SECTION ================= */}
        <div className="founder-section-about2">
          {/* Image — scale in + floating */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="founder-image-about2"
          >
            <motion.img
              src={rohitshinde}
              alt="Rohit Shinde"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Center text — fade up with staggered paragraphs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="founder-column-about2"
          >
            <motion.p
              className="homepage-4-title-about2"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              viewport={viewport}
            >
              Rohit Shinde
            </motion.p>
            <p className="homepage-4-subTitle-about2">
              Founder & Creative Head, Visiomatix Media
            </p>

            <motion.p
              className="homepage-4-text-about2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.span variants={staggerItem} style={{ display: "block" }}>
                <span className="dropcap-about2">I</span> am the Founder & CEO of
                Visiomatix Media, a global minded, performance led digital
                marketing agency built to deliver scalable growth and measurable
                ROI. I lead the company's strategic direction, overseeing
                everything from market positioning and demand generation to
                execution, optimization, and long-term client success.
              </motion.span>
              <motion.span
                variants={staggerItem}
                style={{ display: "block", marginTop: "1em" }}
              >
                With proven experience as a Digital Marketing Leader, Consultant,
                and Growth Strategist, I have helped organizations across multiple
                sectors accelerate revenue, strengthen digital presence, and
                convert marketing investments into sustainable business outcomes.
                My leadership philosophy combines data intelligence, creative
                strategy, and execution excellence.
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Right text — fade right */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="founder-column-about2 right-about2"
          >
            <p className="homepage-4-text-about2">
              Beyond client delivery, I am committed to building future ready
              digital talent by sharing global best practices and practical
              knowledge. My long-term vision is to position Visiomatix Media as
              a trusted global growth partner for brands seeking structured,
              ROI-focused digital transformation.
            </p>

            <p className="homepage-4-text-about2">
              Outside of work, I actively follow global automotive trends and
              enjoy experimenting with culinary techniques interests that
              reflect my curiosity, discipline, and continuous learning mindset.
            </p>

            <div className="readmore-wrap-about2">
              <motion.div
                animate="pulse"
                variants={glowPulse}
                style={{ display: "inline-block", borderRadius: "8px" }}
              >
                <motion.button
                  onClick={handleButton}
                  className="connect-btn-about2"
                  
                >
                  Read More
                  <ArrowUpRight size={20} color="#ffffff" className="read-more-icon-home4" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
