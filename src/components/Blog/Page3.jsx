import React from "react";
import "./service3.css";
import arrow from "../../assets/business-software-solutions/icon/arrow1.png";
import { motion } from "framer-motion";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
  cardReveal,
  glowPulse,
  drawLine,
  viewport,
  EASE,
} from "../../hooks/useScrollAnimation";
import blogImg5 from "../../assets/blog/images/blog7.png";
import blogImg6 from "../../assets/blog/images/blog8.png";
import blogImg3 from "../../assets/blog/images/blog5.png";
import blogImg4 from "../../assets/blog/images/blog6.png";

const Service3_3 = () => {
  const blogData = [
    {
      id: 1,
      date: "May 2025",
      title:
        "Increase Website Traffic with High Impact SEO Strategies SEO & Digital Marketing",
      img: blogImg3,
    },
    {
      id: 2,
      date: "August 2025",
      title:
        "Designing Creative Brand Stories That Connect Emotionally and Stand Out in a Competitive Market",
      img: blogImg4,
    },
    {
      id: 3,
      date: "October 2025",
      title:
        "Create Scalable Websites & Apps with Modern Development Website & App Development",
      img: blogImg5,
    },
    {
      id: 4,
      date: "November 2025",
      title:
        "Empowering Businesses with Custom Software Solutions Designed for Efficiency and Scalability",
      img: blogImg6,
    },
  ];

  return (
    <section className="business-software-solution3-blog">

      {/* ── Section label — letter-spacing expand (matches AboutUs2 tag) ── */}
      <motion.p
        style={{
          color: "#00c8ff",
          fontSize: "18px",
          fontFamily: "decalotype-regular",
          marginBottom: "8px",
        }}
        initial={{ opacity: 0, letterSpacing: "0em" }}
        whileInView={{ opacity: 1, letterSpacing: "0.1em" }}
        transition={{ duration: 0.7, ease: EASE }}
        viewport={viewport}
      >
        MORE FROM OUR BLOG
      </motion.p>

      {/* ── Heading — fade from left ── */}
      <motion.h2
        style={{
          color: "#ffffff",
          fontSize: "clamp(24px, 4vw, 38px)",
          fontFamily: "decalotype-semibold",
          marginBottom: "8px",
        }}
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        Latest Insights
      </motion.h2>

      {/* ── Decorative line — draws from left ── */}
      <motion.div
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        style={{
          height: "2px",
          width: "100%",
          background: "linear-gradient(90deg, #00c8ff, #1e88e5, transparent)",
          margin: "12px 0 32px",
          transformOrigin: "left",
        }}
      />

      {/* ── Cards grid — stagger cardReveal (matches HomePage4 / Career cards) ── */}
      <motion.div
        className="sc3-blog-grid-blog"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {blogData.map((blog, index) => (
          <motion.div
            className="sc3-card-container-blog"
            key={blog.id}
            variants={cardReveal}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 52px rgba(0,120,255,0.25)",
              transition: { type: "spring", stiffness: 260, damping: 18 },
            }}
          >
            {/* Image — zoom on hover (matches blog-img-container across site) */}
            <div className="sc3-image-box-blog">
              <motion.img
                src={blog.img}
                alt={blog.title}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: EASE }}
                viewport={viewport}
              />
            </div>

            {/* Meta */}
            <motion.p
              className="sc3-meta-text-blog"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: index * 0.05 }}
              viewport={viewport}
            >
              {blog.date}{" "}
              <span className="dot-separator-blog">•</span> Admin{" "}
              <span className="dot-separator-blog">•</span> No Comments
            </motion.p>

            <p className="sc3-description-blog">{blog.title}</p>

            {/* Read More — glowPulse (matches all site CTA buttons) */}
            <div className="sc3-action-area-blog">
              <motion.div
                animate="pulse"
                variants={glowPulse}
                style={{ display: "inline-block", borderRadius: "30px" }}
              >
                <motion.button
                  className="sc3-read-more-btn-blog"
                  
                >
                  Read More
                  <img src={arrow} alt="arrow"className="sc3-btn-icon-blog" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Service3_3;