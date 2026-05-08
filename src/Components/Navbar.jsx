import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    const timer = setTimeout(() => setVisible(true), 500);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const links = ["Home", "About", "Services", "Portfolio", "Pricing", "Contact"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #fff;
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 6px;
          display: block;
          transition: color 0.2s ease, transform 0.25s ease, opacity 0.25s ease;
          opacity: 0;
          transform: translateY(-6px);
          white-space: nowrap;
        }
        .nav-link.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .nav-link:hover { color: #c8f135; }
        .nav-link.active { color: #c8f135; }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .hamburger:hover { background: rgba(255,255,255,0.08); }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 82px;
          left: 16px;
          right: 16px;
          z-index: 99;
          background: rgba(14, 14, 14, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 16px 8px;
          flex-direction: column;
          gap: 4px;
          transform: translateY(-12px);
          opacity: 0;
          pointer-events: none;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), opacity 0.25s ease;
        }
        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }
        .mobile-nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          padding: 12px 20px;
          border-radius: 10px;
          display: block;
          transition: background 0.2s, color 0.2s;
        }
        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          background: rgba(200,241,53,0.1);
          color: #c8f135;
        }

        @media (max-width: 768px) {
          .desktop-links { display: none !important; }
          .hamburger { display: flex; }
          .mobile-menu { display: flex; }
        }
      `}</style>

      <nav
        className="nav-wrapper"
        style={{
          position: "fixed",
          top: "10px",
          left: "30px",
          right: "30px",
          zIndex: 100,
          padding: "0 32px",
          height: 62,
          background: scrolled
            ? "linear-gradient(90deg, rgba(20,20,20,0.92), rgba(40,40,40,0.85))"
            : "linear-gradient(90deg, rgba(20,20,20,0.65), rgba(40,40,40,0.55))",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 16,
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: 24,
            color: "#fff",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          Virello
          <span style={{ color: "#c8f135", fontStyle: "italic" }}>.</span>
          <span
            style={{
              fontSize: 13,
              marginLeft: 4,
              color: "#fff",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: 1,
            }}
          >
            Studio
          </span>
        </div>

        {/* Desktop Links */}
        <ul
          className="desktop-links"
          style={{
            display: "flex",
            gap: 4,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className={`nav-link ${visible ? "visible" : ""} ${
                  active === link ? "active" : ""
                }`}
                style={{ transitionDelay: `${i * 0.06 + 0.5}s` }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`mobile-nav-link ${
              active === link ? "active" : ""
            }`}
            onClick={() => {
              setActive(link);
              setMenuOpen(false);
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
}