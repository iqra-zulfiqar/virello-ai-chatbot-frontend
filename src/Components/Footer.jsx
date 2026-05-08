import { useEffect, useRef, useState } from "react";

const ArrowUpRight = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "6px" }}
  >
    <path
      d="M2 12L12 2M12 2H4M12 2V10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Moth = () => (
  <svg width="72" height="56" viewBox="0 0 52 40" fill="none">
    <ellipse cx="26" cy="20" rx="2.5" ry="8" fill="#c8f56a" opacity="0.9" />
    <ellipse cx="14" cy="17" rx="10" ry="6" fill="url(#wingL)" opacity="0.85" transform="rotate(-10 14 17)" />
    <ellipse cx="38" cy="17" rx="10" ry="6" fill="url(#wingR)" opacity="0.85" transform="rotate(10 38 17)" />
    <ellipse cx="14" cy="26" rx="7" ry="4" fill="url(#wingLB)" opacity="0.7" transform="rotate(10 14 26)" />
    <ellipse cx="38" cy="26" rx="7" ry="4" fill="url(#wingRB)" opacity="0.7" transform="rotate(-10 38 26)" />
    <line x1="26" y1="12" x2="20" y2="5" stroke="#c8f56a" strokeWidth="1" strokeLinecap="round" />
    <line x1="26" y1="12" x2="32" y2="5" stroke="#c8f56a" strokeWidth="1" strokeLinecap="round" />
    <defs>
      <linearGradient id="wingL" x1="4" y1="12" x2="24" y2="23">
        <stop stopColor="#c8f56a" />
        <stop offset="1" stopColor="#4dd9c0" />
      </linearGradient>
      <linearGradient id="wingR" x1="28" y1="12" x2="48" y2="23">
        <stop stopColor="#4dd9c0" />
        <stop offset="1" stopColor="#c8f56a" />
      </linearGradient>
      <linearGradient id="wingLB" x1="6" y1="22" x2="21" y2="30">
        <stop stopColor="#9be8d8" />
        <stop offset="1" stopColor="#c8f56a" />
      </linearGradient>
      <linearGradient id="wingRB" x1="31" y1="22" x2="46" y2="30">
        <stop stopColor="#c8f56a" />
        <stop offset="1" stopColor="#9be8d8" />
      </linearGradient>
    </defs>
  </svg>
);

const navLinks = {
  COMPANY: ["Work", "Services", "Pricing", "About"],
  LEGAL: ["Privacy Policy", "Terms & Conditions"],
  FOLLOW: ["Linkedin", "Instagram", "Youtube"],
};

export default function Footer() {
  const [hovered, setHovered] = useState(null);
  const headlineRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (headlineRef.current) observer.observe(headlineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');

        .vs-footer {
          background: #0c0c0c;
          color: #fff;
          font-family: 'Syne', sans-serif;
          padding: 60px 80px 0;
        }

        .vs-footer-top {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 32px;
          padding-bottom: 52px;
          border-bottom: 1px solid #1c1c1c;
        }

        .vs-contact-email {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 12px;
          text-decoration: none;
          color: #fff;
        }

        .vs-city { font-size: 13px; margin-bottom: 20px; }

        .vs-copy {
          font-size: 12px;
          opacity: 0.8;
          line-height: 1.6;
        }

        .vs-nav-label {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          opacity: 0.7;
          margin-bottom: 20px;
        }

        .vs-nav-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .vs-nav-link {
          color: #fff;
          text-decoration: none;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
        }

        .vs-nav-link:hover { color: #c8f56a; }

        /* CTA */
        .vs-footer-headline-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 80px 0 60px;
          gap: 20px;
        }

        .vs-headline {
          font-size: 80px;
          line-height: 1.1;
          letter-spacing: -1px;
          color: #b6f36b;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .vs-headline.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .vs-headline em {
          font-style: italic;
          font-family: Georgia, serif;
        }

        .vs-moth-wrap {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease 0.3s;
        }

        .vs-moth-wrap.visible {
          opacity: 1;
          transform: translateY(0);
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .vs-footer {
            padding: 50px 40px 0;
          }

          .vs-footer-top {
            grid-template-columns: 1fr 1fr 1fr;
          }

          .vs-headline {
            font-size: 60px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .vs-footer {
            padding: 40px 24px 0;
          }

          .vs-footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }

          .vs-footer-headline-row {
            flex-direction: column;
            align-items: flex-start;
            padding: 60px 0 40px;
          }

          .vs-headline {
            font-size: 42px;
          }

          /* ✅ FIXED BUTTERFLY POSITION */
          .vs-moth-wrap {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 20px;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px) {
          .vs-footer-top {
            grid-template-columns: 1fr;
          }

          .vs-headline {
            font-size: 34px;
            line-height: 1.2;
          }

          .vs-nav-link {
            font-size: 14px;
          }
        }

        /* VERY SMALL */
        @media (max-width: 360px) {
          .vs-headline {
            font-size: 30px;
          }

          .vs-footer {
            padding: 30px 18px 0;
          }
        }
      `}</style>

      <footer className="vs-footer">

        <div className="vs-footer-top">

          <div>
            <a href="mailto:info@Virello.Studio" className="vs-contact-email">
              info@Virello.Studio
            </a>
            <p className="vs-city">United Kingdom • Remote Studio</p>
            <p className="vs-copy">
              © Virello.Studio<br />
              Creative Development Studio<br />
              All rights reserved.
            </p>
          </div>

          {Object.entries(navLinks).map(([group, links]) => (
            <div key={group}>
              <p className="vs-nav-label">{group}</p>
              <ul className="vs-nav-list">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="vs-nav-link"
                      onMouseEnter={() => setHovered(link)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {link}
                      {group === "FOLLOW" && <ArrowUpRight />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="vs-footer-headline-row" ref={headlineRef}>
          <div>
            <div className={`vs-headline ${visible ? "visible" : ""}`}>
              Let’s build <em>brilliant</em>
            </div>
            <div className={`vs-headline ${visible ? "visible" : ""}`}>
              together.
            </div>
          </div>

          <div className={`vs-moth-wrap ${visible ? "visible" : ""}`}>
            <Moth />
          </div>
        </div>

      </footer>
    </>
  );
}