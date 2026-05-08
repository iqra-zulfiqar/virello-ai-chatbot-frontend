import { motion } from "framer-motion";
import roboVideo from "../assets/roboVideo.webm";

const CoverNovaSpark = () => (
  <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
    <defs>
      <linearGradient id="ns-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0a0e1a" />
        <stop offset="100%" stopColor="#111827" />
      </linearGradient>
      <linearGradient id="ns-spark" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f5d000" />
        <stop offset="100%" stopColor="#ff9500" />
      </linearGradient>
    </defs>
    <rect width="800" height="420" fill="url(#ns-bg)" />
    {[80,160,240,320,400,480,560,640,720].map(x => (
      <line key={x} x1={x} y1="0" x2={x} y2="420" stroke="#ffffff08" strokeWidth="1" />
    ))}
    {[70,140,210,280,350].map(y => (
      <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="#ffffff08" strokeWidth="1" />
    ))}
    <circle cx="620" cy="210" r="200" fill="none" stroke="#f5d00018" strokeWidth="1.5" />
    <circle cx="620" cy="210" r="150" fill="none" stroke="#f5d00012" strokeWidth="1" />
    <circle cx="620" cy="210" r="100" fill="none" stroke="#f5d00020" strokeWidth="1" />
    <polygon points="590,80 540,230 580,230 530,350 660,190 618,190 670,80" fill="url(#ns-spark)" opacity="0.9" />
    <rect x="60" y="70" width="4" height="120" fill="#f5d000" />
    <text x="80" y="145" fontFamily="'Georgia', serif" fontSize="96" fontWeight="900" fill="#ffffff" letterSpacing="-4" opacity="0.92">NOVA</text>
    <text x="80" y="210" fontFamily="'Georgia', serif" fontSize="48" fontWeight="400" fill="#f5d000" letterSpacing="18">SPARK</text>
    <text x="80" y="260" fontFamily="'Courier New', monospace" fontSize="11" fill="#ffffff55" letterSpacing="3">BRAND STRATEGY · SERIES B</text>
    <rect x="0" y="390" width="800" height="30" fill="#f5d000" opacity="0.06" />
    <text x="60" y="409" fontFamily="'Courier New', monospace" fontSize="10" fill="#f5d00088" letterSpacing="4">2024 — IDENTITY SYSTEM</text>
    <text x="720" y="409" fontFamily="'Courier New', monospace" fontSize="10" fill="#f5d00055" letterSpacing="2">01</text>
  </svg>
);

const CoverVerdant = () => (
  <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
    <defs>
      <linearGradient id="vd-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1a2e1a" />
        <stop offset="100%" stopColor="#0f1f0f" />
      </linearGradient>
      <radialGradient id="vd-glow" cx="70%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#4a7c3f" stopOpacity="0.5" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="800" height="420" fill="url(#vd-bg)" />
    <rect width="800" height="420" fill="url(#vd-glow)" />
    <ellipse cx="650" cy="160" rx="160" ry="180" fill="#2d5a1b" opacity="0.5" transform="rotate(-20 650 160)" />
    <ellipse cx="680" cy="200" rx="100" ry="130" fill="#3a7a24" opacity="0.35" transform="rotate(10 680 200)" />
    <path d="M 500 420 Q 650 200 800 100" stroke="#5a9e3a" strokeWidth="1.5" fill="none" opacity="0.4" />
    <path d="M 480 420 Q 620 180 780 60" stroke="#5a9e3a" strokeWidth="1" fill="none" opacity="0.25" />
    <path d="M 460 420 Q 600 220 760 80" stroke="#5a9e3a" strokeWidth="1" fill="none" opacity="0.15" />
    {[[120,340],[145,360],[170,345],[132,375]].map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r="3" fill="#8fcc6a" opacity="0.6" />
    ))}
    {[[680,50],[700,65],[720,48]].map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r="2" fill="#8fcc6a" opacity="0.4" />
    ))}
    <text x="60" y="160" fontFamily="'Georgia', serif" fontSize="80" fontWeight="400" fill="#e8f0d8" letterSpacing="6" opacity="0.95">VERDANT</text>
    <text x="62" y="198" fontFamily="'Courier New', monospace" fontSize="12" fill="#8fcc6a" letterSpacing="8">COLLECTIVE</text>
    <rect x="60" y="218" width="320" height="1" fill="#8fcc6a" opacity="0.4" />
    <text x="60" y="250" fontFamily="'Courier New', monospace" fontSize="11" fill="#e8f0d888" letterSpacing="2">WEB · IDENTITY · STRATEGY</text>
    <text x="430" y="380" fontFamily="'Georgia', serif" fontSize="220" fontWeight="900" fill="#ffffff04" letterSpacing="-10">02</text>
    <text x="60" y="400" fontFamily="'Courier New', monospace" fontSize="10" fill="#8fcc6a66" letterSpacing="4">280% GROWTH · 2024</text>
  </svg>
);

const CoverOrbis = () => (
  <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
    <defs>
      <linearGradient id="ob-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1a0505" />
        <stop offset="100%" stopColor="#2a0a0a" />
      </linearGradient>
      <linearGradient id="ob-orb" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c0392b" />
        <stop offset="100%" stopColor="#7b1a14" />
      </linearGradient>
      <radialGradient id="ob-radial" cx="60%" cy="50%" r="40%">
        <stop offset="0%" stopColor="#c0392b" stopOpacity="0.3" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="800" height="420" fill="url(#ob-bg)" />
    <rect width="800" height="420" fill="url(#ob-radial)" />
    <circle cx="560" cy="210" r="190" fill="none" stroke="#c0392b" strokeWidth="1.5" opacity="0.25" />
    <circle cx="560" cy="210" r="140" fill="none" stroke="#c0392b" strokeWidth="1" opacity="0.15" />
    <circle cx="560" cy="20" r="8" fill="#c0392b" opacity="0.8" />
    <circle cx="750" cy="210" r="5" fill="#ff6b5e" opacity="0.6" />
    <circle cx="560" cy="210" r="90" fill="url(#ob-orb)" opacity="0.7" />
    <circle cx="560" cy="210" r="60" fill="#c0392b" opacity="0.5" />
    <line x1="560" y1="100" x2="560" y2="320" stroke="#ff6b5e" strokeWidth="1" opacity="0.3" />
    <line x1="450" y1="210" x2="670" y2="210" stroke="#ff6b5e" strokeWidth="1" opacity="0.3" />
    <text x="60" y="140" fontFamily="'Georgia', serif" fontSize="86" fontWeight="900" fill="#f5e8e8" opacity="0.94" letterSpacing="-3">ORBIS</text>
    <text x="60" y="188" fontFamily="'Georgia', serif" fontSize="38" fontWeight="400" fill="#c0392b" letterSpacing="12">HEALTH</text>
    <rect x="60" y="208" width="260" height="1" fill="#c0392b" opacity="0.5" />
    <text x="60" y="235" fontFamily="'Courier New', monospace" fontSize="10" fill="#f5e8e866" letterSpacing="3">MOTION · 3D · VISUAL IDENTITY</text>
    <rect x="60" y="360" width="200" height="30" rx="4" fill="#c0392b" opacity="0.15" />
    <text x="72" y="380" fontFamily="'Courier New', monospace" fontSize="10" fill="#ff9e97" letterSpacing="2">FORBES 30 UNDER 30 · 2024</text>
    <text x="440" y="400" fontFamily="'Georgia', serif" fontSize="180" fontWeight="900" fill="#ffffff03" letterSpacing="-8">03</text>
  </svg>
);

const CoverLuminary = () => (
  <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
    <defs>
      <linearGradient id="lm-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#04080f" />
        <stop offset="100%" stopColor="#080f1f" />
      </linearGradient>
      <linearGradient id="lm-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c9a84c" />
        <stop offset="100%" stopColor="#f0d080" />
      </linearGradient>
      <radialGradient id="lm-glow" cx="75%" cy="30%" r="45%">
        <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.18" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="800" height="420" fill="url(#lm-bg)" />
    <rect width="800" height="420" fill="url(#lm-glow)" />
    {[0,1,2,3,4].map(row =>
      [0,1,2,3,4,5,6].map(col => (
        <rect key={`${row}-${col}`} x={col*110+50} y={row*84+10} width="8" height="8" fill="#c9a84c" opacity="0.06" transform={`rotate(45 ${col*110+54} ${row*84+14})`} />
      ))
    )}
    <polyline points="60,350 160,310 260,270 360,210 460,160 560,120 660,90 760,60" stroke="url(#lm-gold)" strokeWidth="2" fill="none" opacity="0.35" />
    <polyline points="60,370 160,345 260,315 360,275 460,240 560,205 660,175 760,145" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.15" />
    <polygon points="680,80 688,100 710,100 693,113 700,135 680,122 660,135 667,113 650,100 672,100" fill="url(#lm-gold)" opacity="0.75" />
    <text x="55" y="280" fontFamily="'Georgia', serif" fontSize="240" fontWeight="900" fill="#c9a84c" opacity="0.05" letterSpacing="-10">L</text>
    <text x="60" y="155" fontFamily="'Georgia', serif" fontSize="72" fontWeight="400" fill="#f0e8cc" letterSpacing="2" opacity="0.96">LUMINARY</text>
    <text x="62" y="195" fontFamily="'Courier New', monospace" fontSize="16" fill="url(#lm-gold)" letterSpacing="14">FINANCE</text>
    <rect x="60" y="215" width="380" height="1" fill="url(#lm-gold)" opacity="0.4" />
    <text x="60" y="244" fontFamily="'Courier New', monospace" fontSize="11" fill="#f0e8cc55" letterSpacing="3">SOCIAL · CONTENT · GROWTH</text>
    <text x="60" y="290" fontFamily="'Georgia', serif" fontSize="42" fontWeight="700" fill="url(#lm-gold)" opacity="0.9">120K</text>
    <text x="160" y="290" fontFamily="'Courier New', monospace" fontSize="10" fill="#f0e8cc44" letterSpacing="2">
      <tspan x="164" dy="-16">FOLLOWERS</tspan>
      <tspan x="164" dy="18">GAINED</tspan>
    </text>
    <text x="60" y="405" fontFamily="'Courier New', monospace" fontSize="10" fill="#c9a84c44" letterSpacing="4">2K → 120K · SOCIAL GROWTH · 04</text>
  </svg>
);

const projects = [
  { tag: "Brand Strategy", title: "NovaSpark Technologies", result: "Series B raised after rebrand.", color: "#ede4d8", Cover: CoverNovaSpark },
  { tag: "Web & Identity", title: "Verdant Collective", result: "280% increase in inbound leads.", color: "#e4edda", Cover: CoverVerdant },
  { tag: "Motion & 3D", title: "Orbis Health", result: "Featured in Forbes 30 Under 30.", color: "#eddad8", Cover: CoverOrbis },
  { tag: "Social Media", title: "Luminary Finance", result: "Grew from 2K to 120K followers.", color: "#dad8ed", Cover: CoverLuminary },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Portfolio() {
  return (
    <>
      <style>{`
        .port-section {
          padding: 72px 48px;
        }
        .port-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          text-align: left;
        }
        .port-card-inner {
          padding: 24px 36px 48px;
        }
        .port-featured-inner {
          padding: 28px 40px 52px;
        }
        .port-card-title {
          font-size: 28px;
        }
        .port-featured-title {
          font-size: 32px;
        }

        @media (max-width: 900px) {
          .port-section {
            padding: 64px 32px;
          }
        }

        @media (max-width: 700px) {
          .port-grid {
            grid-template-columns: 1fr;
          }
          .port-section {
            padding: 56px 20px;
          }
          .port-card-inner {
            padding: 20px 24px 44px;
          }
          .port-featured-inner {
            padding: 20px 24px 44px;
          }
          .port-card-title {
            font-size: 24px;
          }
          .port-featured-title {
            font-size: 26px;
          }
        }

        @media (max-width: 480px) {
          .port-section {
            padding: 48px 16px;
          }
        }
      `}</style>

      <section
        id="portfolio"
        className="port-section"
        style={{
          background: "#fdf6ee",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 1100, width: "100%" }}>

          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }} custom={0}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(11px, 2vw, 13px)",
              letterSpacing: 4, color: "#000000",
              fontWeight: "bold", textTransform: "uppercase", marginBottom: 20,
            }}
          >
            CASE STUDIES
          </motion.p>

          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }} custom={1}
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: "clamp(32px, 4vw, 56px)",
              color: "#000000", fontWeight: 400,
              marginBottom: 48,
              maxWidth: 700, marginLeft: "auto", marginRight: "auto",
            }}
          >
            This could be <em style={{ color: "#000000" }}>you.</em>
          </motion.h2>

          {/* AppForge — Full-width featured */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }} custom={1.5}
            whileHover="hover"
            style={{
              marginBottom: 20, borderRadius: 20, overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.07)", background: "#1a0a2e",
              position: "relative", cursor: "pointer", display: "flex", flexDirection: "column",
            }}
          >
            <motion.div
              variants={{ hover: { scale: 1.03 } }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: "100%", aspectRatio: "16 / 7", position: "relative", overflow: "hidden" }}
            >
              <svg viewBox="0 0 1100 480" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
                <defs>
                  <linearGradient id="af-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5b21b6" />
                    <stop offset="100%" stopColor="#4c1d95" />
                  </linearGradient>
                  <linearGradient id="af-screen1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0f0a1a" />
                    <stop offset="100%" stopColor="#1a1030" />
                  </linearGradient>
                  <linearGradient id="af-screen2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f8f5ff" />
                    <stop offset="100%" stopColor="#ede8ff" />
                  </linearGradient>
                  <linearGradient id="af-screen3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0f0a1a" />
                    <stop offset="100%" stopColor="#1a1030" />
                  </linearGradient>
                  <linearGradient id="af-screen4" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f8f5ff" />
                    <stop offset="100%" stopColor="#ede8ff" />
                  </linearGradient>
                  <linearGradient id="af-accent" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a78bfa" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                  <filter id="af-shadow">
                    <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#00000060"/>
                  </filter>
                </defs>
                <rect width="1100" height="480" fill="url(#af-bg)" />
                {Array.from({length:22}).map((_,col) =>
                  Array.from({length:10}).map((_,row) => (
                    <circle key={`${col}-${row}`} cx={col*52+6} cy={row*52+6} r="1.2" fill="#ffffff" opacity="0.07" />
                  ))
                )}
                <text x="60" y="160" fontFamily="'Georgia', serif" fontSize="54" fontWeight="900" fill="#ffffff" opacity="0.97" letterSpacing="-1">Build smarter.</text>
                <text x="60" y="222" fontFamily="'Georgia', serif" fontSize="54" fontWeight="900" fill="#a78bfa" opacity="0.97" letterSpacing="-1">Ship faster.</text>
                <text x="62" y="272" fontFamily="'Courier New', monospace" fontSize="12" fill="#ffffff88" letterSpacing="3">APP DEVELOPMENT · iOS & ANDROID</text>
                <rect x="60" y="295" width="170" height="30" rx="15" fill="#a78bfa" opacity="0.18" />
                <text x="82" y="315" fontFamily="'Courier New', monospace" fontSize="11" fill="#c4b5fd" letterSpacing="2">500K+ DOWNLOADS</text>
                <g transform="translate(360, 55)" filter="url(#af-shadow)">
                  <rect x="0" y="0" width="200" height="360" rx="24" ry="24" fill="#1a1030" />
                  <rect x="3" y="3" width="194" height="354" rx="22" ry="22" fill="url(#af-screen1)" />
                  <rect x="70" y="10" width="60" height="10" rx="5" fill="#0a0614" />
                  <circle cx="30" cy="15" r="3" fill="#a78bfa" opacity="0.5" />
                  <rect x="150" y="12" width="30" height="6" rx="3" fill="#ffffff22" />
                  <rect x="14" y="32" width="172" height="36" rx="8" fill="#2d1f52" />
                  <circle cx="32" cy="50" r="8" fill="#7c3aed" opacity="0.8"/>
                  <rect x="46" y="44" width="80" height="6" rx="3" fill="#ffffff44" />
                  <rect x="46" y="54" width="50" height="4" rx="2" fill="#ffffff22" />
                  <rect x="14" y="78" width="172" height="75" rx="12" fill="#2d1f52" />
                  <rect x="26" y="90" width="90" height="7" rx="3" fill="#a78bfa" opacity="0.9"/>
                  <rect x="26" y="103" width="60" height="5" rx="2" fill="#ffffff44"/>
                  <rect x="26" y="113" width="75" height="5" rx="2" fill="#ffffff22"/>
                  <rect x="120" y="118" width="52" height="22" rx="11" fill="#7c3aed" opacity="0.9"/>
                  <rect x="130" y="126" width="32" height="6" rx="3" fill="#ffffff" opacity="0.9"/>
                  <rect x="14" y="162" width="172" height="75" rx="12" fill="#2d1f52" />
                  <rect x="26" y="174" width="70" height="7" rx="3" fill="#a78bfa" opacity="0.9"/>
                  <rect x="26" y="187" width="55" height="5" rx="2" fill="#ffffff44"/>
                  <rect x="26" y="197" width="80" height="5" rx="2" fill="#ffffff22"/>
                  <rect x="120" y="202" width="52" height="22" rx="11" fill="#7c3aed" opacity="0.9"/>
                  <rect x="130" y="210" width="32" height="6" rx="3" fill="#ffffff" opacity="0.9"/>
                  <rect x="14" y="246" width="172" height="60" rx="12" fill="#2d1f52" />
                  <rect x="26" y="258" width="85" height="7" rx="3" fill="#a78bfa" opacity="0.9"/>
                  <rect x="26" y="271" width="60" height="5" rx="2" fill="#ffffff44"/>
                  <rect x="120" y="272" width="52" height="22" rx="11" fill="#7c3aed" opacity="0.9"/>
                  <rect x="130" y="280" width="32" height="6" rx="3" fill="#ffffff" opacity="0.9"/>
                  <rect x="0" y="318" width="200" height="42" fill="#0f0a1a" />
                  <circle cx="40" cy="339" r="8" fill="#7c3aed" opacity="0.8"/>
                  <rect x="75" y="334" width="16" height="10" rx="3" fill="#ffffff22"/>
                  <rect x="106" y="334" width="16" height="10" rx="3" fill="#ffffff22"/>
                  <rect x="137" y="334" width="16" height="10" rx="3" fill="#ffffff22"/>
                  <rect x="75" y="352" width="50" height="4" rx="2" fill="#ffffff22"/>
                </g>
                <g transform="translate(580, 30)" filter="url(#af-shadow)">
                  <rect x="0" y="0" width="200" height="380" rx="24" ry="24" fill="#e0d9f7" />
                  <rect x="3" y="3" width="194" height="374" rx="22" ry="22" fill="url(#af-screen2)" />
                  <rect x="70" y="10" width="60" height="10" rx="5" fill="#d0c8f0" />
                  <rect x="150" y="12" width="30" height="6" rx="3" fill="#00000015" />
                  <rect x="16" y="34" width="168" height="100" rx="12" fill="#ede8ff" />
                  <text x="26" y="68" fontFamily="'Georgia', serif" fontSize="22" fontWeight="900" fill="#4c1d95">YOUR APP.</text>
                  <text x="26" y="92" fontFamily="'Georgia', serif" fontSize="22" fontWeight="900" fill="#7c3aed">LAUNCHED.</text>
                  <rect x="26" y="100" width="80" height="5" rx="2" fill="#7c3aed" opacity="0.3"/>
                  <rect x="14" y="144" width="80" height="60" rx="10" fill="#ede8ff" />
                  <text x="24" y="168" fontFamily="'Georgia', serif" fontSize="18" fontWeight="900" fill="#5b21b6">98%</text>
                  <rect x="24" y="174" width="50" height="4" rx="2" fill="#7c3aed" opacity="0.3"/>
                  <rect x="24" y="182" width="35" height="4" rx="2" fill="#00000020"/>
                  <rect x="104" y="144" width="80" height="60" rx="10" fill="#ede8ff" />
                  <text x="114" y="168" fontFamily="'Georgia', serif" fontSize="18" fontWeight="900" fill="#5b21b6">4.9★</text>
                  <rect x="114" y="174" width="50" height="4" rx="2" fill="#7c3aed" opacity="0.3"/>
                  <rect x="114" y="182" width="35" height="4" rx="2" fill="#00000020"/>
                  {[215,255,295].map((y,i) => (
                    <g key={i}>
                      <rect x="14" y={y} width="172" height="32" rx="8" fill="#ede8ff" />
                      <circle cx="30" cy={y+16} r="7" fill="#7c3aed" opacity="0.7"/>
                      <rect x="44" y={y+10} width={80-i*10} height="5" rx="2" fill="#4c1d95" opacity="0.5"/>
                      <rect x="44" y={y+19} width={55-i*5} height="4" rx="2" fill="#00000018"/>
                    </g>
                  ))}
                  <rect x="14" y="340" width="172" height="26" rx="13" fill="url(#af-accent)" />
                  <rect x="60" y="350" width="80" height="6" rx="3" fill="#ffffff" opacity="0.9"/>
                  <rect x="75" y="360" width="50" height="4" rx="2" fill="#ffffff55"/>
                </g>
                <g transform="translate(800, 65)" filter="url(#af-shadow)">
                  <rect x="0" y="0" width="200" height="350" rx="24" ry="24" fill="#1a1030" />
                  <rect x="3" y="3" width="194" height="344" rx="22" ry="22" fill="url(#af-screen3)" />
                  <rect x="70" y="10" width="60" height="10" rx="5" fill="#0a0614" />
                  <text x="100" y="95" fontFamily="'Georgia', serif" fontSize="26" fontWeight="900" fill="#ffffff" textAnchor="middle">YOU'RE</text>
                  <text x="100" y="128" fontFamily="'Georgia', serif" fontSize="26" fontWeight="900" fill="#a78bfa" textAnchor="middle">LIVE! 🚀</text>
                  <rect x="50" y="140" width="100" height="4" rx="2" fill="#a78bfa" opacity="0.4"/>
                  <rect x="30" y="155" width="140" height="5" rx="2" fill="#ffffff18"/>
                  <rect x="40" y="165" width="120" height="5" rx="2" fill="#ffffff12"/>
                  <rect x="14" y="188" width="80" height="70" rx="12" fill="#2d1f52" />
                  <text x="54" y="220" fontFamily="'Georgia', serif" fontSize="20" fontWeight="900" fill="#a78bfa" textAnchor="middle">500K</text>
                  <rect x="24" y="228" width="60" height="4" rx="2" fill="#ffffff22"/>
                  <rect x="29" y="238" width="50" height="4" rx="2" fill="#ffffff14"/>
                  <rect x="106" y="188" width="80" height="70" rx="12" fill="#2d1f52" />
                  <text x="146" y="220" fontFamily="'Georgia', serif" fontSize="20" fontWeight="900" fill="#a78bfa" textAnchor="middle">4.9★</text>
                  <rect x="116" y="228" width="60" height="4" rx="2" fill="#ffffff22"/>
                  <rect x="121" y="238" width="50" height="4" rx="2" fill="#ffffff14"/>
                  <rect x="14" y="272" width="172" height="42" rx="21" fill="#7c3aed" />
                  <rect x="50" y="285" width="100" height="7" rx="3" fill="#ffffff" opacity="0.9"/>
                  <rect x="65" y="296" width="70" height="5" rx="2" fill="#ffffff55"/>
                  <rect x="75" y="334" width="50" height="4" rx="2" fill="#ffffff18"/>
                </g>
                <g transform="translate(1010, 45)" filter="url(#af-shadow)">
                  <rect x="0" y="0" width="200" height="370" rx="24" ry="24" fill="#e0d9f7" />
                  <rect x="3" y="3" width="194" height="364" rx="22" ry="22" fill="url(#af-screen4)" />
                  <rect x="70" y="10" width="60" height="10" rx="5" fill="#d0c8f0" />
                  <rect x="14" y="32" width="172" height="44" rx="10" fill="#ede8ff" />
                  <rect x="24" y="42" width="60" height="7" rx="3" fill="#4c1d95" opacity="0.7"/>
                  <rect x="24" y="54" width="40" height="5" rx="2" fill="#7c3aed" opacity="0.4"/>
                  <circle cx="170" cy="54" r="14" fill="#7c3aed" opacity="0.15"/>
                  <rect x="163" y="51" width="14" height="6" rx="3" fill="#7c3aed" opacity="0.6"/>
                  {[90,134,178,222,266].map((y,i) => (
                    <g key={i}>
                      <rect x="14" y={y} width="172" height="36" rx="8" fill="#ede8ff" />
                      <circle cx="30" cy={y+18} r="8" fill="#7c3aed" opacity={0.5+i*0.08}/>
                      <rect x="46" y={y+11} width={70-i*5} height="6" rx="3" fill="#4c1d95" opacity="0.5"/>
                      <rect x="46" y={y+21} width={50-i*3} height="4" rx="2" fill="#00000018"/>
                      <rect x="160" y={y+13} width="14" height="10" rx="3" fill="#7c3aed" opacity="0.3"/>
                    </g>
                  ))}
                  <rect x="14" y="318" width="172" height="30" rx="15" fill="url(#af-accent)" />
                  <rect x="55" y="330" width="90" height="6" rx="3" fill="#ffffff" opacity="0.9"/>
                </g>
              </svg>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 70, background: "linear-gradient(to bottom, transparent, #1a0a2e)", pointerEvents: "none" }} />
            </motion.div>

            <div className="port-featured-inner" style={{ textAlign: "left" }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#a78bfa", letterSpacing: 3, textTransform: "uppercase" }}>App Development</span>
              <h3 className="port-featured-title" style={{ fontFamily: '"DM Serif Display", serif', color: "#f0ebff", fontWeight: 400, margin: "12px 0 10px" }}>AppForge Studio</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.42)", margin: 0, maxWidth: 520 }}>500K+ downloads in 90 days — App Store Editor's Choice on launch week.</p>
            </div>

            <motion.div variants={{ hover: { scale: 1.12 } }} transition={{ duration: 0.2 }} style={{ position: "absolute", right: 24, bottom: 24, width: 36, height: 36, borderRadius: "50%", background: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
            </motion.div>
          </motion.div>

          {/* Project grid */}
          <div className="port-grid">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i * 0.12 + 1}
                whileHover="hover"
                style={{ background: p.color, border: "1px solid rgba(0,0,0,0.07)", borderRadius: 20, cursor: "pointer", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}
              >
                <div style={{ width: "100%", height: 210, overflow: "hidden", position: "relative", borderRadius: "20px 20px 0 0" }}>
                  <motion.div variants={{ hover: { scale: 1.03 } }} transition={{ duration: 0.55, ease: [0.22,1,0.36,1] }} style={{ width: "100%", height: "100%" }}>
                    <p.Cover />
                  </motion.div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 64, background: `linear-gradient(to bottom, transparent, ${p.color})`, pointerEvents: "none" }} />
                </div>
                <div className="port-card-inner">
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#5a7a00", letterSpacing: 3, textTransform: "uppercase" }}>{p.tag}</span>
                  <h3 className="port-card-title" style={{ fontFamily: '"DM Serif Display", serif', color: "#1a1a1a", fontWeight: 400, margin: "12px 0 10px" }}>{p.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(0,0,0,0.48)", margin: 0 }}>{p.result}</p>
                </div>
                <motion.div variants={{ hover: { scale: 1.12 } }} transition={{ duration: 0.2 }} style={{ position: "absolute", right: 24, bottom: 24, width: 36, height: 36, borderRadius: "50%", background: "#5a7a00", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* RoboVision AI */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }} custom={5}
            whileHover="hover"
            style={{ marginTop: 20, borderRadius: 20, overflow: "hidden", border: "1px solid rgba(0,0,0,0.07)", background: "#e8e4f0", position: "relative", cursor: "pointer", display: "flex", flexDirection: "column" }}
          >
            <div style={{ width: "100%", aspectRatio: "16 / 7", position: "relative", overflow: "hidden" }}>
              <motion.video
                src={roboVideo}
                autoPlay loop muted playsInline
                variants={{ hover: { scale: 1.03 } }}
                transition={{ duration: 0.55, ease: [0.22,1,0.36,1] }}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to bottom, transparent, #e8e4f0)", pointerEvents: "none" }} />
            </div>
            <div className="port-card-inner" style={{ textAlign: "left" }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#5a7a00", letterSpacing: 3, textTransform: "uppercase" }}>AI · Motion & Robotics</span>
              <h3 className="port-featured-title" style={{ fontFamily: '"DM Serif Display", serif', color: "#1a1a1a", fontWeight: 400, margin: "12px 0 10px" }}>RoboVision AI</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(0,0,0,0.48)", margin: 0, maxWidth: 520 }}>Launched to a sold-out waitlist — 40,000+ sign-ups in 72 hours.</p>
            </div>
            <motion.div variants={{ hover: { scale: 1.12 } }} transition={{ duration: 0.2 }} style={{ position: "absolute", right: 24, bottom: 24, width: 36, height: 36, borderRadius: "50%", background: "#5a7a00", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </>
  );
}