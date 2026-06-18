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

export default function Contact() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="cta-sec" id="contact">
      <div className="cta-inner rv-scale" ref={ref}>
        <div className="tag">Let's Work Together</div>
        <h2 className="sec-title">Ready to <em>grow your<br/>business?</em></h2>
        <p className="sec-sub">Contact us now for a free consultation. Let's find the best plan for your business.</p>

        <div className="contact-info">
          <a className="ci" href="tel:+919270271916">
            <div className="ci-icon">
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 5.93 5.93l1.1-1.1a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div className="ci-label">Call Us</div>
            <div className="ci-val">+91 92702 71916</div>
          </a>
          <a className="ci" href="mailto:info@visiomatix.in">
            <div className="ci-icon">
              <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div className="ci-label">Email</div>
            <div className="ci-val">info@visiomatix.in</div>
          </a>
          <a className="ci" href="https://maps.google.com" target="_blank" rel="noreferrer">
            <div className="ci-icon">
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className="ci-label">Address</div>
            <div className="ci-val">Nashik, Maharashtra 423101</div>
          </a>
        </div>

        {/* Social Media */}
        <div className="social-row">
          <a className="social-link" href="https://instagram.com/visiomatixmedia" target="_blank" title="Instagram" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="#fff" strokeWidth="2"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="#fff" strokeWidth="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </a>
          <a className="social-link" href="https://facebook.com/visiomatixmedia" target="_blank" title="Facebook" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="18" height="18"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a className="social-link" href="https://youtube.com/@visiomatixmedia" target="_blank" title="YouTube" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="18" height="18"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" fill="none" stroke="#fff" strokeWidth="2"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff" stroke="none"/></svg>
          </a>
          <a className="social-link" href="https://wa.me/919270271916?text=Hi%20Team%20Visiomatix!%0AI%E2%80%99m%20ready%20to%20scale%20my%20brand%20and%20explore%20your%20marketing%20solutions.%20Please%20recommend%20the%20most%20suitable%20plan%20and%20share%20the%20pricing%20and%20features.%20Looking%20forward%20to%20connecting!" target="_blank" title="WhatsApp" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="18" height="18"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a className="social-link" href="https://linkedin.com/company/visiomatix-media" target="_blank" title="LinkedIn" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="18" height="18"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="2" y="9" width="4" height="12" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="4" cy="4" r="2" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a className="social-link" href="https://x.com/visiomatixmedia" target="_blank" title="X (Twitter)" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="18" height="18"><path d="M4 4l16 16M20 4L4 20" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>
          </a>
        </div>

        <div className="cta-btns">
          <a href="tel:+919270271916" className="btn-white">📞 Call Now</a>
          <a href="https://wa.me/919270271916?text=Hi%20Team%20Visiomatix!%0AI%E2%80%99m%20ready%20to%20scale%20my%20brand%20and%20explore%20your%20marketing%20solutions.%20Please%20recommend%20the%20most%20suitable%20plan%20and%20share%20the%20pricing%20and%20features.%20Looking%20forward%20to%20connecting!" className="btn-outline-white">💬 WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
}
