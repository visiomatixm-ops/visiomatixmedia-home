import "./HomePage2Hero.css";

import heroImage from "../../../assets/images/hero.png";
import rocket from "../../../assets/images/rocket.png";
import vectorRight from "../../../assets/images/Vector (right)1.png";
import vectorLeft from "../../../assets/images/Vector (left)2.png";
import leftCoat from "../../../assets/icons/leftCoat.png";
import rightCoat from "../../../assets/icons/rightCoat.png";
import { NavLink } from "react-router";

const HomePage2Hero = () => {
  return (
    <section className="hero-home2">
      <div className="hero-container-home2">

        {/* ===== TOP ROW ===== */}
        <div className="hero-top-home2">

          {/* LEFT TEXT */}
          <div className="hero-text-home2">
            <h1 className="hero-title-home2">
              Enter the Visiomatix system. Power{" "}
              <img src={rightCoat} alt="" />
              <br />
              every digital move you make!
            </h1>

            <p className="hero-desc-home2">
              We provide result-driven digital marketing services that boost online
              visibility, engagement, and business growth through strategic SEO,
              social media, and performance campaigns.
            </p>
            <NavLink to='/contact' className='hero-btn-home2'>Build With Visiomatix!</NavLink>
          </div>

          {/* RIGHT CHARACTER */}
          <div className="hero-visual-home2">
            <img src={vectorRight} className="hero-vector-home2" alt="" />
            <img src={heroImage} className="hero-img-home2" alt="" />
          </div>
        </div>

        {/* ===== BOTTOM ROW ===== */}
        <div className="hero-bottom-home2">

          {/* ROCKET */}
          <div className="rocket-home2">
            <img src={vectorLeft} className="rocket-vector-home2" alt="" />
            <img src={rocket} className="rocket-img-home2" alt="" />
          </div>

          {/* WELCOME TEXT */}
          <div className="welcome-home2">
            <h2>
              <img src={leftCoat} alt="" />
              Welcome to Visiomatix Media
            </h2>

            <p>
              Whether you’re a startup entering the global market, a digital agency
              seeking a strategic partner, or an enterprise ready to scale across
              regions — Visiomatix Media integrates seamlessly into your growth
              journey.
            </p>

            <p>
              Working with clients across industries and geographies, we combine
              strategy, creativity, technology, and performance marketing into a
              scalable digital system built for global impact.
            </p>

            <p>
              This is digital growth without boundaries.
              <br />
              This is Visiomatix Media.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomePage2Hero;
