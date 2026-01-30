import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";
import ellipse from "../../../assets/images/Ellipse 5.png";
import ellipse1 from "../../../assets/images/Ellipse 6.png";
import instagram from "../../../assets/icons/instagram.png";
import facebook from "../../../assets/icons/facebook.png";
import x from "../../../assets/icons/x.png";
import linkedin from "../../../assets/icons/linkedin.png";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptcha = (value) => {
    console.log("Captcha value:", value);
    if (value) setCaptchaVerified(true);
  };

  const validate = (formData) => {
    const newErrors = {};

    if (!formData.name?.trim()) newErrors.name = "Name is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.businessName?.trim())
      newErrors.businessName = "Business name is required";

    if (!/^[0-9]{10}$/.test(formData.mobile || ""))
      newErrors.mobile = "Phone number must be 10 digits";

    if (!formData.service)
      newErrors.service = "Please select a service";

    if (!captchaVerified)
      newErrors.captcha = "Please verify CAPTCHA";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    console.log("Form submitted:", formData);
    // send to backend here
  };

  return (
    <section className="contact">

      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-left">
          <div className="left-content">
            <div className="contact-head">
              <h4>Contact</h4>
              <p>+91 89991 01916  / +91 92702 71916</p>
            </div>

            <div>
              <h4>Address</h4>
              <p>
                Om Sai Apartment, Road, Manmad -<br />
                Chandwad Rd, Dawkhar Nagar, Ganur,<br />
                Nashik, Maharashtra - 423101
              </p>
            </div>

            <div className="line" />

            <div>
              <h4>Email</h4>
              <p>visiomatixmedia@gmail.com</p>
            </div>

            <div className="line" />
          </div>

          <div className="socials">
            <a href="#"><img src={instagram} alt="Instagram" /></a>
            <a href="#"><img src={facebook} alt="Facebook" /></a>
            <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="#"><img src={x} alt="X" /></a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <span className="small-title">Let’s Talk Growth</span>
          <h2>SEND A <span>MESSAGE</span></h2>

          <form onSubmit={handleSubmit} noValidate>
           <div className="grid">

  <div className="field">
    <input name="name" placeholder="Name*" />
    {errors.name && <small className="error">{errors.name}</small>}
  </div>

  <div className="field">
    <input name="email" type="email" placeholder="Email*" />
    {errors.email && <small className="error">{errors.email}</small>}
  </div>

  <div className="field">
    <input name="businessName" placeholder="Business Name*" />
    {errors.businessName && <small className="error">{errors.businessName}</small>}
  </div>

  <div className="field">
    <input name="mobile" type="tel" placeholder="Phone Number*" />
    {errors.mobile && <small className="error">{errors.mobile}</small>}
  </div>

</div>


            <select name="service">
              <option value="">Which service are you interested in?*</option>
              <option value="digital-market">Digital Marketing</option>
            </select>
            {errors.service && <small className='error'>{errors.service}</small>}

            <textarea name="message" placeholder="Message"></textarea>

            <ReCAPTCHA
              className="recaptcha"
              sitekey="6LcJUwwsAAAAAM_k2WUuXkIpG1wZfG4bIpDLIcRP"
              onChange={handleCaptcha}
            />
            {errors.captcha && <small>{errors.captcha}</small>}

            <button type="submit" className="talk">Let's Talk</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
