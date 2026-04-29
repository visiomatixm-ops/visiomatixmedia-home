import React, { useEffect, useState } from "react";
import HomePage9 from "../Home/HomePage9/index.jsx";
// import arrow from "../../assets/business-software-solutions/icon/arrow1.png";
import "./career.css";
import img1 from "./image1.png";
import img2 from "./image2.png";
import ReCAPTCHA from "react-google-recaptcha";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import instagram from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png";
import x from "../../assets/icons/x.png";
import linkedin from "../../assets/icons/linkedin.png";
const Career = () => {
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState(null);
  const careerData = [
    {
      title: "Collaborative Work Environment",
      desc: "At Visiomatix Media, we foster a collaborative work culture where teamwork and open communication drive success. Employees are encouraged to share ideas, support one another, and work toward shared goals. This inclusive environment values creativity and diverse perspectives, ensuring collective efforts result in meaningful outcomes for both clients and teams.",
    },
    {
      title: "Continuous Learning",
      desc: "We believe learning is an ongoing journey and encourage our team to continuously upgrade their skills. By exploring new technologies and working on real-world projects, employees gain valuable experience. Knowledge sharing and staying updated with industry trends help individuals grow professionally while adapting to the evolving digital landscape.",
    },
    {
      title: "Career Growth Opportunities",
      desc: "We are committed to helping our employees grow by recognizing talent and providing opportunities to advance. Through mentorship, real project exposure, and leadership roles, individuals can enhance their skills. A performance-driven environment ensures that dedication, innovation, and hard work are consistently rewarded and supported within the organization.",
    },
    {
      title: "Diverse Client Exposure",
      desc: "Our team works with clients from various industries, including startups and established businesses, gaining diverse experience. This exposure helps employees understand different business models and challenges. Working on varied projects enhances problem-solving skills, boosts creativity, and provides deeper insights into the digital landscape across multiple sectors.",
    },
  ];
  const jobsList = [
    "Graphic Designer",
    "Full Stack Developer",
    "Email Marketing Specialist",
    "Video Editor",
  ];

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    alert("Form submitted!");
  };

  // fetching
  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await fetch("https://visiomatix.onrender.com/api/careers");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCareers();
  }, []);
  const [errors, setErrors] = useState({});
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [submitMessage, setSubmitMessage] = useState("");
  const [resume, setResume] = useState(null);

  const handleCaptcha = (value) => {
    console.log("Captcha value:", value);
    if (value) setCaptchaVerified(true);
  };

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          resume: "Please upload a PDF, DOC, or DOCX file",
        }));
        setResume(null);
        e.target.value = "";
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          resume: "Resume file must be less than 5MB",
        }));
        setResume(null);
        e.target.value = "";
        return;
      }
      setResume(file);
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.resume;
        return copy;
      });
    }
  };

  const validate = (formData) => {
    const newErrors = {};

    if (!formData.name?.trim()) newErrors.name = "Name is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.qualification?.trim())
      newErrors.qualification = "Qualification is required";

    if (!/^[0-9]{10}$/.test(formData.mobile || ""))
      newErrors.mobile = "Phone number must be 10 digits";

    if (!formData.role) newErrors.role = "Please select a role";

    if (!resume) newErrors.resume = "Please upload your resume";

    if (!captchaVerified) newErrors.captcha = "Please verify CAPTCHA";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData(e.target);
    const formDataPlain = Object.fromEntries(formDataObj);
    const validationErrors = validate(formDataPlain);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus(null);
      return;
    }

    setErrors({});
    setLoading(true);
    setSubmitStatus(null);

    try {
      const uploadFormData = new FormData();
      uploadFormData.append("name", formDataPlain.name);
      uploadFormData.append("email", formDataPlain.email);
      uploadFormData.append("qualification", formDataPlain.qualification);
      uploadFormData.append("mobile", formDataPlain.mobile);
      uploadFormData.append("role", formDataPlain.role);
      uploadFormData.append("message", formDataPlain.message);
      if (resume) {
        uploadFormData.append("resume", resume);
      }

      const backendUrl =
        "https://visiomatix.onrender.com/api/career-application";
      const response = await fetch(backendUrl, {
        method: "POST",
        body: uploadFormData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setSubmitMessage(
          "Application sent successfully! We'll review your resume and get back to you soon.",
        );
        e.target.reset();
        setCaptchaVerified(false);
        setResume(null);

        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          data.message || "Failed to send application. Please try again.",
        );
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
      setSubmitMessage(
        "Server error. Please try later or contact us directly.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="role_1_root-career">
      <div className="career-page-wrapper">
        <main className="hero-box-role1-career">
          <div className="title-box-role1-career">
            <motion.h1
              className="title2-role1-career"
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Careers
            </motion.h1>
            <motion.p
              className="sub-title-role1-career"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Join Our Team
            </motion.p>
            <motion.p
              className="role-para1-role1-career"
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              Be part of a dynamic team dedicated to delivering innovative
              digital solutions. We're always looking for talented individuals
              who are passionate about technology, creativity, and excellence.
            </motion.p>
          </div>

          <div className="career-content-sb1-career">
            <div className="container-1400">
              <div className="career-cards-sb1-career">
                {posts.map((job, index) => (
                  <motion.div
                    className="career-card-sb1-career"
                    key={job._id}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                  >
                    {job.imageUrl && (
                      <div className="career-img-container-sb1-career">
                        <motion.img
                          src={job.imageUrl}
                          alt={job.title}
                          className="fit-image"
                          initial={{ opacity: 0, scale: 0.6 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8 }}
                        />
                      </div>
                    )}
                    <p className="career-meta-sb1-career">
                      {new Date(job.date).toLocaleDateString()}{" "}
                      <span className="dot-separator-career">•</span>{" "}
                      {job.location || "Not specified"}{" "}
                      <span className="dot-separator-career">•</span>{" "}
                      {job.requirements
                        ? job.requirements.split(/[,\n]+/)[0].trim()
                        : ""}
                    </p>
                    <p className="career-desc-sb1-career">{job.title}</p>
                    <div className="view-details-wrapper-sb1-career">
                      <button
                        className="read-more-btn-sb1-blog "
                        onClick={() => setSelected(job)}
                      >
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* ================= CAREERS EXTRA SECTION ================= */}
        {/* section 1 */}
        <section className="careers1">
          <div className="container-1400">
            <div className="careers1-content">
              {/* LEFT */}
              <div className="careers1-left">
                <motion.h2
                  initial={{ opacity: 0, y: -60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Why Work With Us?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9 }}
                >
                  At Visiomatix Media, we believe that great ideas come from
                  passionate and motivated people. We provide a collaborative
                  environment where creativity, innovation, and continuous
                  learning are encouraged. Our team members get the opportunity
                  to work on diverse projects, develop new skills, and grow both
                  professionally and personally. We focus on building a
                  supportive culture where every contribution is valued and
                  every individual has the chance to make a meaningful impact.
                </motion.p>
              </div>

              {/* RIGHT */}
              <div className="careers1-right">
                <motion.img
                  src={img1}
                  alt="team"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>

            <div className="line-2" />
          </div>
        </section>

        {/* section 2 */}
        {/* ================= CAREERS PAGE 2 ================= */}
        <section className="careers2">
          <div className="container-1400">
            {/* TOP */}
            <div className="careers2-top">
              <div className="careers2-left">
                <motion.h2
                  initial={{ opacity: 0, y: -60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Why Build Your Career in the Digital Industry?
                </motion.h2>

                <motion.div
                  className="point"
                  initial={{ opacity: 0, x: -120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0 }}
                >
                  <h3>
                    <span>01</span> Growing Digital Opportunities
                  </h3>
                  <p>
                    The digital industry is expanding rapidly as businesses move
                    online.
                  </p>
                </motion.div>

                <motion.div
                  className="point"
                  initial={{ opacity: 0, x: -120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 }}
                >
                  <h3>
                    <span>02</span> High Demand for Digital Skills
                  </h3>
                  <p>
                    Companies are actively seeking professionals with digital
                    skills.
                  </p>
                </motion.div>

                <motion.div
                  className="point"
                  initial={{ opacity: 0, x: -120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                >
                  <h3>
                    <span>03</span> Continuous Learning & Innovation
                  </h3>
                  <p>
                    The digital field constantly evolves with new technologies.
                  </p>
                </motion.div>
              </div>

              <div className="careers2-right">
                <motion.img
                  src={img2}
                  alt="team work"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>

            {/* CARDS */}
            <div className="careers2-cards">
              {careerData.map((item, i) => (
                <motion.div
                  className="card2"
                  key={i}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* section 4 */}
        {/* ================= CAREERS PAGE 4 ================= */}
        <section className="contact">
          <div className="contact-container">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="contact-left"
            >
              <div className="left-content">
                <div className="contact-head">
                  <h4>Contact</h4>
                  <p>+91 89991 01916 / +91 92702 71916</p>
                </div>

                <div>
                  <h4>Address</h4>
                  <p>
                    Office No. 3, Om Sai Apartment, <br /> Near by Petrol
                    Pump,Ganur Road,
                    <br />
                    Davkhar Nagar, Chandawad,Nashik,
                    <br />
                    Maharashtra – India, 423101.
                  </p>
                </div>

                <div className="line" />

                <div>
                  <h4>Email</h4>
                  <p>info@visiomatix.in</p>
                </div>

                <div className="line" />
              </div>

              <div className="socials">
                <a
                  href="https://www.instagram.com/visiomatix_media/"
                  target="_blank"
                >
                  <img src={instagram} alt="Instagram" />
                </a>
                <a
                  href="https://www.facebook.com/visiomatixmedia"
                  target="_blank"
                >
                  <img src={facebook} alt="Facebook" />
                </a>
                <a
                  href="https://www.linkedin.com/company/visiomatix-media/posts/?feedView=all"
                  target="_blank"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
                <a href="https://x.com/visiomatixmedia" target="_blank">
                  <img src={x} alt="X" />
                </a>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-right"
            >
              <span className="small-title">Let's Talk Growth</span>
              <h2>
                SEND A <span>MESSAGE</span>
              </h2>

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid">
                  <div className="field">
                    <input name="name" placeholder="Name" />
                    {errors.name && (
                      <small className="error">{errors.name}</small>
                    )}
                  </div>

                  <div className="field">
                    <input name="email" type="email" placeholder="Email" />
                    {errors.email && (
                      <small className="error">{errors.email}</small>
                    )}
                  </div>

                  <div className="field">
                    <input
                      name="qualification"
                      placeholder="Qualification"
                      required
                    />
                    {errors.qualification && (
                      <small className="error">{errors.qualification}</small>
                    )}
                  </div>

                  <div className="field">
                    <input
                      name="mobile"
                      type="tel"
                      placeholder="Phone Number"
                      inputMode="numeric"
                      pattern="\d*"
                      maxLength={10}
                      onInput={(e) => {
                        e.target.value = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10);
                      }}
                      onPaste={(e) => {
                        e.preventDefault();
                        const paste =
                          (e.clipboardData || window.clipboardData).getData(
                            "text",
                          ) || "";
                        const digits = paste.replace(/\D/g, "").slice(0, 10);
                        const target = e.target;
                        const start = target.selectionStart || 0;
                        const end = target.selectionEnd || 0;
                        const newVal =
                          (target.value || "").slice(0, start) +
                          digits +
                          (target.value || "").slice(end);
                        target.value = newVal.slice(0, 10);
                        target.dispatchEvent(
                          new Event("input", { bubbles: true }),
                        );
                      }}
                    />
                    {errors.mobile && (
                      <small className="error">{errors.mobile}</small>
                    )}
                  </div>
                </div>

                <select
                  name="role"
                  onChange={(e) => {
                    if (e.target.value) {
                      setErrors((prev) => {
                        if (!prev || !prev.role) return prev;
                        const copy = { ...prev };
                        delete copy.role;
                        return copy;
                      });
                    }
                  }}
                >
                  <option value="">Which role are you interested in?</option>
                  <option value="">Select a course</option>
                  <option value="web-dev">Web Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="full-stack">Full Stack Development</option>
                  <option value="graphic-design">Graphic design</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="qa">
                    Software Testing & Quality Assurance
                  </option>
                  <option value="cloud">
                    Cloud Computing & Hosting Management
                  </option>
                  <option value="app-dev">
                    App Development(iOS & Android)
                  </option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="vfx">VFX & Motion Graphics</option>
                  <option value="hr">Human Resource Management(HR)</option>
                  <option value="pm">Project Management & Leadership</option>
                </select>
                {errors.role && <small className="error">{errors.role}</small>}

                <textarea name="message" placeholder="Message"></textarea>

                <div className="field" style={{ marginBottom: "1.5rem" }}>
                  <label
                    htmlFor="resume"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "500",
                    }}
                  >
                    Upload Resume* (PDF, DOC, DOCX - Max 5MB)
                  </label>
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleResumeChange}
                    style={{
                      padding: "0.5rem",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      width: "100%",
                    }}
                  />
                  {resume && (
                    <small
                      style={{
                        color: "green",
                        display: "block",
                        marginTop: "0.25rem",
                      }}
                    >
                      ✓ {resume.name} selected
                    </small>
                  )}
                  {errors.resume && (
                    <small className="error">{errors.resume}</small>
                  )}
                </div>

                <ReCAPTCHA
                  className="recaptcha"
                  sitekey="6LdE-IssAAAAAFZQ6EMEH-Me4Biaq31htamX9evb"
                  onChange={handleCaptcha}
                />
                {errors.captcha && <small>{errors.captcha}</small>}

                {submitStatus && (
                  <div className={`submit-message ${submitStatus}`}>
                    {submitMessage}
                  </div>
                )}

                <motion.button
                  type="submit"
                  className="talk"
                  disabled={loading}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {loading ? "Sending..." : "Let's Talk"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        {selected && (
          <div className="career-modal" onClick={() => setSelected(null)}>
            <div
              className="career-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{selected.title}</h2>
              <p className="modal-location">
                📍 {selected.location || "Not specified"}
              </p>
              <p className="modal-date">
                Posted: {new Date(selected.date).toLocaleDateString()}
              </p>
              <p>{selected.description}</p>
              {selected.requirements && (
                <>
                  <h3>Requirements</h3>
                  <p>{selected.requirements}</p>
                </>
              )}
              {selected.imageUrl && <img src={selected.imageUrl} alt="" />}
              <button onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        )}
        <HomePage9 />
      </div>
    </div>
  );
};

export default Career;
