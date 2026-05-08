import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <style>{`
        .contact-section {
          position: relative;
          min-height: 440px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
        }

        .contact-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          text-align: center;
          width: 100%;
          max-width: 760px;
        }

        .contact-title {
          font-family: "DM Serif Display", serif;
          font-size: clamp(36px, 6vw, 68px);
          color: #1a1a1a;
          font-weight: 400;
          line-height: 1.1;
          margin: 0;
          padding: 0 8px;
        }

        .contact-btn {
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: none;
          border-radius: 12px;
          padding: 16px 40px;
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          letter-spacing: 0.1px;
          box-shadow: 0 2px 20px rgba(0,0,0,0.08);
          white-space: nowrap;
        }

        @media (max-width: 480px) {
          .contact-section {
            min-height: 380px;
            padding: 64px 20px;
          }
          .contact-btn {
            padding: 14px 32px;
            font-size: 15px;
          }
        }

        @media (max-width: 360px) {
          .contact-section {
            padding: 56px 16px;
          }
        }
      `}</style>

      <section id="contact" className="contact-section">
        {/* Gradient layers */}
        <div style={{ position: "absolute", inset: 0, background: "#f7e8d0" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 60% at -5% 95%, #3d1fa3 0%, transparent 55%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 80% at 5% 45%, #e040a0 0%, transparent 52%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 70% at 18% 55%, rgba(255,160,200,0.7) 0%, transparent 55%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 75% at 50% 35%, #ffc832 0%, transparent 55%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 70% at 88% 5%, #ff3800 0%, transparent 52%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 45% 55% at 80% 40%, rgba(255,130,50,0.75) 0%, transparent 50%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 45% 50% at 100% 100%, rgba(255,245,230,0.95) 0%, transparent 50%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 38% 50% at 32% 38%, rgba(255,255,255,0.72) 0%, transparent 58%)" }} />

        <div className="contact-content">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="contact-title"
          >
            Ready to <em style={{ fontStyle: "italic" }}>launch?</em>
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="contact-btn"
          >
            Contact us <span style={{ fontSize: 18 }}>↗</span>
          </motion.button>
        </div>
      </section>
    </>
  );
}