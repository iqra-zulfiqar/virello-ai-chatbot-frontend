import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { num: 150, suffix: "+", label: "Projects Launched", color: "#c8e87a" },
  { num: 20, prefix: "$", suffix: "M+", label: "Revenue Generated", color: "#a78bfa" },
  { num: 8, suffix: "", label: "Years of Craft", color: "#f5d000" },
  { num: 98, suffix: "%", label: "Client Retention", color: "#ff9e97" },
];

const pillars = [
  { icon: "◈", text: "Brand Strategy" },
  { icon: "◎", text: "Visual Identity" },
  { icon: "◇", text: "Web Design" },
  { icon: "◉", text: "Motion & 3D" },
  { icon: "◐", text: "Growth Systems" },
];

function CountUp({ target, prefix = "", suffix = "", color, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span style={{ color }}>
      {prefix}{count}{suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display:ital@0;1&display=swap');

        .about-stat-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          padding: 32px 24px 28px;
          text-align: center;
          cursor: default;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease;
          background: #141014;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .about-stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.35);
        }
        .about-stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, var(--glow-color) 0%, transparent 68%);
          opacity: 0.08;
          pointer-events: none;
          transition: opacity 0.3s;
        }
        .about-stat-card:hover::before { opacity: 0.15; }

        .marquee-wrap {
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
        }
        .marquee-track {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: marquee 22s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .about-bg-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .about-section {
            padding: 80px 32px !important;
          }
        }

        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .about-section {
            padding: 64px 20px !important;
          }
          .about-stat-card {
            padding: 24px 16px 20px;
          }
          .quote-block {
            padding: 28px 24px !important;
            border-radius: 18px !important;
          }
          .about-bg-orb {
            display: none;
          }
        }

        @media (max-width: 400px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>

      <section
        id="about"
        className="about-section"
        style={{
          background: "#fdf6ee",
          padding: "96px 48px",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background orbs */}
        <div className="about-bg-orb" style={{ width: 420, height: 420, background: "#c8e87a", opacity: 0.07, top: -120, right: -100 }} />
        <div className="about-bg-orb" style={{ width: 320, height: 320, background: "#a78bfa", opacity: 0.06, bottom: 0, left: -80 }} />

        {/* Label */}
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12, letterSpacing: 5, color: "#000",
            fontWeight: 600, textTransform: "uppercase", marginBottom: 20,
          }}
        >
          WHO WE ARE
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: "clamp(36px, 5vw, 68px)",
            color: "#000", fontWeight: 400,
            lineHeight: 1.05, margin: "0 0 8px", maxWidth: 720,
          }}
        >
          We turn{" "}
          <em style={{ fontStyle: "italic", position: "relative", display: "inline-block" }}>
            complexity
            <svg style={{ position: "absolute", bottom: -4, left: 0, width: "100%", height: 8 }} viewBox="0 0 200 8" preserveAspectRatio="none">
              <path d="M0,6 Q50,0 100,5 Q150,10 200,4" stroke="#c8e87a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            </svg>
          </em>{" "}
          into clarity.
        </motion.h2>

        {/* Body copy */}
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
          style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 16px)",
            color: "rgba(0,0,0,0.52)", lineHeight: 1.85,
            margin: "28px auto 12px", maxWidth: 560, padding: "0 8px",
          }}
        >
          Virello Studio is a digital agency obsessed with brand storytelling,
          design systems, and digital experiences that actually move the needle.
        </motion.p>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
          style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 16px)",
            color: "rgba(0,0,0,0.52)", lineHeight: 1.85,
            maxWidth: 560, marginBottom: 48, padding: "0 8px",
          }}
        >
          We partner with ambitious founders and growth-stage companies who know
          their work matters — they just need the world to see it.
        </motion.p>

        {/* Stat cards */}
        <div
          ref={statsRef}
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16, width: "100%", maxWidth: 960, marginBottom: 48,
          }}
        >
          {stats.map(({ num, prefix, suffix, label, color }, i) => (
            <motion.div
              key={label}
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }} custom={i * 0.12 + 1.5}
              className="about-stat-card"
              style={{ "--glow-color": color }}
            >
              <div style={{
                position: "absolute", top: 0, left: "20%", right: "20%", height: 2,
                background: color, borderRadius: "0 0 4px 4px", opacity: 0.7,
              }} />
              <div style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: "clamp(30px, 3.5vw, 48px)",
                fontWeight: 400, lineHeight: 1, marginBottom: 10,
              }}>
                <CountUp target={num} prefix={prefix} suffix={suffix} color={color} inView={statsInView} />
              </div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11, color: "rgba(255,255,255,0.42)",
                letterSpacing: 0.5, textTransform: "uppercase",
              }}>
                {label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee pills */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}
          style={{ width: "100%", maxWidth: 900 }}
        >
          <div className="marquee-wrap">
            <div className="marquee-track">
              {[...pillars, ...pillars].map(({ icon, text }, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "rgba(0,0,0,0.05)",
                    border: "1px solid rgba(0,0,0,0.09)",
                    borderRadius: 999, padding: "9px 20px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13, color: "rgba(0,0,0,0.6)",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ fontSize: 14, color: "#c8e87a" }}>{icon}</span>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quote block */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5}
          className="quote-block"
          style={{
            marginTop: 64, padding: "40px 48px",
            background: "#141014",
            borderRadius: 24, border: "1px solid rgba(255,255,255,0.07)",
            maxWidth: 760, width: "100%", position: "relative", overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 2,
            background: "linear-gradient(to right, transparent, #c8e87a, transparent)",
          }} />
          <p style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: "clamp(18px, 2.5vw, 30px)",
            color: "#f5f0ea", fontWeight: 400,
            lineHeight: 1.5, margin: 0, fontStyle: "italic",
          }}>
            "Great brands aren't built overnight — they're{" "}
            <span style={{ color: "#c8e87a" }}>engineered with intent</span>{" "}
            and grown with relentless focus."
          </p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11, color: "rgba(255,255,255,0.3)",
            letterSpacing: 3, textTransform: "uppercase",
            marginTop: 20, marginBottom: 0,
          }}>
            Virello Studio Founding Principle
          </p>
        </motion.div>
      </section>
    </>
  );
}