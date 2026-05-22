import React, { useEffect, useState } from "react";
import HomePage9 from "../Home/HomePage9/index.jsx";
import "./career.css";
import img1 from "./image1.png";
import img2 from "./image2.png";
import ReCAPTCHA from "react-google-recaptcha";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleIn,
  staggerContainer,
  flipUp,
  cardReveal,
  glowPulse,
  viewport,
  EASE,
} from "../../hooks/useScrollAnimation";
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
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const [resume, setResume] = useState(null);

  const handleCaptcha = (value) => {
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
        setErrors((prev) => ({ ...prev, resume: "Please upload a PDF, DOC, or DOCX file" }));
        setResume(null);
        e.target.value = "";
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, resume: "Resume file must be less than 5MB" }));
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
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
    if (!formData.qualification?.trim()) newErrors.qualification = "Qualification is required";
    if (!/^[0-9]{10}$/.test(formData.mobile || "")) newErrors.mobile = "Phone number must be 10 digits";
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
      if (resume) uploadFormData.append("resume", resume);

      const response = await fetch("https://visiomatix.onrender.com/api/career-application", {
        method: "POST",
        body: uploadFormData,
      });
      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setSubmitMessage("Application sent successfully! We'll review your resume and get back to you soon.");
        e.target.reset();
        setCaptchaVerified(false);
        setResume(null);
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
        setSubmitMessage(data.message || "Failed to send application. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
      setSubmitMessage("Server error. Please try later or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="role_1_root-career">
      <div className="career-page-wrapper">

        {/* ═══════════════════════════════
            HERO
        ═══════════════════════════════ */}
        <main className="hero-box-role1-career">
          <div className="title-box-role1-career">

            {/* CHANGE 1 — Hero title */}
            <motion.h1
              className="title2-role1-career"
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              viewport={viewport}
            >
              Careers
            </motion.h1>

            {/* CHANGE 2 — Sub-title clip reveal */}
            <motion.p
              className="sub-title-role1-career"
              initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              viewport={viewport}
            >
              Join Our Team
            </motion.p>

            {/* CHANGE 3 — Intro paragraph */}
            <motion.p
              className="role-para1-role1-career"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              Be part of a dynamic team dedicated to delivering innovative
              digital solutions. We're always looking for talented individuals
              who are passionate about technology, creativity, and excellence.
            </motion.p>
          </div>

          {/* ─── JOB CARDS ─── */}
          <div className="career-content-sb1-career">
            <div className="container-1400">

              {/* CHANGE 4 — Job cards stagger */}
              <motion.div
                className="career-cards-sb1-career"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {posts.map((job) => (
                  <motion.div
                    className="career-card-sb1-career"
                    key={job._id}
                    variants={cardReveal}
                    whileHover={{
                      y: -8,
                      boxShadow: "0 16px 48px rgba(0,120,255,0.22)",
                      transition: { type: "spring", stiffness: 260, damping: 18 },
                    }}
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
                          viewport={viewport}
                        />
                      </div>
                    )}
                    <p className="career-meta-sb1-career">
                      {new Date(job.date).toLocaleDateString()}{" "}
                      <span className="dot-separator-career">•</span>{" "}
                      {job.location || "Not specified"}{" "}
                      <span className="dot-separator-career">•</span>{" "}
                      {job.requirements ? job.requirements.split(/[,\n]+/)[0].trim() : ""}
                    </p>
                    <p className="career-desc-sb1-career">{job.title}</p>

                    {/* CHANGE 5 — View Details button glow pulse */}
                    <div className="view-details-wrapper-sb1-career">
                      <motion.button
                        className="read-more-btn-sb1-blog"
                        onClick={() => setSelected(job)}
                        whileHover={{ scale: 1.06, x: 4, boxShadow: "0 0 16px rgba(0,200,255,0.4)" }}
                        whileTap={{ scale: 0.93 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </main>

        {/* ═══════════════════════════════
            SECTION 1 — Why Work With Us
        ═══════════════════════════════ */}
        <section className="careers1">
          <div className="container-1400">
            <div className="careers1-content">

              {/* CHANGE 6 — Left text block */}
              <motion.div
                className="careers1-left"
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <motion.h2
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE }}
                  viewport={viewport}
                >
                  Why Work With Us ?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
                  viewport={viewport}
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
              </motion.div>

              {/* CHANGE 7 — Right image scale-in + hover */}
              <motion.div
                className="careers1-right"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <motion.img
                  src={img1}
                  alt="team"
                  whileHover={{ scale: 1.04, y: -6, filter: "brightness(1.06)", boxShadow: "0 20px 60px rgba(0,100,255,0.3)" }}
                  transition={{ duration: 0.45 }}
                />
              </motion.div>
            </div>

            {/* CHANGE 8 — Divider draw */}
            <motion.div
              className="line-2"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.1, ease: EASE }}
              viewport={viewport}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </section>

        {/* ═══════════════════════════════
            SECTION 2 — Digital Industry
        ═══════════════════════════════ */}
        <section className="careers2">
          <div className="container-1400">
            <div className="careers2-top">

              {/* CHANGE 9 — Left points block */}
              <motion.div
                className="careers2-left"
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <motion.h2
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE }}
                  viewport={viewport}
                >
                  Why Build Your Career in the Digital Industry?
                </motion.h2>

                {[
                  { num: "01", title: "Growing Digital Opportunities", desc: "The digital industry is expanding rapidly as businesses move online." },
                  { num: "02", title: "High Demand for Digital Skills", desc: "Companies are actively seeking professionals with digital skills." },
                  { num: "03", title: "Continuous Learning & Innovation", desc: "The digital field constantly evolves with new technologies." },
                ].map((point, i) => (
                  <motion.div
                    className="point"
                    key={i}
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: EASE, delay: i * 0.15 }}
                    viewport={viewport}
                    whileHover={{ x: 8, transition: { type: "spring", stiffness: 300 } }}
                  >
                    <h3><span>{point.num}</span> {point.title}</h3>
                    <p>{point.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right image */}
              <motion.div
                className="careers2-right"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <motion.img
                  src={img2}
                  alt="team work"
                  whileHover={{ scale: 1.04, y: -6, filter: "brightness(1.06)", boxShadow: "0 20px 60px rgba(0,100,255,0.3)" }}
                  transition={{ duration: 0.45 }}
                />
              </motion.div>
            </div>

            {/* ─── CHANGE 10 — careers2-cards (your stopping point) ─── */}
            <motion.div
              className="careers2-cards"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {careerData.map((item, i) => (
                <motion.div
                  className="card2"
                  key={i}
                  variants={flipUp}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                    boxShadow: "0 16px 48px rgba(0,100,255,0.25)",
                    transition: { type: "spring", stiffness: 260, damping: 18 },
                  }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════
            SECTION 4 — Contact / Apply Form
            CHANGE 11 — full contact section
        ═══════════════════════════════ */}
        <section className="contact">
          <div className="contact-container">

            {/* LEFT info card */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
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
                    Pump, Ganur Road,
                    <br />
                    Davkhar Nagar, Chandawad, Nashik,
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

              {/* CHANGE 12 — social icons spring hover */}
              <div className="socials">
                {[
                  { href: "https://www.instagram.com/visiomatix_media/", src: instagram, alt: "Instagram" },
                  { href: "https://www.facebook.com/visiomatixmedia", src: facebook, alt: "Facebook" },
                  { href: "https://www.linkedin.com/company/visiomatix-media/posts/?feedView=all", src: linkedin, alt: "LinkedIn" },
                  { href: "https://x.com/visiomatixmedia", src: x, alt: "X" },
                ].map((social) => (
                  <motion.a
                    key={social.alt}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -5, scale: 1.12, borderColor: "#00c8ff", boxShadow: "0 6px 20px rgba(0,200,255,0.35)" }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={social.src} alt={social.alt} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* RIGHT form */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="contact-right"
            >
              <span className="small-title">Join Our Team</span>
              <h2>
                APPLY <span>NOW</span>
              </h2>

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid">
                  <div className="field">
                    <input name="name" placeholder="Name" />
                    {errors.name && <small className="error">{errors.name}</small>}
                  </div>

                  <div className="field">
                    <input name="email" type="email" placeholder="Email" />
                    {errors.email && <small className="error">{errors.email}</small>}
                  </div>

                  <div className="field">
                    <input name="qualification" placeholder="Qualification" required />
                    {errors.qualification && <small className="error">{errors.qualification}</small>}
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
                        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                      }}
                      onPaste={(e) => {
                        e.preventDefault();
                        const paste = (e.clipboardData || window.clipboardData).getData("text") || "";
                        const digits = paste.replace(/\D/g, "").slice(0, 10);
                        const target = e.target;
                        const start = target.selectionStart || 0;
                        const end = target.selectionEnd || 0;
                        const newVal = (target.value || "").slice(0, start) + digits + (target.value || "").slice(end);
                        target.value = newVal.slice(0, 10);
                        target.dispatchEvent(new Event("input", { bubbles: true }));
                      }}
                    />
                    {errors.mobile && <small className="error">{errors.mobile}</small>}
                  </div>
                </div>

                <select
                  name="role"
                  onChange={(e) => {
                    if (e.target.value) {
                      setErrors((prev) => {
                        if (!prev?.role) return prev;
                        const copy = { ...prev };
                        delete copy.role;
                        return copy;
                      });
                    }
                  }}
                >
                  <option value="">Which role are you interested in?</option>
                  <option value="web-dev">Web Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="full-stack">Full Stack Development</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="qa">Software Testing & Quality Assurance</option>
                  <option value="cloud">Cloud Computing & Hosting Management</option>
                  <option value="app-dev">App Development (iOS & Android)</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="vfx">VFX & Motion Graphics</option>
                  <option value="hr">Human Resource Management (HR)</option>
                  <option value="pm">Project Management & Leadership</option>
                </select>
                {errors.role && <small className="error">{errors.role}</small>}

                <textarea name="message" placeholder="Message"></textarea>

                {/* CHANGE 13 — Resume upload field fade-up */}
                <motion.div
                  className="field"
                  style={{ marginBottom: "1.5rem" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  viewport={viewport}
                >
                  <label
                    htmlFor="resume"
                    style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}
                  >
                    Upload Resume* (PDF, DOC, DOCX - Max 5MB)
                  </label>
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleResumeChange}
                    style={{ padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px", width: "100%" }}
                  />
                  {resume && (
                    <small style={{ color: "green", display: "block", marginTop: "0.25rem" }}>
                      ✓ {resume.name} selected
                    </small>
                  )}
                  {errors.resume && <small className="error">{errors.resume}</small>}
                </motion.div>

                <ReCAPTCHA
                  className="recaptcha"
                  sitekey="6LdE-IssAAAAAFZQ6EMEH-Me4Biaq31htamX9evb"
                  onChange={handleCaptcha}
                />
                {errors.captcha && <small>{errors.captcha}</small>}

                {submitStatus && (
                  <motion.div
                    className={`submit-message ${submitStatus}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {submitMessage}
                  </motion.div>
                )}

                {/* CHANGE 14 — Submit button with glow pulse */}
                <motion.div
                  animate="pulse"
                  variants={glowPulse}
                  style={{ display: "inline-block", borderRadius: "10px", width: "100%" }}
                >
                  <motion.button
                    type="submit"
                    className="talk"
                    disabled={loading}
                    whileHover={!loading ? { scale: 1.03, boxShadow: "0 8px 28px rgba(0,200,255,0.4)" } : {}}
                    whileTap={!loading ? { scale: 0.97 } : {}}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {loading ? "Sending..." : "Let's Talk"}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════
            CHANGE 15 — Career Modal with AnimatePresence
        ═══════════════════════════════ */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="career-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="career-modal-content"
                initial={{ opacity: 0, scale: 0.82, y: 60 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: 40 }}
                transition={{ duration: 0.4, ease: EASE }}
                onClick={(e) => e.stopPropagation()}
              >
                <h2>{selected.title}</h2>
                <p className="modal-location">📍 {selected.location || "Not specified"}</p>
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
                {selected.imageUrl && (
                  <motion.img
                    src={selected.imageUrl}
                    alt=""
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                )}
                <motion.button
                  onClick={() => setSelected(null)}
                  whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,200,255,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <HomePage9 />
      </div>
    </div>
  );
};

export default Career;