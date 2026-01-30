import logo from "../../assets/images/Logo PNG 1.png";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const desktopDropdownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(e.target)
      ) {
        setDesktopServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo-wrapper">
            <NavLink to="/" onClick={closeMobileMenu}>
              <img src={logo} alt="Visiomatix" className="logo-image" />
            </NavLink>
            <span className="logo-text">Visiomatix Media</span>
          </div>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => {
              setMenuOpen(!menuOpen);
              setMobileServicesOpen(false);
            }}
          >
            <span />
            <span />
            <span />
          </div>

          {/* Desktop Nav */}
          <nav className="nav">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>

            <div className="nav-dropdown" ref={desktopDropdownRef}>
              <span
                className="nav-link dropdown-toggle"
                onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
              >
                Services ▾
              </span>

              <div className={`dropdown-menu ${desktopServicesOpen ? "open" : ""}`}>
                <NavLink to="/services/digital-marketing">Digital Marketing</NavLink>
                <NavLink to="/services/design-Creative-Services">Design & Creative Services</NavLink>
                <NavLink to="/services/web-app-development">Web App Development</NavLink>
                <NavLink to="/services/business-software-solutions">Business Software Solutions</NavLink>
                <NavLink to="/services/ecommerce-solutions">E-Commerce Solutions</NavLink>
                <NavLink to="/services/branding-strategy">Branding & Strategy</NavLink>
              </div>
            </div>

            <NavLink to="/blog" className="nav-link">Blog</NavLink>
            <NavLink to="/careers" className="nav-link">Careers</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </nav>
        </div>
      </header>

      <hr className="header-divider" />

      {/* Mobile Nav */}
      <div className={`mobile-nav-modal ${menuOpen ? "open" : ""}`}>
        <div className="mobile-nav-container">
          <NavLink to="/" className="nav-link" onClick={closeMobileMenu}>Home</NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMobileMenu}>About</NavLink>

          <div className="nav-dropdown">
            <span
              className="nav-link dropdown-toggle"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services ▾
            </span>

            {mobileServicesOpen && (
              <div className="dropdown-menu mobile">
                <NavLink to="/services/digital-marketing" onClick={closeMobileMenu}>Digital Marketing</NavLink>
                <NavLink to="/services/design-Creative-Services" onClick={closeMobileMenu}>Design & Creative Services</NavLink>
                <NavLink to="/services/web-app-development" onClick={closeMobileMenu}>Web App Development</NavLink>
                <NavLink to="/services/business-software-solutions" onClick={closeMobileMenu}>Business Software Solutions</NavLink>
                <NavLink to="/services/ecommerce-solutions" onClick={closeMobileMenu}>E-Commerce Solutions</NavLink>
                <NavLink to="/services/branding-strategy" onClick={closeMobileMenu}>Branding & Strategy</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/blog" className="nav-link" onClick={closeMobileMenu}>Blog</NavLink>
          <NavLink to="/careers" className="nav-link" onClick={closeMobileMenu}>Careers</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMobileMenu}>Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
