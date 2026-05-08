import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    period: "/project",
    desc: "For early-stage companies who need a strong foundation.",
    features: ["Brand audit & positioning", "Logo & core identity", "2-page website", "48hr turnaround on revisions"],
    accentColor: "#a78bfa",
    glowColor: "#a78bfa",
    featured: false,
  },
  {
    name: "Growth",
    price: "$6,500",
    period: "/project",
    desc: "For companies ready to scale their brand presence.",
    features: ["Full brand system", "5-page website", "Motion assets", "Social media templates", "3-month strategy sprint"],
    accentColor: "#c8e87a",
    glowColor: "#c8e87a",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Ongoing strategic and creative partnership.",
    features: ["Dedicated creative team", "Unlimited revisions", "Monthly strategy sessions", "Priority 24hr support", "Full digital suite"],
    accentColor: "#f5d000",
    glowColor: "#f5d000",
    featured: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Pricing() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display:ital@0;1&display=swap');

        .pricing-card {
          position: relative;
          border-radius: 22px;
          padding: 44px 36px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease;
          cursor: default;
        }
        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 80px rgba(0,0,0,0.3);
        }
        .pricing-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% -20%, var(--glow) 0%, transparent 65%);
          opacity: 0.08;
          pointer-events: none;
          transition: opacity 0.35s;
        }
        .pricing-card:hover::before { opacity: 0.16; }
        .pricing-card.featured::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 22px;
          padding: 1.5px;
          background: linear-gradient(160deg, var(--glow), transparent 60%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .check-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          transition: transform 0.2s;
        }
        .pricing-card:hover .check-dot { transform: scale(1.4); }

        .pricing-cta {
          margin-top: 36px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          border-radius: 12px;
          padding: 15px 0;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.2s;
          width: 100%;
          letter-spacing: 0.3px;
        }
        .pricing-cta:hover { opacity: 0.85; transform: scale(0.98); }

        .badge-popular {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 16px;
          align-self: flex-start;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          text-align: left;
        }

        .pricing-section {
          padding: 96px 48px;
        }

        @media (max-width: 960px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 520px;
            margin: 0 auto;
          }
          .pricing-section {
            padding: 80px 32px;
          }
          /* Disable lift on mobile to avoid layout shift */
          .pricing-card:hover {
            transform: none;
            box-shadow: none;
          }
        }

        @media (max-width: 600px) {
          .pricing-section {
            padding: 64px 20px;
          }
          .pricing-card {
            padding: 36px 28px;
          }
        }

        @media (max-width: 400px) {
          .pricing-section {
            padding: 56px 16px;
          }
          .pricing-card {
            padding: 28px 20px;
          }
        }
      `}</style>

      <section
        id="pricing"
        className="pricing-section"
        style={{
          background: "#fdf6ee",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background orb */}
        <div style={{
          position: "absolute", borderRadius: "50%",
          width: 500, height: 500,
          background: "#c8e87a", opacity: 0.04,
          top: "10%", left: "50%", transform: "translateX(-50%)",
          filter: "blur(100px)", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1100, width: "100%" }}>

          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }} custom={0}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12, letterSpacing: 5, color: "#000",
              fontWeight: 600, textTransform: "uppercase", marginBottom: 20,
            }}
          >
            TRANSPARENT
          </motion.p>

          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }} custom={1}
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: "clamp(32px, 4vw, 58px)",
              color: "#000", fontWeight: 400,
              marginBottom: 56,
              maxWidth: 600, marginLeft: "auto", marginRight: "auto",
              lineHeight: 1.08,
            }}
          >
            Simple, honest{" "}
            <em style={{ fontStyle: "italic", color: "#000" }}>pricing.</em>
          </motion.h2>

          <div className="pricing-grid">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i * 0.15 + 1}
                className={`pricing-card${p.featured ? " featured" : ""}`}
                style={{
                  "--glow": p.glowColor,
                  background: "rgba(0,0,0,0.05)",
                  border: "1px solid rgba(0,0,0,0.09)",
                }}
              >
                <div style={{
                  position: "absolute", top: 0, left: "15%", right: "15%", height: 2,
                  background: p.accentColor, borderRadius: "0 0 4px 4px", opacity: 0.75,
                }} />

                {p.featured && (
                  <span
                    className="badge-popular"
                    style={{
                      background: `${p.accentColor}22`,
                      color: "#4a7a00",
                      border: `1px solid ${p.accentColor}44`,
                    }}
                  >
                    Most Popular
                  </span>
                )}

                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11, letterSpacing: 3,
                  color: "rgba(0,0,0,0.45)",
                  textTransform: "uppercase",
                  marginBottom: p.featured ? 12 : 16,
                }}>
                  {p.name}
                </div>

                <div style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontSize: "clamp(40px, 5vw, 52px)",
                  fontWeight: 400, color: "#000", lineHeight: 1,
                }}>
                  {p.price}
                  {p.period && (
                    <span style={{ fontSize: 15, fontFamily: "'DM Sans', sans-serif", opacity: 0.5, marginLeft: 6 }}>
                      {p.period}
                    </span>
                  )}
                </div>

                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14, lineHeight: 1.75,
                  color: "rgba(0,0,0,0.5)",
                  margin: "16px 0 28px",
                }}>
                  {p.desc}
                </p>

                <div style={{
                  height: 1, marginBottom: 24,
                  background: p.featured
                    ? `linear-gradient(to right, ${p.accentColor}33, transparent)`
                    : "rgba(0,0,0,0.08)",
                }} />

                <ul style={{
                  listStyle: "none", padding: 0,
                  margin: "0 0 auto",
                  display: "flex", flexDirection: "column", gap: 14,
                }}>
                  {p.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14, color: "rgba(0,0,0,0.68)",
                        display: "flex", alignItems: "center", gap: 12,
                      }}
                    >
                      <span className="check-dot" style={{ background: p.accentColor }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className="pricing-cta"
                  style={{
                    background: "transparent",
                    color: "#000",
                    border: "1px solid rgba(0,0,0,0.18)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {p.name === "Enterprise" ? "Let's Talk →" : "Get Started →"}
                </button>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }} custom={4}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13, color: "rgba(0,0,0,0.38)",
              marginTop: 36, letterSpacing: 0.3,
            }}
          >
            All projects include a free discovery call. No lock-in contracts. Cancel anytime.
          </motion.p>
        </div>
      </section>
    </>
  );
}