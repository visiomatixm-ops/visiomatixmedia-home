import { useEffect, useRef, useState } from 'react';

function Counter({ value, suffix = '', prefix = '', duration = 1800 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer;
    let isIntersecting = false;
    let delayTimeout;

    const runAnimation = () => {
      if (!isIntersecting) return;
      let current = 0;
      const step = value / 60;
      clearInterval(timer);
      timer = setInterval(() => {
        current = Math.min(current + step, value);
        setVal(Math.floor(current));
        if (current >= value) {
          clearInterval(timer);
          delayTimeout = setTimeout(() => {
            setVal(0);
            runAnimation();
          }, 5000);
        }
      }, 20);
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        isIntersecting = e.isIntersecting;
        if (e.isIntersecting) {
          runAnimation();
        } else {
          clearInterval(timer);
          clearTimeout(delayTimeout);
          setVal(0);
        }
      });
    }, { threshold: 0.1 });

    io.observe(el);
    return () => {
      io.disconnect();
      clearInterval(timer);
      clearTimeout(delayTimeout);
    };
  }, [value]);

  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* Particles */}
      <div className="particle" style={{left:'15%',width:'4px',height:'4px',background:'rgba(58,123,213,0.6)',animationDuration:'12s',animationDelay:'0s'}}></div>
      <div className="particle" style={{left:'32%',width:'3px',height:'3px',background:'rgba(12,186,253,0.5)',animationDuration:'9s',animationDelay:'2s'}}></div>
      <div className="particle" style={{left:'55%',width:'5px',height:'5px',background:'rgba(255,255,255,0.2)',animationDuration:'14s',animationDelay:'1s'}}></div>
      <div className="particle" style={{left:'72%',width:'3px',height:'3px',background:'rgba(58,123,213,0.4)',animationDuration:'10s',animationDelay:'3s'}}></div>
      <div className="particle" style={{left:'88%',width:'4px',height:'4px',background:'rgba(12,186,253,0.4)',animationDuration:'11s',animationDelay:'0.5s'}}></div>
      <div className="particle" style={{left:'42%',width:'3px',height:'3px',background:'rgba(255,255,255,0.15)',animationDuration:'13s',animationDelay:'4s'}}></div>
      <div className="particle" style={{left:'65%',width:'4px',height:'4px',background:'rgba(91,154,248,0.5)',animationDuration:'8s',animationDelay:'1.5s'}}></div>

      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
      <div className="shape shape-4"></div>
      <div className="shape shape-5"></div>
      <div className="shape shape-6"></div>

      <div className="hero-inner">
        <div className="hero-pill">
          <div className="pill-dot"></div>
          Digital Marketing Agency — Nashik
        </div>
        <h1>
          Grow Your Brand.<br/>
          <em>Generate Real Leads.</em><br/>
          <span className="outline">Dominate Online.</span>
        </h1>
        <p className="hero-desc">
          Visiomatix Media delivers end-to-end digital marketing — social content, Meta &amp; Google Ads, CGI/3D visuals, influencer campaigns, SEO, and lead funnels. Everything in one place.
        </p>
        <div className="hero-actions">
          <a href="#plans" className="btn-white">Explore Plans</a>
          <a href="#why" className="btn-outline-white">Why Visiomatix?</a>
        </div>
        <div className="hero-metrics">
          <div className="metric">
            <div className="metric-num"><Counter value={6} suffix="+" /></div>
            <div className="metric-lbl">Growth Plans</div>
          </div>
          <div className="metric">
            <div className="metric-num"><Counter value={360} suffix="°" /></div>
            <div className="metric-lbl">Coverage</div>
          </div>
          <div className="metric">
            <div className="metric-num"><Counter value={15} prefix="₹" suffix="K" /></div>
            <div className="metric-lbl">Starting From</div>
          </div>
          <div className="metric">
            <div className="metric-num"><Counter value={10} suffix="x" /></div>
            <div className="metric-lbl">Lead Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
}
