import React from 'react'
import { motion } from "framer-motion";

import "../../page1.css";
import digimart from '../../../../assets/CloudBasedE-CommerceSolutions/image1.png';

const Page1 = () => {
    return (
        <div className='service_1_root'>

            <main className='hero-box-service1'>
                <div className="title-box-service1" style={{ width: "100%" }}>

                    <motion.h1
                        className="title2-service1"
                        style={{ width: "100%" }}
                        initial={{ opacity: 0, y: -60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Cloud Based E-commerce Solutions
                    </motion.h1>

                    <motion.p
                        className="sub-title-service1"
                        style={{ width: "100%" }}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        High-Performance Cloud Commerce. Optimized for Growth & Operational Efficiency.
                    </motion.p>

                    <motion.p
                        className="service-para1-service1"
                        style={{ width: "100%" }}
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        At Visiomatix Media, Cloud-Based E-commerce Solutions are treated as strategic digital growth engines  not just hosted online stores. We design and deploy scalable, secure, high-performance cloud commerce platforms that enhance agility and drive consistent revenue growth. Through intelligent cloud architecture and seamless integrations, we enable organizations to scale effortlessly, maintain uptime stability, and operate future-ready digital commerce ecosystems.
                    </motion.p>

                </div>

                <div className="logo-box2-service1">

                    <motion.img
                        src={digimart}
                        alt="Image"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                    />

                    <div>

                        <motion.div
                            className="social-media-service1"
                            initial={{ opacity: 0, x: -120 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <p>
                                HOW WE ENGINEER CLOUD-POWERED COMMERCE SYSTEMS<br />
                                <span>HOW WE DESIGN & DEPLOY SCALABLE CLOUD E-COMMERCE</span>
                            </p>
                        </motion.div>

                        <div className="content-box-service1">

                            <motion.div
                                className="content-service1"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h2><span>01.</span> Strategic Cloud Commerce Architecture & Planning</h2>
                                <p>We define business objectives, analyze customer journeys, and design scalable cloud-native commerce architectures focused on flexibility, performance, and long-term digital growth.</p>
                            </motion.div>

                            <motion.div
                                className="content-service1"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h2><span>02.</span> High-Performance Cloud Development & Deployment</h2>
                                <p> We build secure, fast, and resilient cloud e-commerce platforms engineered for uptime stability, seamless integrations, and optimized user experiences across devices and channels.</p>
                            </motion.div>

                            <motion.div
                                className="content-service1"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h2><span>03.</span> Security, Performance & Scalability Optimization </h2>
                                <p>Through rigorous testing, cloud security hardening, and infrastructure optimization, we ensure reliable performance, protected data environments, and scalable systems that grow with business demand.</p>
                            </motion.div>

                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            With Visiomatix Media, Cloud-Based E-commerce Solutions deliver more than hosted transactions they create agile, scalable commerce ecosystems built for long-term revenue growth.
                            Through strategic cloud architecture and high-performance engineering, we help businesses build resilient commerce infrastructures and transform digital storefronts into reliable, scalable revenue engines that evolve with market demand.
                        </motion.p>

                    </div>

                </div>

            </main>
        </div>
    )
}

export default Page1