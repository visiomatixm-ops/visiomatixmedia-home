import "../../page4.css";
import { NavLink } from "react-router";

import img1 from "../../../../assets/ECommerceDevelopmentSolutions/icon/1.png";
import img2 from "../../../../assets/ECommerceDevelopmentSolutions/icon/2.png";
import img3 from "../../../../assets/ECommerceDevelopmentSolutions/icon/3.png";
import img4 from "../../../../assets/ECommerceDevelopmentSolutions/icon/4.png";
import img5 from "../../../../assets/ECommerceDevelopmentSolutions/icon/5.png";
import img6 from "../../../../assets/ECommerceDevelopmentSolutions/icon/6.png";
import img7 from "../../../../assets/ECommerceDevelopmentSolutions/icon/7.png";
import img8 from "../../../../assets/ECommerceDevelopmentSolutions/icon/8.png";

import arrow from '../../../assets/business-software-solutions/icon/arrow1.png'

const expertiseList = [
  {
    title: "Custom Website Development",
    description:
      "We build fast, responsive, and scalable websites tailored to your business goals, ensuring strong performance, usability, and long term reliability.",
    img: img1,
    red: "/services/custom-ecommerce-development",
  },
  {
    title: "Backend & API Development",
    description:
      "Robust, scalable backend systems with secure APIs and third party integrations to ensure smooth data flow and system efficiency.",
    img: img2,
    red: "/services/ecommerce-ui-ux-design",
  },
  {
    title: "Mobile App Development (iOS & Android)",
    description:
      "Secure, high performance mobile applications designed for seamless user experience, scalability, and cross platform compatibility.",
    img: img3,
    red: "/services/payment-gateway-integration",
  },
  {
    title: "E-Commerce Development Solutions",
    description:
      "Conversion focused e-commerce platforms with secure payment gateways, inventory management, and performance optimization.",
    img: img4,
    red: "/services/product-inventory-management",
  },
  {
    title: "Web Application Development",
    description:
      "Feature rich web applications developed with clean architecture and modern technologies to support business operations and future growth.",
    img: img5,
    red: "/services/ecommerce-platform-migration",
  },
  {
    title: "Performance, Security & Optimization",
    description:
      "Speed optimization, security enhancements, and stability improvements to deliver reliable, high performing digital products.",
    img: img6,
    red: "/services/third-party-api-integrations",
  },
  {
    title: "UI/UX–Driven Development",
    description:
      "Development powered by user centric UI/UX principles to improve engagement, navigation, and conversion rates across digital platforms.",
    img: img7,
    red: "/services/performance-optimization",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing technical support, updates, monitoring, and enhancements to keep your web and app platforms stable and future ready.",
    img: img8,
    red: "/services/ecommerce-support-maintenance",
  }
];

const Page4 = () => {
  return (
    <section className="business-software-solution4">

      <p className="blue-bss4">
        OUR SPECIALIZATION
      </p>

      <div className="divider-bss4"></div>

      <h2 className="h2-bss4">
        What We Have <span> to Offer</span>
      </h2>

      <div className="cards-bss4">
        {expertiseList.map((item, index) => (
          <div
            className={`feature-card-bss4-${index} feature-card-bss4`}
            key={index}
          >

            <div className="icon-box-bss4">
              <img src={item.img} alt={item.title} />
            </div>

            <h4>{item.title}</h4>
            <p>{item.description}</p>

            <motion.div
              className="read-more-wrapper-bss4"
              whileHover={{
                scale: 1.07,
                boxShadow: "0 0 18px rgba(0,200,255,0.4)",
              }}
              whileTap={{ scale: 0.93 }}
            >
              <NavLink to={item.red} className="read-more-btn-bss4">
                Read More
                <img src={arrow} alt="arrow" className="read-more-icon-bss4" />
              </NavLink>
            </motion.div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Page4;