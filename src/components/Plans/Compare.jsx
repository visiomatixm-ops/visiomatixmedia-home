import { useEffect, useRef } from 'react';

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

const rows = [
  ['Posts/month', '12', '16', '20', '25', '30', '40'],
  ['Reels/month', '4', '6', '8', '10', '15', '20'],
  ['Meta Ads', 'da', 'da', 'Basic', 'ck', 'ck', 'ck'],
  ['Google Ads', 'da', 'da', 'da', 'da', 'Basic', 'ck'],
  ['SEO Support', 'da', 'da', 'da', 'da', 'Local', 'ck'],
  ['Lead Generation', 'da', 'da', 'ck', 'ck', 'ck', 'ck'],
  ['WhatsApp Marketing', 'da', 'da', 'Inquiry', 'da', 'ck', 'ck'],
  ['3D Product Visuals', 'Guidance', '1/mo', 'Concept', '1/mo', '2/mo', '4/mo'],
  ['CGI Ad Content', 'Guidance', '1 Concept', '1/mo', '1/mo', '1 Short/mo', '2/mo'],
  ['Motion Graphic Ads', '1/mo', '1/mo', 'ck', 'ck', '2/mo', 'Premium'],
  ['Influencer Marketing', 'Guidance', 'Guidance', 'Guidance', 'Shortlist', 'Campaign', 'Full Strategy'],
  ['Competitor Analysis', 'da', 'Basic', 'da', 'ck', 'da', 'ck'],
  ['Strategy Meetings', 'da', 'da', 'da', 'Weekly', 'Weekly', 'Weekly'],
  ['Landing Page Support', 'da', 'da', 'da', 'da', 'ck', 'ck'],
  ['Brand Audit', 'da', 'da', 'da', 'da', 'da', 'ck'],
];

function Cell({ val }) {
  if (val === 'ck') return <td className="ck">✓</td>;
  if (val === 'da') return <td className="da">—</td>;
  return <td>{val}</td>;
}

export default function Compare() {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const tblRef = useRef(null);
  useReveal(titleRef);
  useReveal(subRef);
  useReveal(tblRef);

  return (
    <section className="compare" id="compare">
      <div className="tag">Side by Side</div>
      <h2 className="sec-title rv" ref={titleRef}>All plans at a <em>glance</em></h2>
      <p className="sec-sub rv" ref={subRef} style={{transitionDelay:'.1s'}}>Choosing the best plan for your business is now easier than ever.</p>
      <div className="tbl-wrap rv" ref={tblRef} style={{transitionDelay:'.2s'}}>
        <table className="tbl">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Basic</th>
              <th>Starter</th>
              <th>Growth</th>
              <th className="hl">Premium</th>
              <th>Booster</th>
              <th style={{color:'var(--gold2)'}}>Elite 360°</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}>
                <td>{r[0]}</td>
                {r.slice(1).map((v, i) => <Cell key={i} val={v} />)}
              </tr>
            ))}
            <tr className="price-row">
              <td>Monthly Price</td>
              <td>₹15,000</td>
              <td>₹20,000</td>
              <td>₹30,000</td>
              <td className="hl-price">₹45,000</td>
              <td>₹65,000</td>
              <td className="gold-price">₹90,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
