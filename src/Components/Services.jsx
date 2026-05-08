import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const services = [
  { num: "01", title: "Brand Strategy", desc: "Positioning & messaging that cuts through the noise.", img: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&q=80", dir: "left", delay: 0 },
  { num: "02", title: "Visual Identity", desc: "Design systems built to scale everywhere.", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80", dir: "left", delay: 0.1 },
  { num: "03", title: "Web Design & Dev", desc: "Conversion-focused sites that feel alive.", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80", dir: "right", delay: 0.2 },
  { num: "04", title: "Content & Copy", desc: "Words that resonate — voice to narrative.", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80", dir: "right", delay: 0 },
  { num: "05", title: "Motion & 3D", desc: "Animations that stop the scroll instantly.", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80", dir: "left", delay: 0.1 },
  { num: "06", title: "Social Media", desc: "Strategies that grow audiences measurably.", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80", dir: "right", delay: 0.2 },
];

function ServiceCard({ s }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("srv-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`srv-card srv-from-${s.dir}`}
      style={{ transitionDelay: `${s.delay}s` }}
    >
      <img src={s.img} alt={s.title} loading="lazy" />
      <div className="srv-overlay" />
      <div className="srv-content">
        <span className="srv-num">{s.num}</span>
        <h3 className="srv-title">{s.title}</h3>
        <p className="srv-desc">{s.desc}</p>
        <span className="srv-arrow">↗</span>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <style>{`
        .srv-card {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          height: 290px;
          cursor: default;
          opacity: 0;
        }

        .srv-from-left { transform: translateX(-50px); }
        .srv-from-right { transform: translateX(50px); }

        .srv-card.srv-visible {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                      transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }

        .srv-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .srv-card:hover img { transform: scale(1.05); }

        .srv-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.18) 55%, transparent 100%);
        }

        .srv-content {
          position: absolute;
          inset: 0;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 26px 24px;
        }

        .srv-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 3px;
          color: #c8e87a;
          margin-bottom: 8px;
        }

        .srv-title {
          font-family: 'DM Serif Display', serif;
          font-size: 21px;
          color: #fff;
          font-weight: 400;
          margin-bottom: 8px;
        }

        .srv-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.72);
          line-height: 1.75;
        }

        .srv-arrow {
          margin-top: 14px;
          font-size: 16px;
          color: #c8e87a;
          display: inline-block;
          transition: transform 0.4s ease;
        }
        .srv-card:hover .srv-arrow { transform: translate(4px, -4px); }

        /* Services grid responsive */
        .srv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .srv-section {
          padding: 72px 48px;
        }

        @media (max-width: 900px) {
          .srv-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .srv-section {
            padding: 64px 32px;
          }
        }

        @media (max-width: 560px) {
          .srv-grid {
            grid-template-columns: 1fr;
          }
          .srv-section {
            padding: 56px 20px;
          }
          .srv-card {
            height: 260px;
          }
          .srv-from-left,
          .srv-from-right {
            transform: translateY(30px);
          }
          .srv-card.srv-visible {
            transform: translateY(0);
          }
        }
      `}</style>

      <section
        id="services"
        className="srv-section"
        style={{
          background: "#fdf6ee",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 1100, width: "100%" }}>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(11px, 2vw, 13px)",
              letterSpacing: 4,
              color: "#000000",
              fontWeight: "bold",
              textTransform: "uppercase",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            WHAT WE DO
          </motion.p>

          <h2
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 400,
              textAlign: "center",
              marginBottom: 48,
              color: "#000000",
            }}
          >
            Services built for <em style={{ color: "#000000" }}>impact.</em>
          </h2>

          <div className="srv-grid">
            {services.map((s) => (
              <ServiceCard key={s.num} s={s} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}