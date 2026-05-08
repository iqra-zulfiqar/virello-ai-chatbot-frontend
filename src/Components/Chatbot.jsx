import { useState, useRef, useEffect, useCallback } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const BOT_NAME = "Virello Studio";
const BOT_SUB  = "We're here to help";

const SESSION_ID = `sess_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

const css = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display:ital@0;1&display=swap');

:root {
  --cream: #fdf6ee;
  --navy: #1a2535;
  --navy-mid: #243347;
  --olive: #5a7a00;
  --border: #e8e0d4;
  --text: #1a1a1a;
  --muted: rgba(0,0,0,0.45);
  --white: #ffffff;
  --shadow: 0 24px 64px rgba(26,37,53,0.16), 0 4px 16px rgba(26,37,53,0.08);
  --radius: 20px;
}

/* ── FAB ── */
.cb-fab-fixed {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 99999;
}

.cb-fab {
  width: 60px;
  height: 60px;
  border-radius: 18px;
  background: var(--navy);
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(26,37,53,0.28), 0 2px 8px rgba(26,37,53,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
}

.cb-fab:hover {
  transform: translateY(-3px) scale(1.04);
}

.cb-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: var(--olive);
  color: white;
  font-size: 10px;
  font-weight: 700;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  z-index: 1;
}

/* ── PANEL ── */
.cb-panel {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 99998;
  width: 370px;
  height: 70vh;
  max-height: 580px;
  min-height: 460px;
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--border);
  font-family: 'DM Sans', sans-serif;
}

/* ── HEADER ── */
.cb-header {
  background: var(--cream);
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border);
}

.cb-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cb-avatar {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--navy);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cb-title {
  font-family: 'DM Serif Display', serif;
  font-size: 17px;
}

.cb-sub {
  color: var(--muted);
  font-size: 12px;
}

/* ── MESSAGES ── */
.cb-msgs {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cb-row {
  display: flex;
  gap: 8px;
}

.cb-row.user {
  justify-content: flex-end;
}

.cb-bubble-wrap {
  max-width: 75%;
}

.cb-bubble {
  padding: 10px 14px;
  border-radius: 16px;
  font-size: 13.5px;
  line-height: 1.6;
}

.cb-bubble.user {
  background: var(--navy);
  color: white;
}

.cb-bubble.bot {
  background: var(--cream);
  border: 1px solid var(--border);
}

.cb-time {
  font-size: 10px;
  color: var(--muted);
  margin-top: 4px;
}

.cb-input-row {
  display: flex;
  gap: 8px;
  padding: 12px;
  border-top: 1px solid var(--border);
  background: var(--cream);
}

.cb-input {
  flex: 1;
  padding: 11px 14px;
  border-radius: 12px;
  border: 1px solid var(--border);
  outline: none;
}

.cb-send {
  background: var(--navy);
  color: white;
  border: none;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;

const ts = () =>
  new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

const uid = () => Math.random().toString(36).slice(2);

const INITIAL_MSG = {
  id: uid(),
  role: "bot",
  text: "Hello! 👋 How can I help you today?",
  time: ts(),
};

function renderMarkdown(text) {
  return text.replace(/\n/g, "<br/>");
}

/* ✅ SINGLE UNIFIED BOT ICON */
const BotAvatarIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="8" width="18" height="12" rx="3" />
    <path d="M9 8V6a3 3 0 016 0v2" />
    <circle cx="9" cy="14" r="1.2" fill="white" stroke="none" />
    <circle cx="15" cy="14" r="1.2" fill="white" stroke="none" />
  </svg>
);

const SendIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

/* ✅ FAB now uses SAME bot icon system */
const FabIcon = ({ size = 26 }) => <BotAvatarIcon size={size} />;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MSG]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const buildHistory = useCallback(
    () =>
      messages.map((m) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.text,
      })),
    [messages]
  );

  const send = async () => {
    if (!input.trim()) return;

    const userMsg = {
      id: uid(),
      role: "user",
      text: input,
      time: ts(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...buildHistory(), { role: "user", content: input }],
          sessionId: SESSION_ID,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          role: "bot",
          text: data.reply || "No response",
          time: ts(),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          role: "bot",
          text: "Error connecting to server.",
          time: ts(),
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      <style>{css}</style>

      {open && (
        <div className="cb-panel">
          <div className="cb-header">
            <div className="cb-header-left">
              <div className="cb-avatar">
                <BotAvatarIcon size={20} />
              </div>

              <div>
                <div className="cb-title">{BOT_NAME}</div>
                <div className="cb-sub">{BOT_SUB}</div>
              </div>
            </div>

            <button className="cb-close" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div className="cb-msgs">
            {messages.map((m) => (
              <div key={m.id} className={`cb-row ${m.role}`}>
                <div className="cb-bubble-wrap">
                  <div
                    className={`cb-bubble ${m.role}`}
                    dangerouslySetInnerHTML={{
                      __html:
                        m.role === "bot"
                          ? renderMarkdown(m.text)
                          : m.text,
                    }}
                  />
                  <div className="cb-time">{m.time}</div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="cb-row bot">
                <div className="cb-bubble bot">Typing...</div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="cb-input-row">
            <input
              className="cb-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask us anything..."
            />

            <button className="cb-send" onClick={send}>
              <SendIcon />
            </button>
          </div>
        </div>
      )}

      {!open && (
        <div className="cb-fab-fixed">
          <button className="cb-fab" onClick={() => setOpen(true)}>
            <FabIcon size={26} />
          </button>
        </div>
      )}
    </>
  );
}