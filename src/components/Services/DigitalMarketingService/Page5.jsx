import React from "react";
import "./page1.css";

// import img1 from "../assets/branding-and-strategy/images/5-1.png";
// import img2 from "../assets/branding-and-strategy/images/5-2.png";
// import img3 from "../assets/branding-and-strategy/images/5-3.png";
// import img4 from "../assets/branding-and-strategy/images/5-4.png";
// import img5 from "../assets/branding-and-strategy/images/5-5.png";
// import img6 from "../assets/branding-and-strategy/images/5-6.png";
// import img7 from "../assets/branding-and-strategy/images/5-7.png";
// import img8 from "../assets/branding-and-strategy/images/5-8.png";
// import img9 from "../assets/branding-and-strategy/images/5-9.png";
// import img10 from "../assets/branding-and-strategy/images/5-10.png";
// import img11 from "../assets/branding-and-strategy/images/5-11.png";
// import img12 from "../assets/branding-and-strategy/images/5-12.png";
// import img13 from "../assets/branding-and-strategy/images/5-13.png";
// import img14 from "../assets/branding-and-strategy/images/5-14.png";


import img1 from "../../../assets/Digital_Marketing_Services/icon/instagram.png";
import img2 from "../../../assets/Digital_Marketing_Services/icon/facebook.png";
import img3 from "../../../assets/Digital_Marketing_Services/icon/linkedin.png";
import img4 from "../../../assets/Digital_Marketing_Services/icon/youtube.png";
import img5 from "../../../assets/Digital_Marketing_Services/icon/x.png";
import img6 from "../../../assets/Digital_Marketing_Services/icon/pinterest.png";
import img7 from "../../../assets/Digital_Marketing_Services/icon/snapchat.png";
import img8 from "../../../assets/Digital_Marketing_Services/icon/whatsapp.png";
import img9 from "../../../assets/Digital_Marketing_Services/icon/google.png";
import img10 from "../../../assets/Digital_Marketing_Services/icon/telegram.png";
import img11 from "../../../assets/Digital_Marketing_Services/icon/be.png";
import img12 from "../../../assets/Digital_Marketing_Services/icon/ball.png";
import img13 from "../../../assets/Digital_Marketing_Services/icon/reddit.png";
import img14 from "../../../assets/Digital_Marketing_Services/icon/quora.png";

const logos = [
    img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13, img14
];

const Service3_5 = () => {
    return (
        <main className="bss5">
            <section className="blue-title-bss5">
                <h1>
                  Social Platforms We Specialize In
                    <div>Strategic Partnerships</div>
                </h1>
            </section>

            <section className="slider-bss5">
                <div className="slider-box-bss5">
                    {[...logos, ...logos].map((img, index) => (
                        <img src={img} alt="logo" key={index} />
                    ))}
                </div>
            </section>

            <section className="para-bss5">
                <p>
                   At Visiomatix Media, we specialize in managing a diverse ecosystem of social media platforms, selecting and optimizing each channel based on your brand’s objectives, industry, and target audience. From high impact platforms like Instagram, Facebook, LinkedIn, and YouTube to niche and creative networks such as Behance, Dribbble, and community driven platforms like Reddit and Quora, we design platform specific strategies that maximize reach, engagement, and relevance. Our expertise ensures every platform is used with purpose delivering consistent brand presence, meaningful audience interaction, and measurable growth across all digital touchpoints.
                   </p>

                <button>Book Your Free Strategy Call</button>
            </section>
        </main>
    );
};

export default Service3_5;
