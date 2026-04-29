import "./service2.css";
import "./service_1.css";
import arrow from "../../assets/business-software-solutions/icon/arrow1.png";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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
          <div className="service2-divider-blog"></div>

          <div
            className="top-row-wrapper-blog"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div className="left-text-wrapper-blog">
              <motion.p
                className="blog-tag-blog"
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                ABOUT OUR BLOGS
              </motion.p>
              <motion.h2
                className="blog-heading-blog"
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                We Decode Digital <span>Growth</span>
              </motion.h2>

              <div className="lets-connect-wrapper-blog">
                <motion.button
                  className="lets-connect-btn-blog"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Let's connect
                  <img src={arrow} alt="arrow" className="connect-icon-blog" />
                </motion.button>
              </div>
            </div>

            <div className="card-wrapper-blog">
              <div className="cards-bss4-blog">
                {blogFeatureList.map((item, index) => (
                  <motion.div
                    className="blog-feature-card-blog"
                    key={index}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                  >
                    <motion.div
                      className="blog-icon-box-blog"
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.15 }}
                    >
                      <img src={item.img} alt={item.title} />
                    </motion.div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {olderBlogs.length > 0 && (
            <div className="other-blogs-sb1-blog" style={{ marginTop: 40 }}>
              {olderBlogs.map((blog, index) => (
                <motion.div
                  className="blog-card-sb1-blog"
                  key={blog._id || blog.id}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                >
                  <div className="blog-img-container-sb1-blog">
                    <motion.img
                      src={blog.imageUrl || blog.image || blogImg1}
                      alt={blog.title}
                      className="fit-image"
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                  <p className="blog-meta-sb1-blog">
                    {new Date(blog.date).toLocaleDateString()}{" "}
                    <span className="dot-separator-blog">•</span>{" "}
                    {blog.author || "Admin"}{" "}
                    <span className="dot-separator-blog">•</span>{" "}
                    {blog.comments || "No Comments"}
                  </p>
                  <p className="blog-desc-sb1-blog">{blog.title}</p>
                  <div className="read-more-wrapper-sb1-blog">
                    <button
                      className="read-more-btn-sb1-blog"
                      onClick={() => setSelectedBlog(blog)}
                    >
                      Read More
                      <img
                        src={arrow}
                        alt="arrow"
                        className="read-more-icon-sb1-blog"
                      />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </section>

      {selectedBlog && (
        <div className="blog-modal" onClick={() => setSelectedBlog(null)}>
          <div
            className="blog-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="blog-modal-close"
              onClick={() => setSelectedBlog(null)}
            >
              ×
            </button>
            {selectedBlog.imageUrl && (
              <img
                src={selectedBlog.imageUrl}
                alt={selectedBlog.title}
                className="blog-modal-image"
              />
            )}
            <h2 className="blog-modal-title">{selectedBlog.title}</h2>
            <p className="blog-modal-meta">
              {new Date(selectedBlog.date).toLocaleDateString()} •{" "}
              {selectedBlog.author || "Admin"} •{" "}
              {selectedBlog.comments || "No Comments"}
            </p>
            <p className="blog-modal-description">
              {selectedBlog.description || selectedBlog.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service3_2;
