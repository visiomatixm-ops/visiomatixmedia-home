const items = [
  { icon: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, label: 'Social Media Management' },
  { icon: <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>, label: 'Meta & Google Ads' },
  { icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>, label: 'CGI & 3D Visuals' },
  { icon: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>, label: 'Influencer Marketing' },
  { icon: <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, label: 'SEO & Lead Generation' },
  { icon: <svg viewBox="0 0 24 24"><path d="M15 10l5 5-5 5"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/></svg>, label: 'Brand Strategy' },
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-section">
      <div className="marquee-track" id="marqueeTrack">
        {doubled.map((it, i) => (
          <span key={i} style={{display:'contents'}}>
            <div className="marquee-item">
              {it.icon}
              {it.label}
            </div>
            <div className="marquee-item"><span>✦</span></div>
          </span>
        ))}
      </div>
    </div>
  );
}
