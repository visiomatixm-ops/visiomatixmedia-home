import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./HomePage1.css";

import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.png";
import image3 from "../../../assets/images/image3.png";
import image4 from "../../../assets/images/image4.png";
import image5 from "../../../assets/images/image5.png";
import image6 from "../../../assets/images/image6.png";
import image7 from "../../../assets/images/image7.png";

import arrow1 from "../../../assets/icons/arrow1.png";
import arrow2 from "../../../assets/icons/arrow2.png";

import {
  staggerContainer,
  staggerItem,
  floatYSlow,
  glowPulse,
  EASE,
} from "../../../hooks/useScrollAnimation";

/* ── hero section entrance (page-load, not scroll) ── */
const heroSectionEntrance = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const heroChild = {
  hidden:  { opacity: 0, y: 55 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

/* ── slide content — plays every slide change ── */
const contentSlide = {
  initial:  { opacity: 0, x: -70, filter: "blur(6px)" },
  animate:  { opacity: 1, x: 0,   filter: "blur(0px)",
              transition: { duration: 0.7, ease: EASE } },
  exit:     { opacity: 0, x: 30, filter: "blur(4px)",
              transition: { duration: 0.3, ease: EASE } },
};

const imageSlide = {
  initial:  { opacity: 0, scale: 0.72, x: 80, rotate: 4 },
  animate:  { opacity: 1, scale: 1,    x: 0,  rotate: 0,
              transition: { duration: 0.85, ease: EASE } },
  exit:     { opacity: 0, scale: 0.85, x: -40,
              transition: { duration: 0.3 } },
};

const HomePage1 = () => {
  const navigate = useNavigate();

  const handleCallClick = () => {
    navigate("/contact");
  };

  const slides = [
    {
      id: 1,
      title: "Digital Marketing Services",
      description:
        "We provide result-driven digital marketing services that boost online visibility, engagement, and business growth through strategic SEO, social media, and performance campaigns.",
      image: image7,
    },
    {
      id: 2,
      title: "Design & Creative Services",
      description:
        "We create impactful visual designs that communicate your brand story through compelling graphics, creatives, and visually consistent digital experiences.",
      image: image1,
    },
    {
      id: 3,
      title: "Web & App Development",
      description:
        "We build scalable, high-performance websites and applications with clean code, modern technology, and a seamless user experience across all devices.",
      image: image2,
    },
    {
      id: 4,
      title: "Business Software Solutions",
      description:
        "We develop customized business software solutions that streamline operations, improve efficiency, and support scalable growth through smart, secure technology.",
      image: image3,
    },
    {
      id: 5,
      title: "E-commerce Solutions",
      description:
        "We create powerful e-commerce solutions that deliver smooth shopping experiences, secure transactions, and scalable platforms designed to drive online sales.",
      image: image4,
    },
    {
      id: 6,
      title: "Branding & Strategy",
      description:
        "We build strong brand identities and strategic frameworks that define your vision, strengthen market positioning, and create long-term brand value.",
      image: image5,
    },
    {
      id: 7,
      title: "SEO",
      description:
        "We optimize websites for search engines using proven SEO strategies that improve visibility, drive organic traffic, and deliver long-term ranking growth.",
      image: image6,
    },
  ];

  // Properly cloned slides with unique identifiers
  const extendedSlides = [
    { ...slides[slides.length - 1], cloneId: "clone-last" },
    ...slides,
    { ...slides[0], cloneId: "clone-first" },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransition, setIsTransition] = useState(true);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Seamless infinite reset
  useEffect(() => {
    if (currentIndex === extendedSlides.length - 1) {
      setTimeout(() => {
        setIsTransition(false);
        setCurrentIndex(1);
      }, 500);
    }

    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransition(false);
        setCurrentIndex(slides.length);
      }, 500);
    }
  }, [currentIndex, extendedSlides.length, slides.length]);

  // Re-enable animation after jump
  useEffect(() => {
    if (!isTransition) {
      requestAnimationFrame(() => {
        setIsTransition(true);
      });
    }
  }, [isTransition]);

  const handleNext = () => setCurrentIndex((prev) => prev + 1);
  const handlePrev = () => setCurrentIndex((prev) => prev - 1);

  const getActiveDotIndex = (index) => {
    const realIndex = (index - 1 + slides.length) % slides.length;
    if (realIndex <= 1) return 0;
    if (realIndex <= 3) return 1;
    return 2;
  };

  const activeDotIndex = getActiveDotIndex(currentIndex);

  return (
    <section className="section-home1">
      <div className="slider-outer-home1">
        <div className="slider-viewport-home1">
          <div
            className="slider-track-home1"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransition ? "transform 0.5s ease-in-out" : "none",
            }}
          >
            {extendedSlides.map((slide, index) => (
              <div
                key={`${slide.id}-${slide.cloneId || "real"}-${index}`}
                className="slide-home1"
              >
                <div className="slide-inner-home1">
                  {/* CONTENT — entrance animation on every slide change */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`content-${currentIndex}`}
                      {...contentSlide}
                      className="content-home1"
                    >
                      {/* Page-load stagger for the very first render */}
                      <motion.div
                        variants={heroSectionEntrance}
                        initial="hidden"
                        animate="visible"
                        style={{ display: "contents" }}
                      >
                        <motion.h4
                          variants={heroChild}
                          className="welcome-home1"
                        >
                          Welcome to Visiomatix Media
                        </motion.h4>

                        <motion.h1
                          variants={heroChild}
                          className="page1-heading-home1"
                        >
                          <span className="gradient-text-home1">
                            {slide.title}
                          </span>
                        </motion.h1>

                        <motion.p
                          variants={heroChild}
                          className="paragraph-home1"
                        >
                          {slide.description}
                        </motion.p>

                        {/* Glowing CTA button */}
                        <motion.button
                          variants={heroChild}
                          className="button-home1"
                          onClick={handleCallClick}
                          animate="pulse"
                          {...glowPulse}
                          whileHover={{
                            scale: 1.07,
                            boxShadow: "0 8px 36px rgba(0,200,255,0.5)",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Get Your Free Call
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>

                  {/* IMAGE — floating + entrance per slide */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`image-${currentIndex}`}
                      {...imageSlide}
                      className="image-container-home1"
                      animate={["animate", "float"]}
                      variants={{ ...imageSlide, ...floatYSlow }}
                    >
                      <img src={slide.image} alt={slide.title} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <motion.div
        className="controls-home1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
      >
        <motion.img
          src={arrow2}
          alt="Previous"
          className="arrow-home1"
          onClick={handlePrev}
          whileHover={{ scale: 1.25, rotate: -10, filter: "brightness(1.6)" }}
          whileTap={{ scale: 0.85 }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        <div className="dots-home1">
          {[0, 1, 2].map((dotIndex) => (
            <motion.span
              key={`dot-${dotIndex}`}
              className={`dot-home1 ${dotIndex === activeDotIndex ? "active-home1" : ""}`}
              animate={
                dotIndex === activeDotIndex
                  ? { scale: 1.6, opacity: 1 }
                  : { scale: 1, opacity: 0.45 }
              }
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              onClick={() => {
                if (dotIndex === 0) setCurrentIndex(1);
                if (dotIndex === 1) setCurrentIndex(3);
                if (dotIndex === 2) setCurrentIndex(5);
              }}
            />
          ))}
        </div>

        <motion.img
          src={arrow1}
          alt="Next"
          className="arrow-home1"
          onClick={handleNext}
          whileHover={{ scale: 1.25, rotate: 10, filter: "brightness(1.6)" }}
          whileTap={{ scale: 0.85 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>
    </section>
  );
};

export default HomePage1;
