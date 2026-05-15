// ============================================================
//  useScrollAnimation.js — Complete variant library
//  All variants used across Home + About pages
// ============================================================

export const EASE = [0.16, 1, 0.3, 1];

// ── DIRECTIONAL FADES ───────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
};

// ── SCALE ───────────────────────────────────────────────────
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.6, rotate: -3 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

// ── FLIP UP (3D card reveal) ─────────────────────────────────
export const flipUp = {
  hidden: { opacity: 0, y: 60, rotateX: 25, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.65, ease: EASE },
  },
};

// ── BOUNCE IN ───────────────────────────────────────────────
export const bounceIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
};

// ── DRAW LINE (scaleX from left) ────────────────────────────
export const drawLine = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { duration: 1.0, ease: EASE } },
};

// ── GLOW PULSE (repeating border glow) ──────────────────────
export const glowPulse = {
  pulse: {
    boxShadow: [
      "0 0 0px rgba(0,200,255,0)",
      "0 0 24px rgba(0,200,255,0.55)",
      "0 0 0px rgba(0,200,255,0)",
    ],
    transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
  },
};

// ── FLOAT ANIMATIONS (continuous y motion) ──────────────────
export const floatY = {
  float: {
    y: [0, -14, 0],
    transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
  },
};

export const floatYSlow = {
  float: {
    y: [0, -10, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

// ── STAGGER CONTAINERS ──────────────────────────────────────
// Normal stagger — 0.12s between children
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

// Slow stagger — 0.18s between children (for cards)
export const staggerSlow = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

// Fast stagger — 0.08s (for service cards on pagination change)
export const staggerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.0 },
  },
};

// ── STAGGER CHILD ITEMS ─────────────────────────────────────
export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

// ── CARD REVEAL (for grid cards) ────────────────────────────
export const cardReveal = {
  hidden: { opacity: 0, y: 60, scale: 0.88 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

// ── STAT REVEAL (for number stats) ──────────────────────────
export const statReveal = {
  hidden: { opacity: 0, y: 50, scale: 0.7 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

// ── VIEWPORT CONFIG ─────────────────────────────────────────
// once: false = animate on scroll-enter and scroll-back
// margin: "-80px" = fires slightly before element enters screen
export const viewport = { once: false, margin: "-80px" };

// ── ZOOM SLIDE (scale from large + fade in) ─────────────────
export const zoomSlide = {
  hidden: { opacity: 0, scale: 1.18 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.1, ease: EASE } },
};

// ── ROTATE FADE IN (for icons/badges) ───────────────────────
export const rotateFadeIn = {
  hidden: { opacity: 0, rotate: -15, scale: 0.7 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 18 },
  },
};

// ── WORD REVEAL VARIANTS ─────────────────────────────────────
export const wordContainerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const wordItemVariant = {
  hidden: { opacity: 0, y: 40, rotate: 3 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

// ── SLIDE UP CLIP (premium text reveal) ─────────────────────
export const clipReveal = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0, y: 30 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE },
  },
};

// ── COUNT UP REVEAL ─────────────────────────────────────────
export const countReveal = {
  hidden: { opacity: 0, scale: 0.4, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 180, damping: 14 },
  },
};

// /* ============================================================
//    Visiomatix  —  Master Animation Variants
//    All components on Home & About pages import from here.
//    ============================================================ */

// /* ── easing curves ── */
// export const EASE      = [0.16, 1, 0.3, 1];   // expo-out  (snappy landing)
// export const EASE_IN   = [0.4, 0, 1, 1];       // ease-in
// export const EASE_SIN  = [0.37, 0, 0.63, 1];   // sinusoidal

// /* ══════════════════════════════════════════════════════════
//    BASIC DIRECTIONAL REVEALS  (scroll-triggered)
//    ══════════════════════════════════════════════════════════ */
// export const fadeUp = {
//   hidden:  { opacity: 0, y: 80 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
// };

// export const fadeDown = {
//   hidden:  { opacity: 0, y: -60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
// };

// export const fadeLeft = {
//   hidden:  { opacity: 0, x: -100 },
//   visible: { opacity: 1, x: 0,  transition: { duration: 0.85, ease: EASE } },
// };

// export const fadeRight = {
//   hidden:  { opacity: 0, x: 100 },
//   visible: { opacity: 1, x: 0,  transition: { duration: 0.85, ease: EASE } },
// };

// export const scaleIn = {
//   hidden:  { opacity: 0, scale: 0.6, rotate: -3 },
//   visible: { opacity: 1, scale: 1,   rotate: 0,
//              transition: { duration: 0.9, ease: EASE } },
// };

// export const scaleInUp = {
//   hidden:  { opacity: 0, scale: 0.75, y: 40 },
//   visible: { opacity: 1, scale: 1,    y: 0,
//              transition: { duration: 0.8, ease: EASE } },
// };

// /* ══════════════════════════════════════════════════════════
//    STAGGER CONTAINERS
//    ══════════════════════════════════════════════════════════ */
// export const staggerContainer = {
//   hidden:  {},
//   visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
// };

// export const staggerSlow = {
//   hidden:  {},
//   visible: { transition: { staggerChildren: 0.22, delayChildren: 0.05 } },
// };

// export const staggerFast = {
//   hidden:  {},
//   visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
// };

// /* ══════════════════════════════════════════════════════════
//    CARD / STAT REVEALS
//    ══════════════════════════════════════════════════════════ */
// export const cardReveal = {
//   hidden:  { opacity: 0, y: 60, scale: 0.88 },
//   visible: { opacity: 1, y: 0,  scale: 1,
//              transition: { duration: 0.65, ease: EASE } },
// };

// export const statReveal = {
//   hidden:  { opacity: 0, y: 50, scale: 0.7 },
//   visible: { opacity: 1, y: 0,  scale: 1,
//              transition: { duration: 0.65, ease: EASE } },
// };

// /* ══════════════════════════════════════════════════════════
//    HERO ENTRANCE SEQUENCE  (page-load, not scroll)
//    Use animate="visible" without whileInView
//    ══════════════════════════════════════════════════════════ */
// export const heroEntrance = {
//   hidden:  { opacity: 0, y: 60, scale: 0.92 },
//   visible: {
//     opacity: 1, y: 0, scale: 1,
//     transition: { duration: 1, ease: EASE },
//   },
// };

// export const heroEntranceDelay = (delay = 0) => ({
//   hidden:  { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1, y: 0,
//     transition: { duration: 0.9, ease: EASE, delay },
//   },
// });

// /* ══════════════════════════════════════════════════════════
//    SLIDE-IN FROM BOTTOM WITH CLIP-PATH REVEAL
//    ══════════════════════════════════════════════════════════ */
// export const clipReveal = {
//   hidden:  { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
//   visible: {
//     clipPath: "inset(0% 0% 0% 0%)",
//     opacity: 1,
//     transition: { duration: 0.9, ease: EASE },
//   },
// };

// /* ══════════════════════════════════════════════════════════
//    FLIP-UP  (3D card-like)
//    ══════════════════════════════════════════════════════════ */
// export const flipUp = {
//   hidden:  { opacity: 0, rotateX: 45, y: 60, scale: 0.9 },
//   visible: {
//     opacity: 1, rotateX: 0, y: 0, scale: 1,
//     transition: { duration: 0.75, ease: EASE },
//   },
// };

// /* ══════════════════════════════════════════════════════════
//    BOUNCE SPRING  (icons / images)
//    ══════════════════════════════════════════════════════════ */
// export const bounceIn = {
//   hidden:  { opacity: 0, scale: 0.3, y: -40 },
//   visible: {
//     opacity: 1, scale: 1, y: 0,
//     transition: { type: "spring", stiffness: 260, damping: 18 },
//   },
// };

// /* ══════════════════════════════════════════════════════════
//    DRAW (SVG line reveal, also works on dividers via scaleX)
//    ══════════════════════════════════════════════════════════ */
// export const drawLine = {
//   hidden:  { scaleX: 0, opacity: 0, originX: 0 },
//   visible: {
//     scaleX: 1, opacity: 1,
//     transition: { duration: 1.1, ease: EASE },
//   },
// };

// /* ══════════════════════════════════════════════════════════
//    WORD-BY-WORD HEADING SPLIT HELPER
//    Usage: split a heading into words and map with wordReveal
//    ══════════════════════════════════════════════════════════ */
// export const wordReveal = {
//   hidden:  { opacity: 0, y: 40, rotate: 3 },
//   visible: {
//     opacity: 1, y: 0, rotate: 0,
//     transition: { duration: 0.6, ease: EASE },
//   },
// };

// /* ══════════════════════════════════════════════════════════
//    GLOW PULSE  (continuous, for CTA buttons / badges)
//    Use as animate prop: animate="pulse"
//    ══════════════════════════════════════════════════════════ */
// export const glowPulse = {
//   pulse: {
//     boxShadow: [
//       "0 0 0px rgba(0,200,255,0)",
//       "0 0 24px rgba(0,200,255,0.55)",
//       "0 0 0px rgba(0,200,255,0)",
//     ],
//     transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
//   },
// };

// /* ══════════════════════════════════════════════════════════
//    FLOAT  (continuous up-down, for hero images / icons)
//    ══════════════════════════════════════════════════════════ */
// export const floatY = {
//   float: {
//     y: [0, -14, 0],
//     transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
//   },
// };

// export const floatYSlow = {
//   float: {
//     y: [0, -9, 0],
//     transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
//   },
// };

// /* ══════════════════════════════════════════════════════════
//    ROTATE SPIN (continuous, for decorative icons)
//    ══════════════════════════════════════════════════════════ */
// export const rotateSpin = {
//   spin: {
//     rotate: 360,
//     transition: { duration: 12, repeat: Infinity, ease: "linear" },
//   },
// };

// /* ══════════════════════════════════════════════════════════
//    SHIMMER (text / border shimmer)
//    Apply backgroundPosition animation
//    ══════════════════════════════════════════════════════════ */
// export const shimmerVariant = {
//   hidden:  { opacity: 0, backgroundPosition: "200% center" },
//   visible: {
//     opacity: 1,
//     backgroundPosition: "0% center",
//     transition: { duration: 1.2, ease: EASE },
//   },
// };

// /* ══════════════════════════════════════════════════════════
//    STAGGER ITEM — used inside staggerContainer
//    ══════════════════════════════════════════════════════════ */
// export const staggerItem = {
//   hidden:  { opacity: 0, y: 35 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
// };

// /* ══════════════════════════════════════════════════════════
//    ZOOM-IN SLIDE
//    ══════════════════════════════════════════════════════════ */
// export const zoomSlide = {
//   hidden:  { opacity: 0, scale: 1.15 },
//   visible: {
//     opacity: 1, scale: 1,
//     transition: { duration: 1.1, ease: EASE },
//   },
// };

// /* ══════════════════════════════════════════════════════════
//    VIEWPORT  (shared config — animate every time, 80px margin)
//    ══════════════════════════════════════════════════════════ */
// export const viewport = { once: false, margin: "-80px" };

// /* viewport that re-plays each time (for counters etc.) */
// export const viewportRepeat = { once: false, margin: "-60px" };
