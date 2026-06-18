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

const notes = [
  { num: '01', cls: 'nc rv', title: 'Ad Budget is Separate', text: 'Meta Ads and Google Ads budget is not included in the package. It will be charged separately based on your campaign requirements and goals.' },
  { num: '02', cls: 'nc rv d1', title: 'Additional Services', text: 'Influencer fees, models, shoot, location, voiceover, advanced 3D animation, domain, hosting, and paid tools — these will all be charged separately.' },
  { num: '03', cls: 'nc rv d2', title: 'Minimum 3 Months', text: 'A minimum 3-month commitment is recommended for best results. Digital marketing is an ongoing process — results compound over time.' },
  { num: '04', cls: 'nc rv d3', title: 'Results May Vary', text: 'Results depend on business category, location, competition, offer quality and ad budget. We guarantee the best strategy — not specific numbers.' },
];

function NoteCard({ note }) {
  const ref = useRef(null);
  useReveal(ref);
  return (
    <div className={note.cls} ref={ref}>
      <div className="nc-num">{note.num}</div>
      <div>
        <h4>{note.title}</h4>
        <p>{note.text}</p>
      </div>
    </div>
  );
}

export default function Notes() {
  return (
    <section className="notes" id="notes">
      <div className="tag">Important Notes</div>
      <h2 className="sec-title">A few important <em>things to know</em></h2>
      <p className="sec-sub">Transparency is our policy. No hidden charges, no false promises.</p>
      <div className="notes-grid">
        {notes.map((n) => <NoteCard key={n.num} note={n} />)}
      </div>
    </section>
  );
}
