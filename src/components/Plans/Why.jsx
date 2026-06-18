import { useEffect, useRef, useState } from 'react';

const whyCards = [
  {
    cls: 'wc rv',
    icon: <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    title: 'Brand Visibility',
    desc: 'Regular posts, reels and creatives keep your brand visible 24/7 on Instagram, Facebook and Google.'
  },
  {
    cls: 'wc rv d1',
    icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    title: 'Targeted Reach',
    desc: 'Meta Ads help you reach your ideal customers based on exact age, location and interests.'
  },
  {
    cls: 'wc rv d2',
    icon: <svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    title: 'Lead Generation',
    desc: 'WhatsApp inquiries, lead forms and landing pages bring you direct paying customers.'
  },
  {
    cls: 'wc rv d3',
    icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>,
    title: 'Beat Competitors',
    desc: '3D/CGI visuals, strong strategy and premium creatives help you outrun your competitors.'
  },
  {
    cls: 'wc rv',
    icon: <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: 'High ROI',
    desc: 'Better returns than traditional marketing — track, optimize and scale with data-driven growth.'
  },
  {
    cls: 'wc rv d1',
    icon: <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    title: 'Customer Trust',
    desc: 'Consistent branding, reviews and social proof build genuine customer trust organically.'
  },
];

const barGroups = [
  { digital: 45, trad: 18, label: 'M1' },
  { digital: 70, trad: 22, label: 'M2' },
  { digital: 95, trad: 26, label: 'M3' },
  { digital: 120, trad: 28, label: 'M4' },
  { digital: 148, trad: 30, label: 'M5' },
];

function useReveal(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('go'); });
    }, { threshold: 0.08 });
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
}

function CountUp({ target }) {
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
      const step = target / 60;
      clearInterval(timer);
      timer = setInterval(() => {
        current = Math.min(current + step, target);
        setVal(Math.floor(current));
        if (current >= target) {
          clearInterval(timer);
          // Wait 5 seconds, then reset and restart the animation
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
    }, { threshold: 0.5 });
    
    io.observe(el);
    return () => {
      io.disconnect();
      clearInterval(timer);
      clearTimeout(delayTimeout);
    };
  }, [target]);

  return <div className="rs-num" ref={ref}>{val}%</div>;
}

function BarChart() {
  const ref = useRef(null);
  const [heights, setHeights] = useState(barGroups.map(() => ({ d: 0, t: 0 })));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          barGroups.forEach((g, i) => {
            setTimeout(() => {
              setHeights((prev) => {
                const next = [...prev];
                next[i] = { d: g.digital, t: g.trad };
                return next;
              });
            }, i * 80);
          });
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="bars-row" id="barsRow" ref={ref}>
      {barGroups.map((g, i) => (
        <div className="bc-group" key={g.label}>
          <div className="bc-bars">
            <div className="bc-bar digital" style={{ height: heights[i].d + 'px', transition: 'height 1.4s cubic-bezier(.16,1,.3,1)' }}></div>
            <div className="bc-bar trad" style={{ height: heights[i].t + 'px', transition: 'height 1.4s cubic-bezier(.16,1,.3,1)' }}></div>
          </div>
          <span className="bc-lbl">{g.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Why() {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const roiRef = useRef(null);
  useReveal(titleRef);
  useReveal(subRef);
  useReveal(roiRef);

  return (
    <section className="why" id="why">
      <div className="tag">Why Digital Marketing</div>
      <h2 className="sec-title rv-l" ref={titleRef}>If you're not online,<br/><em>you're not in the competition</em></h2>
      <p className="sec-sub rv-l" ref={subRef} style={{transitionDelay:'.1s'}}>In today's digital-first era, a strong online presence is what grows your business — from local shop to national brand.</p>

      <div className="why-wrap">
        <div className="why-cards">
          {whyCards.map((c) => (
            <WhyCard key={c.title} {...c} />
          ))}
        </div>

        <div className="roi-box rv-r" ref={roiRef}>
          <div className="roi-title">
            <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            Digital vs Traditional ROI — 5 Month Comparison
          </div>
          <div className="bar-chart">
            <BarChart />
            <div className="chart-legend">
              <div className="leg"><div className="leg-dot" style={{background:'#5fa8ff'}}></div>Digital Marketing</div>
              <div className="leg"><div className="leg-dot" style={{background:'rgba(12,186,253,0.8)'}}></div>Traditional</div>
            </div>
          </div>
          <div className="roi-stats">
            <div className="rs">
              <CountUp target={94} />
              <div className="rs-lbl">% Businesses see better engagement online</div>
            </div>
            <div className="rs">
              <div className="rs-num">10x</div>
              <div className="rs-lbl">More leads vs no digital presence</div>
            </div>
            <div className="rs">
              <div className="rs-num">₹1→₹8</div>
              <div className="rs-lbl">Average digital ad return</div>
            </div>
            <div className="rs">
              <CountUp target={72} />
              <div className="rs-lbl">% Buyers research online before purchase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyCard({ cls, icon, title, desc }) {
  const ref = useRef(null);
  useReveal(ref);
  return (
    <div className={cls} ref={ref}>
      <div className="wc-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}
