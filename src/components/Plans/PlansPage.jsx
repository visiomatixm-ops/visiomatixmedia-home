import { useState, useEffect } from "react";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Why from "./Why";
import Plans from "./Plans";
import Compare from "./Compare";
import Notes from "./Notes";
import Contact from "./Contact";
import HomePage9 from "../Home/HomePage9";
import "./plansPage.css";

export default function PlansPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUnlock = (e) => {
    e.preventDefault();
    if (password === "Visiomatix@1080") {
      setIsUnlocked(true);
      setError("");
    } else {
      setError("Invalid password. Please try again.");
    }
  };

  if (!isUnlocked) {
    return (
      <div className="password-popup-overlay">
        <form className="password-popup-card" onSubmit={handleUnlock}>
          <div className="password-popup-icon">🔒</div>
          <h3>Access Restricted</h3>
          <p>This page is password protected. Please enter the password to view our Pricing Plans.</p>
          <div className="input-group">
            <input
              type="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={error ? "input-error" : ""}
              autoFocus
            />
          </div>
          {error && <span className="error-text">{error}</span>}
          <button type="submit">Unlock Details</button>
        </form>
      </div>
    );
  }

  return (
    <div className="plans-page-root">
      <Hero />
      <Marquee />
      <Why />
      <Plans />
      <Compare />
      <Notes />
      <Contact />
      <HomePage9 />
    </div>
  );
}

