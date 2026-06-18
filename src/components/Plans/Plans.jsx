import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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

const plans = [
  {
    cat: 'starter', cls: 'pc rv', num: 'Plan 01', name: 'Basic',
    tagline: 'Perfect entry point for new businesses',
    price: '15K', best: 'Startups, local shops, new brands',
    feats: [
      '12 Social Media Posts/month','4 Reels/month','Caption Writing + Hashtags',
      'Instagram/Facebook Optimization','Monthly Content Calendar','Festival + Special Day Creatives',
      '1 Product Promo Creative/month','1 Motion Graphic Post/month','3D/CGI Ad Guidance','Basic Monthly Report'
    ],
    benefit: 'Your brand stays active online, builds trust, and improves customer engagement through regular posting.',
    cta: 'Get Started →'
  },
  {
    cat: 'starter', cls: 'pc rv d1', num: 'Plan 02', name: 'Starter',
    tagline: 'Established presence + first ad experiments',
    price: '20K', best: 'Growing businesses, service brands',
    feats: [
      '16 Social Media Posts/month','6 Reels/month','Caption Writing + Hashtags',
      'Instagram/Facebook/Google Profile','Monthly Content Calendar','Festival + Special Day Creatives',
      '2 Product Promo Creatives/month','1 Motion Graphic Post/month','1 Basic 3D Product Visual/month',
      '1 CGI Concept/month','Basic Competitor Analysis','Basic Monthly Report'
    ],
    benefit: 'Stronger online presence with premium 3D/CGI visuals that make your brand look professional and attract more customers.',
    cta: 'Get Started →'
  },
  {
    cat: 'growth', cls: 'pc rv d2', num: 'Plan 03', name: 'Growth',
    tagline: 'Ads + content + lead generation combo',
    price: '30K', best: 'E-commerce, product brands, scaling businesses',
    feats: [
      '20 Social Media Posts/month','8 Reels/month','Basic Meta Ads Management','Lead Generation Setup',
      'WhatsApp Inquiry Integration','1 CGI Product Ad/month','3D Product Visual Concept',
      'Motion Graphic Ads','Influencer Marketing Guidance','Monthly Performance Report'
    ],
    benefit: 'Real leads coming in through Meta Ads, combined with CGI visuals that make your product irresistible to buyers.',
    cta: 'Get Started →'
  },
  {
    cat: 'premium', cls: 'pc star rv', num: 'Plan 04', name: 'Premium',
    badge: '⭐ Most Popular',
    tagline: 'Full-stack marketing with premium CGI',
    price: '45K', best: 'Brands serious about digital dominance',
    feats: [
      '25 Social Media Posts/month','10 Reels/month','Meta Ads Management','Lead Generation Funnel',
      '1 Basic 3D Product Visual/month','1 CGI Product Ad/month','Influencer Shortlist + Strategy',
      'Motion Graphic Ads','Competitor Analysis','Weekly Strategy Meeting','Detailed Monthly Report'
    ],
    benefit: 'Complete digital marketing + CGI + Ads + leads in one powerful plan with dedicated weekly strategy support.',
    cta: 'Get Premium Access →'
  },
  {
    cat: 'premium', cls: 'pc rv d1', num: 'Plan 05', name: 'Booster',
    tagline: 'Aggressive growth with full-funnel marketing',
    price: '65K', best: 'Competitive markets, multi-platform brands',
    feats: [
      '30 Social Media Posts/month','15 Reels/month','Meta Ads + Google Ads','Local SEO Support',
      'Landing Page Strategy','Lead Generation Funnel','WhatsApp Campaign Integration',
      '2 Basic 3D Product Visuals/month','1 Short CGI Ad/month','2 Motion Graphic Ads/month',
      'Influencer Campaign Strategy','Weekly Strategy Meeting','Advanced Monthly Report'
    ],
    benefit: 'Dominate across all platforms — Meta, Google, SEO, WhatsApp, CGI, Influencers. Complete growth engine.',
    cta: 'Get Started →'
  },
  {
    cat: 'premium', cls: 'pc gold-plan rv d2', num: 'Plan 06', name: 'Elite 360°',
    badge: '👑 Elite', gold: true,
    tagline: 'Complete digital transformation solution',
    price: '90K', best: 'Complete 360° digital presence',
    feats: [
      '40 Social Media Posts/month','20 Reels/month','Meta Ads + Google Ads Management','SEO Support',
      'Landing Page Strategy','Lead Generation Funnel','Email/WhatsApp Campaign Strategy',
      'Brand Audit + Competitor Research','Weekly Strategy Meeting','4 Basic 3D Product Visuals/month',
      '2 CGI Product Ads/month','Complete Influencer Marketing Strategy','Product Advertisement Storyboard',
      'Premium Motion Graphic Ads','Brand Campaign + 3D/CGI Launch Plan','Advanced Monthly Report'
    ],
    benefit: 'Complete 360° plan — branding, content, ads, SEO, leads, CGI, 3D product ads and influencer marketing all in one plan.',
    cta: 'Get Elite Access →'
  },
];

function PlanCard({ plan, visible }) {
  const ref = useRef(null);
  useReveal(ref);
  const goldStyle = plan.gold ? { color: 'var(--gold)' } : undefined;

  return (
    <div className={plan.cls} ref={ref} data-cat={plan.cat} style={{ display: visible ? 'flex' : 'none' }}>
      {plan.badge && <div className="pc-badge">{plan.badge}</div>}
      <div className="pc-num" style={goldStyle}>{plan.num}</div>
      <div className="pc-name">{plan.name}</div>
      <div className="pc-tagline">{plan.tagline}</div>
      <div className="pc-price">
        <span className="pc-cur" style={goldStyle}>₹</span>
        <span className="pc-amt">{plan.price}</span>
        <span className="pc-mo">/month</span>
      </div>
      <div className="pc-best">Best for: <strong>{plan.best}</strong></div>
      <div className="divider"></div>
      <div className="pc-feat-head">What's Included</div>
      <ul className="feats">
        {plan.feats.map((f) => (
          <li key={f}>
            <span className="fi" style={plan.gold ? { background: 'rgba(245,166,35,0.12)', color: 'var(--gold)' } : undefined}>✓</span>
            {f}
          </li>
        ))}
      </ul>
      <div className="divider"></div>
      <div className="benefit-box" style={plan.gold ? { background: 'rgba(245,166,35,0.06)', borderColor: 'rgba(245,166,35,0.2)' } : undefined}>
        <div className="bt" style={goldStyle}>Client Benefit</div>
        <p>{plan.benefit}</p>
      </div>
      <Link to="/contact" className="pc-cta">{plan.cta}</Link>
    </div>
  );
}

export default function Plans() {
  const [filter, setFilter] = useState('all');
  const filters = ['all', 'starter', 'growth', 'premium'];
  const labels = { all: 'All Plans', starter: 'Starter', growth: 'Growth', premium: 'Premium' };

  return (
    <section className="plans" id="plans">
      <div className="plans-header">
        <div>
          <div className="tag">Pricing Plans</div>
          <h2 className="sec-title">Choose the right plan<br/><em>for your goals</em></h2>
          <p className="sec-sub">From startup to enterprise — a plan for every stage.</p>
        </div>
        <div className="plan-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={'pf' + (filter === f ? ' on' : '')}
              onClick={() => setFilter(f)}
            >
              {labels[f]}
            </button>
          ))}
        </div>
      </div>

      <div className="plans-grid" id="plansGrid">
        {plans.map((p) => (
          <PlanCard key={`${p.num}-${filter}`} plan={p} visible={filter === 'all' || p.cat === filter} />
        ))}
      </div>
    </section>
  );
}
