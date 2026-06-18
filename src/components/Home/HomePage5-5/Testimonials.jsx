import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonials.css";

import rightarrow from "../../../assets/images/Union-1.png";
import leftarrow from "../../../assets/images/Union.png";
import user from "../../../assets/icons/image.png";
import { fadeLeft, viewport, EASE } from "../../../hooks/useScrollAnimation";

const testimonials = [
  {
    id: 1,
    name: "Yogesh Badgujar",
    role: "Product Manager",
    text: "Visiomatix helped us present our car-care products with a strong, performance-driven brand identity. Their creative approach communicated the effectiveness and reliability of our formulations perfectly.",
    img: user,
  },
  {
    id: 2,
    name: "Alice Avis",
    role: "Manager",
    text: "Collaborating with Visiomatix was an exceptionally smooth experience. They captured our brand essence with remarkable clarity and transformed it into compelling narratives and visual assets.",
    img: user,
  },
  {
    id: 3,
    name: "Puru Agrawal",
    role: "Market Executive",
    text: "The team at Visiomatix delivered beyond expectations. Their data-driven approach to our campaign resulted in a 3x improvement in lead quality within just two months.",
    img: user,
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    role: "Founder, StyleNest",
    text: "From brand identity to social media strategy, Visiomatix handled everything seamlessly. Our online presence has transformed completely since we partnered with them.",
    img: user,
  },
  {
    id: 5,
    name: "Rahul Mehta",
    role: "CEO, TechBridge",
    text: "Outstanding work on our website redesign and SEO. Within 3 months of launch we saw a 65% increase in organic traffic. Highly recommend the Visiomatix team.",
    img: user,
  },
  {
    id: 6,
    name: "Priya Desai",
    role: "Marketing Head",
    text: "Visiomatix understood our niche market immediately. Their content strategy and PPC campaigns delivered a consistent flow of qualified leads at a lower cost per acquisition.",
    img: user,
  },
  {
    id: 7,
    name: "Arjun Shah",
    role: "E-commerce Director",
    text: "The e-commerce solution they built for us is fast, beautiful and converts. Our cart abandonment dropped by 40% after the new UX went live. Exceptional team.",
    img: user,
  },
  {
    id: 8,
    name: "Meera Joshi",
    role: "Brand Strategist",
    text: "Their creative direction and execution gave our brand a more premium presence across every channel. The testimonial section should reflect the same polished feel we experienced working with them.",
    img: user,
  },
  {
    id: 9,
    name: "Karan Patel",
    role: "Operations Lead",
    text: "We saw a clear improvement in how customers responded to our messaging after the redesign. Strong visuals, clear storytelling, and dependable delivery throughout.",
    img: user,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoRef = useRef(null);

  const visibleCount = 3;

  const startAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(autoRef.current);
  }, []);

  const goTo = (index) => {
    setActiveIndex(index);
    startAuto();
  };

  const prev = () =>
    goTo((activeIndex - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((activeIndex + 1) % testimonials.length);

  const visibleTestimonials = Array.from(
    { length: visibleCount },
    (_, offset) => testimonials[(activeIndex + offset) % testimonials.length],
  );

  return (
    <motion.section
      className="testimonial-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      viewport={viewport}
    >
      {/* Heading */}
      <motion.h2
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        Feedback from the Clients
      </motion.h2>
      {/* Top Divider */}
      <div className="divider" />

      {/* Three-up carousel wrapped in blue frame */}
      <div className="carousel-frame">

        {/* Arrow controls MOVED INSIDE THE FRAME */}
        <motion.div
          className="arrow-gap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
          viewport={viewport}
        >
          <motion.button
            className="nav-btn prev"
            onClick={prev}

          >
            <img src={leftarrow} alt="prev"/>
          </motion.button>
          <motion.button
            className="nav-btn next"
            onClick={next}

          >
            <img src={rightarrow} alt="next"/>
          </motion.button>
        </motion.div>

        <div className="carousel-wrapper">
          <div className="carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="carousel-track"
                initial={{
                  opacity: 0,
                  x: 80,
                  scale: 0.96,
                  filter: "blur(4px)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.55, ease: EASE },
                }}
                exit={{
                  opacity: 0,
                  x: -60,
                  scale: 0.96,
                  filter: "blur(4px)",
                  transition: { duration: 0.3 },
                }}
              >
                {visibleTestimonials.map((item) => (
                  <div className="testimonial-card" key={item.id}>

                    {/* New wrapper for left-side profile content */}
                    <div className="profile-section">
                      <img src={item.img} alt={item.name} />

                      <div className="client-info">
                        <h4>{item.name}</h4>
                        <span className="role">{item.role}</span>
                      </div>
                    </div>

                    {/* Sibling to profile-section */}
                    <p className="testimonial-text">"{item.text}"</p>

                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="divider bottom-divider" />


    </motion.section>
  );
};

export default Testimonials;