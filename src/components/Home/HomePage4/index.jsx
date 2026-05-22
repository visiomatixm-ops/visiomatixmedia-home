import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./index.css";

import img28 from "../../../assets/images/image 28.png";
import img29 from "../../../assets/images/image 29.png";
import img30 from "../../../assets/images/image 30.png";
import img31 from "../../../assets/images/image 31.png";
import img32 from "../../../assets/images/image 32.png";
import img33 from "../../../assets/images/image 33.png";
import img34 from "../../../assets/images/image 34.png";
import img35 from "../../../assets/images/image 35.png";
import img36 from "../../../assets/images/image 36.png";
import img37 from "../../../assets/images/image 37.png";

import rohitshinde from "../../../assets/images/rohitshinde.png";

import {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  staggerContainer,
  cardReveal,
  viewport,
  EASE,
} from "../../../hooks/useScrollAnimation";

const service = [
  {
    id: 1,
    image: img28,
    title: "Design & Creatives",
    desc: "Visually compelling designs crafted to strengthen brand identity and drive engagement.",
    address: "services/design-creative-services",
  },

  {
    id: 2,
    image: img29,
    title: "ORM",
    desc: "Proactive strategies to protect, enhance, and strengthen your brand's digital reputation.",
    address: "/services/online-reputation-management",
  },

  {
    id: 3,
    image: img30,
    title: "Branding & Strategy",
    desc: "Strategic positioning and growth-focused planning that builds lasting brand value.",
    address: "services/branding-strategy",
  },

  {
    id: 4,
    image: img31,
    title: "UI/UX Design",
    desc: "User-centric interface and experience design crafted for clarity.",
    address: "services/ui-ux-design",
  },

  {
    id: 5,
    image: img32,
    title: "HRMS",
    desc: "Integrated HRMS solutions to streamline operations.",
    address: "services/hrms",
  },
];

const HomePage4 = () => {

  const [serviceIndex, setServiceIndex] = useState(0);

  const visibleCount = 5;

  const nextServices = () => {
    setServiceIndex((prev) =>
      prev + visibleCount >= service.length
        ? 0
        : prev + visibleCount
    );
  };

  const prevServices = () => {
    setServiceIndex((prev) =>
      prev - visibleCount < 0
        ? service.length - visibleCount
        : prev - visibleCount
    );
  };

  return (

    <section className="about-page-home4">

      <div className="about-inner-home4">

        {/* ================= ARROWS ================= */}

        <motion.div
          className="arrow-home4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          viewport={viewport}
        >

          <span
            onClick={prevServices}
            className="arrow-btn"
          >
            <motion.svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              whileHover={{
                scale: 1.2,
                filter: "brightness(1.5)",
              }}
              whileTap={{ scale: 0.85 }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="white"
                strokeWidth="2"
              />
            </motion.svg>
          </span>

          <span
            onClick={nextServices}
            className="arrow-btn"
          >
            <motion.svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              whileHover={{
                scale: 1.2,
                filter: "brightness(1.5)",
              }}
              whileTap={{ scale: 0.85 }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="white"
                strokeWidth="2"
              />
            </motion.svg>
          </span>

        </motion.div>

        {/* ================= SERVICES GRID ================= */}

        <AnimatePresence mode="wait">

          <motion.div
            key={serviceIndex}
            className="services-grid-home4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{
              opacity: 0,
              y: 20,
              transition: { duration: 0.2 },
            }}
          >

            {service
              .slice(serviceIndex, serviceIndex + visibleCount)
              .map((item, i) => (

                <motion.div
                  variants={cardReveal}
                  className="feature-card-1-home4"
                  key={item.id}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                    boxShadow:
                      "0 20px 52px rgba(0,150,255,0.28)",
                    borderColor: "rgb(0,180,255)",
                    transition: {
                      type: "spring",
                      stiffness: 280,
                      damping: 18,
                    },
                  }}
                >

                  <div
                    style={{
                      width: "100%",
                      padding: "0 4px",
                    }}
                  >

                    <motion.div
                      className="service-icon-home4"
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        delay: i * 0.06,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={viewport}
                      whileHover={{
                        rotate: [0, -8, 8, 0],
                        scale: 1.15,
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                      />
                    </motion.div>

                    <h3 className="service-title-home4">
                      {item.title}
                    </h3>

                    <p className="service-desc-home4">
                      {item.desc}
                    </p>

                    <div className="read-more-wrapper-home4">

                      <NavLink
                        to={item.address}
                        className="read-more-btn-home4"
                      >

                        Read More

                        <span className="read-more-icon-home4">

                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M7 17L17 7M17 7H9M17 7V15"
                              stroke="white"
                              strokeWidth="2"
                            />
                          </svg>

                        </span>

                      </NavLink>

                    </div>

                  </div>

                </motion.div>

              ))}

          </motion.div>

        </AnimatePresence>

        {/* ================= FOUNDER ================= */}

        <div className="founder-section-home4">

          {/* IMAGE */}

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="founder-image-home4"
          >

            <motion.img
              src={rohitshinde}
              alt="Rohit Shinde"
              whileHover={{
                scale: 1.03,
                filter: "brightness(1.08)",
              }}
              transition={{ duration: 0.4 }}
            />

          </motion.div>

          {/* MAIN TEXT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="founder-column-home4 text-reduce-top"
          >

            <motion.p
              className="homepage-4-title-home4"
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                ease: EASE,
              }}
              viewport={viewport}
            >
              Rohit Shinde
            </motion.p>

            <motion.p
              className="homepage-4-subTitle-home4"
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                ease: EASE,
                delay: 0.1,
              }}
              viewport={viewport}
            >
              Founder & Creative Head, Visiomatix Media
            </motion.p>

            <p className="homepage-4-text-home4">

              <span className="dropcap-home4">
                I
              </span>

              am the Founder & CEO of
              Visiomatix Media, a global minded,
              performance led digital marketing agency
              built to deliver scalable growth and
              measurable ROI.

              I lead the company's strategic direction,
              overseeing everything from market
              positioning and demand generation to
              execution, optimization, and long-term
              client success.

              <br />
              <br />

              With proven experience as a Digital
              Marketing Leader, Consultant, and Growth
              Strategist, I have helped organizations
              across multiple sectors accelerate revenue,
              strengthen digital presence, and convert
              marketing investments into sustainable
              business outcomes.

              My leadership philosophy combines data
              intelligence, creative strategy, and
              execution excellence.

              <br />
              <br />

              I bring deep expertise in performance
              marketing, SEO, growth funnels, and
              analytics driven decision making.

              Certified in Google Ads and Google
              Analytics, I work hands-on with advanced
              platforms including SEMrush, Google Keyword
              Planner, and Google Analytics to drive
              acquisition, retention, and scalable
              digital growth.

            </p>

          </motion.div>

          {/* SIDE TEXT */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="founder-column-home4 right-home4"
          >

            <p className="homepage-4-text-home4">
              Beyond client delivery, I am committed to
              building future ready digital talent by
              sharing global best practices and practical
              knowledge.

              My long-term vision is to position
              Visiomatix Media as a trusted global growth
              partner for brands seeking structured,
              ROI-focused digital transformation.
            </p>

            <p className="homepage-4-text-home4">
              Outside of work, I actively follow global
              automotive trends and enjoy experimenting
              with culinary techniques interests that
              reflect my curiosity, discipline, and
              continuous learning mindset.
            </p>

            <div className="read-more-wrapper-home4 home4-main-btn">

              <NavLink
                to="/contact"
                className="read-more-btn-home4"
              >

                Read More

                <span className="read-more-icon-home4">

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7 17L17 7M17 7H9M17 7V15"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>

                </span>

              </NavLink>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default HomePage4;