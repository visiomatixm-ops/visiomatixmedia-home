import "./service2.css";
import "./service_1.css";
import arrow from "../../assets/business-software-solutions/icon/arrow1.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleIn,
  staggerContainer,
  staggerItem,
  flipUp,
  cardReveal,
  drawLine,
  glowPulse,
  viewport,
  EASE,
} from "../../hooks/useScrollAnimation";
import icon1 from "../../assets/blog/images/icon01.png";
import icon2 from "../../assets/blog/images/icon02.png";
import icon3 from "../../assets/blog/images/icon03.png";

const blogFeatureList = [
  {
    title: "Strategic Collaboration",
    description:
      "Our blogs are built on real world experience and collaboration across creative, marketing, and technology teams ensuring insights that are practical, relevant, and actionable.",
    img: icon1,
  },
  {
    title: "Data-Driven Insights",
    description:
      "We believe strong decisions come from strong data. Our content is backed by trends, analytics, and performance insights that help brands understand what truly works in today's digital ecosystem.",
    img: icon2,
  },
  {
    title: "Seamless Digital Thinking",
    description:
      "From content strategy to campaign execution, we share approaches that connect platforms, audiences, and technology helping businesses create consistent and impactful digital experiences.",
    img: icon3,
  },
];

const Service3_2 = ({ olderBlogs = [] }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div>
      <section className="digital-marketing-services-2-2-blog">
        <section
          className="blog-features-blog"
          style={{ flexDirection: "column", gap: "60px" }}
        >
          {/* ── DIVIDER — draws from left ── */}
          <motion.div
            className="service2-divider-blog"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: EASE }}
            viewport={viewport}
            style={{ transformOrigin: "left" }}
          />

          <div
            className="top-row-wrapper-blog"
            style={{ display: "flex", justifyContent: "space-between", width: "100%" }}
          >
            {/* ── LEFT TEXT — fade from left (matches About/Career sections) ── */}
            <motion.div
              className="left-text-wrapper-blog"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {/* Tag — letter-spacing expand (matches AboutUs2 tag) */}
              <motion.p
                className="blog-tag-blog"
                initial={{ opacity: 0, letterSpacing: "0em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.1em" }}
                transition={{ duration: 0.7, ease: EASE }}
                viewport={viewport}
              >
                ABOUT OUR BLOGS
              </motion.p>

              {/* Heading — word-by-word (matches AboutUs2 heading) */}
              <motion.h2
                className="blog-heading-blog"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {["We", "Decode", "Digital"].map((word, i) => (
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
                {" "}
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
                  }}
                  style={{ display: "inline-block" }}
                >
                  <span>Growth</span>
                </motion.span>
              </motion.h2>

              {/* Decorative line */}
              <motion.div
                variants={drawLine}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                style={{
                  height: "2px",
                  width: "80px",
                  background: "linear-gradient(90deg, #00c8ff, transparent)",
                  margin: "12px 0 24px",
                  transformOrigin: "left",
                }}
              />

              {/* CTA button — glowPulse (matches site-wide CTAs) */}
              <div className="lets-connect-wrapper-blog">
                <motion.div
                  animate="pulse"
                  variants={glowPulse}
                  style={{ display: "inline-block", borderRadius: "20px" }}
                >
                  <motion.button
                    className="lets-connect-btn-blog"
                    whileHover={{
                      scale: 1.07,
                      y: -3,
                      boxShadow: "0 0 20px rgba(0,200,255,0.4)",
                    }}
                    whileTap={{ scale: 0.93 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Let's connect
                    <img src={arrow} alt="arrow" className="connect-icon-blog" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* ── RIGHT CARDS — stagger flipUp (matches AboutUs1/HomePage4 cards) ── */}
            <div className="card-wrapper-blog">
              <motion.div
                className="cards-bss4-blog"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {blogFeatureList.map((item, index) => (
                  <motion.div
                    className="blog-feature-card-blog"
                    key={index}
                    variants={flipUp}
                    whileHover={{
                      y: -10,
                      scale: 1.04,
                      boxShadow: "0 16px 48px rgba(0,100,255,0.25)",
                      transition: { type: "spring", stiffness: 260, damping: 18 },
                    }}
                  >
                    {/* Icon — wobble on card hover (matches AboutUs1 icons) */}
                    <motion.div
                      className="blog-icon-box-blog"
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.18 }}
                      transition={{ duration: 0.45 }}
                    >
                      <img src={item.img} alt={item.title} />
                    </motion.div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* ── OLDER BLOG CARDS — stagger cardReveal ── */}
          {olderBlogs.length > 0 && (
            <motion.div
              className="other-blogs-sb1-blog"
              style={{ marginTop: 40 }}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {olderBlogs.map((blog) => (
                <motion.div
                  className="blog-card-sb1-blog"
                  key={blog._id || blog.id}
                  variants={cardReveal}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 52px rgba(0,120,255,0.28)",
                    transition: { type: "spring", stiffness: 260, damping: 18 },
                  }}
                >
                  <div className="blog-img-container-sb1-blog">
                    <motion.img
                      src={blog.imageUrl || blog.image}
                      alt={blog.title}
                      className="fit-image"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, ease: EASE }}
                      viewport={viewport}
                    />
                  </div>

                  <motion.p
                    className="blog-meta-sb1-blog"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    viewport={viewport}
                  >
                    {new Date(blog.date).toLocaleDateString()}{" "}
                    <span className="dot-separator-blog">•</span>{" "}
                    {blog.author || "Admin"}{" "}
                    <span className="dot-separator-blog">•</span>{" "}
                    {blog.comments || "No Comments"}
                  </motion.p>

                  <p className="blog-desc-sb1-blog">{blog.title}</p>

                  <div className="read-more-wrapper-sb1-blog">
                    <motion.div
                      animate="pulse"
                      variants={glowPulse}
                      style={{ display: "inline-block", borderRadius: "30px" }}
                    >
                      <motion.button
                        className="read-more-btn-sb1-blog"
                        onClick={() => setSelectedBlog(blog)}
                        whileHover={{
                          scale: 1.06,
                          x: 4,
                          boxShadow: "0 0 18px rgba(0,200,255,0.45)",
                        }}
                        whileTap={{ scale: 0.93 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Read More
                        <img
                          src={arrow}
                          alt="arrow"
                          className="read-more-icon-sb1-blog"
                        />
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </section>
      </section>

      {/* ── MODAL — AnimatePresence scale-in (matches Career modal) ── */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            className="blog-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              className="blog-modal-content"
              initial={{ opacity: 0, scale: 0.82, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 40 }}
              transition={{ duration: 0.4, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="blog-modal-close"
                onClick={() => setSelectedBlog(null)}
                whileHover={{ scale: 1.15, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                ×
              </motion.button>
              {selectedBlog.imageUrl && (
                <motion.img
                  src={selectedBlog.imageUrl}
                  alt={selectedBlog.title}
                  className="blog-modal-image"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
                />
              )}
              <motion.h2
                className="blog-modal-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              >
                {selectedBlog.title}
              </motion.h2>
              <p className="blog-modal-meta">
                {new Date(selectedBlog.date).toLocaleDateString()} •{" "}
                {selectedBlog.author || "Admin"} •{" "}
                {selectedBlog.comments || "No Comments"}
              </p>
              <p className="blog-modal-description">
                {selectedBlog.description || selectedBlog.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Service3_2;