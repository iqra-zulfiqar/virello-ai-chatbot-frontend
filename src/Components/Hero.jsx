import { useState, useEffect } from "react";
import circle1Src from "../assets/top.avif";
import circle2Src from "../assets/bottom.avif";
import Chatbot from "./Chatbot";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;600&display=swap');

        @keyframes bobble {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(8px); }
        }

        .hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-circle-top {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%) translateY(-72%);
          width: 460px;
          height: 460px;
          border-radius: 50%;
          overflow: hidden;
          z-index: 1;
          opacity: 0;
          transition: opacity 1.2s ease 0.1s;
        }
        .hero-circle-top.visible { opacity: 1; }

        .hero-circle-bottom {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) translateY(72%);
          width: 540px;
          height: 540px;
          border-radius: 50%;
          overflow: hidden;
          z-index: 1;
          opacity: 0;
          transition: opacity 1.2s ease 0.2s;
        }
        .hero-circle-bottom.visible { opacity: 1; }

        .hero-circle-top img,
        .hero-circle-bottom img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-text {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 24px;
          max-width: 860px;
          width: 100%;
        }

        .hero-title {
          font-family: "DM Serif Display", Georgia, serif;
          font-size: clamp(48px, 8vw, 108px);
          font-weight: 400;
          color: #fff;
          line-height: 1.05;
          margin: 0 0 24px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s;
        }
        .hero-title.visible { opacity: 1; transform: translateY(0); }

        .hero-subtitle {
          font-family: "DM Sans", sans-serif;
          font-size: clamp(15px, 2.1vw, 21px);
          font-weight: 600;
          color: #fff;
          line-height: 1.5;
          max-width: 680px;
          margin: 0 auto 20px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.9s ease 0.5s, transform 0.9s ease 0.5s;
          padding: 0 8px;
        }
        .hero-subtitle.visible { opacity: 1; transform: translateY(0); }

        .hero-caption {
          font-family: "DM Sans", sans-serif;
          font-size: 15px;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 0.9s ease 0.7s, transform 0.9s ease 0.7s;
        }
        .hero-caption.visible { opacity: 1; transform: translateY(0); }

        .hero-arrow {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          opacity: 0;
          transition: opacity 1s ease 1.1s;
          animation: bobble 2s ease-in-out infinite;
        }
        .hero-arrow.visible { opacity: 1; }

        /* TABLET */
        @media (max-width: 768px) {
          .hero-circle-top {
            width: 360px;
            height: 360px;
            transform: translateX(-50%) translateY(-44%);
          }
          .hero-circle-bottom {
            width: 420px;
            height: 420px;
            transform: translateX(-50%) translateY(44%);
          }
        }

        /* MOBILE FIXED */
        @media (max-width: 768px) {
          .hero-section {
            min-height: auto;
            padding: 40px 0;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
          }

          .hero-circle-top,
          .hero-circle-bottom {
            position: relative;
            width: 100vw;
            overflow: hidden;
            border-radius: 0;
          }

          .hero-circle-top {
            height: 100px;
          }

          .hero-circle-bottom {
            height: 110px;
          }

          .hero-circle-top img {
            position: absolute;
            left: 50%;
            width: 260px;
            height: 260px;
            border-radius: 50%;
            transform: translateX(-50%) translateY(-55%);
          }

          .hero-circle-bottom img {
            position: absolute;
            left: 50%;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            transform: translateX(-50%) translateY(-40%);
          }

          .hero-text {
            padding: 0 20px;
            margin: 20px 0;
          }

          .hero-title {
            font-size: clamp(38px, 10vw, 56px);
            margin-bottom: 16px;
          }

          .hero-subtitle {
            font-size: clamp(13px, 3.8vw, 17px);
            margin-bottom: 12px;
          }

          .hero-caption {
            font-size: 12px;
          }

          .hero-arrow {
            display: none;
          }
        }

        /* VERY SMALL */
        @media (max-width: 360px) {
          .hero-circle-top { height: 80px; }
          .hero-circle-top img {
            width: 220px;
            height: 220px;
          }
          .hero-circle-bottom { height: 90px; }
          .hero-circle-bottom img {
            width: 240px;
            height: 240px;
          }
          .hero-title { font-size: 36px; }
        }
      `}</style>

      <section className="hero-section">

        <div className={`hero-circle-top ${mounted ? "visible" : ""}`}>
          <img src={circle1Src} alt="" />
        </div>

        <div className="hero-text">
          <h1 className={`hero-title ${mounted ? "visible" : ""}`}>
            Our <em>work.</em>
          </h1>
          <p className={`hero-subtitle ${mounted ? "visible" : ""}`}>
            Every project below started with the same problem: a company doing
            remarkable work that the world didn't fully understand yet.
          </p>
          <p className={`hero-caption ${mounted ? "visible" : ""}`}>
            Here's what happened when we closed the gap.
          </p>
        </div>

        <div className={`hero-circle-bottom ${mounted ? "visible" : ""}`}>
          <img src={circle2Src} alt="" />
        </div>

        <div className={`hero-arrow ${mounted ? "visible" : ""}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>

        <Chatbot />

      </section>
    </>
  );
}