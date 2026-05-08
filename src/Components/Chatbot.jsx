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
.cb-fab::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%);
  border-radius: inherit;
}
.cb-fab:hover {
  transform: translateY(-3px) scale(1.04);
  box-shadow: 0 14px 40px rgba(26,37,53,0.32), 0 4px 12px rgba(26,37,53,0.14);
}
.cb-fab:active { transform: scale(0.96); }

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
  animation: cb-slide-up 0.35s cubic-bezier(0.22,1,0.36,1);
  font-family: 'DM Sans', sans-serif;
}

@keyframes cb-slide-up {
  from { opacity: 0; transform: translateY(20px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

/* ── HEADER ── */
.cb-header {
  background: var(--cream);
  padding: 18px 18px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
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
  flex-shrink: 0;
}
.cb-title {
  font-family: 'DM Serif Display', serif;
  color: var(--text);
  font-weight: 400;
  font-size: 17px;
  line-height: 1.2;
}
.cb-sub {
  color: var(--muted);
  font-size: 12px;
  margin-top: 2px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.cb-online-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--olive);
  display: inline-block;
}
.cb-close {
  background: rgba(0,0,0,0.06);
  border: none;
  color: var(--text);
  width: 32px;
  height: 32px;
  border-radius: 9px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  flex-shrink: 0;
}
.cb-close:hover { background: rgba(0,0,0,0.1); }

/* ── MESSAGES ── */
.cb-msgs {
  flex: 1;
  padding: 16px 14px;
  overflow-y: auto;
  background: var(--white);
  display: flex;
  flex-direction: column;
  gap: 10px;
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
  -webkit-overflow-scrolling: touch;
}
.cb-msgs::-webkit-scrollbar { width: 4px; }
.cb-msgs::-webkit-scrollbar-track { background: transparent; }
.cb-msgs::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

.cb-row {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  animation: cb-msg-in 0.3s cubic-bezier(0.22,1,0.36,1);
}
@keyframes cb-msg-in {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
.cb-row.user { justify-content: flex-end; }
.cb-row.bot  { justify-content: flex-start; }

.cb-bubble-avatar {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: var(--navy);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-bottom: 2px;
}
.cb-bubble-wrap {
  display: flex;
  flex-direction: column;
  max-width: 75%;
}
.cb-row.user .cb-bubble-wrap { align-items: flex-end; }

.cb-bubble {
  padding: 10px 14px;
  border-radius: 16px;
  font-size: 13.5px;
  line-height: 1.6;
  word-break: break-word;
}
.cb-bubble.user {
  background: var(--navy);
  color: white;
  border-bottom-right-radius: 4px;
}
.cb-bubble.bot {
  background: var(--cream);
  color: var(--text);
  border-bottom-left-radius: 4px;
  border: 1px solid var(--border);
}

.cb-bubble.bot strong, .cb-bubble.bot b { font-weight: 700; color: var(--navy); }
.cb-bubble.bot em, .cb-bubble.bot i { font-style: italic; }
.cb-bubble.bot h2 { font-size: 14.5px; font-weight: 700; color: var(--navy); margin: 8px 0 3px; }
.cb-bubble.bot h3 { font-size: 13.5px; font-weight: 700; color: var(--navy); margin: 6px 0 2px; }
.cb-bubble.bot h4 { font-size: 13px; font-weight: 700; color: var(--navy); margin: 5px 0 2px; }
.cb-bubble.bot ul, .cb-bubble.bot ol { margin: 5px 0 5px 4px; padding-left: 16px; }
.cb-bubble.bot li { margin: 3px 0; line-height: 1.5; }
.cb-bubble.bot code { background: rgba(26,37,53,0.08); color: var(--navy); padding: 1px 6px; border-radius: 4px; font-family: 'Courier New', monospace; font-size: 12px; }
.cb-bubble.bot p { margin: 0 0 5px; }
.cb-bubble.bot p:last-child { margin-bottom: 0; }

.cb-time {
  font-size: 10.5px;
  color: var(--muted);
  margin-top: 4px;
  padding: 0 2px;
}

.cb-typing {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 15px;
  background: var(--cream);
  border: 1px solid var(--border);
  border-radius: 16px;
  border-bottom-left-radius: 4px;
  width: fit-content;
}
.cb-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--muted);
  animation: cb-bounce 1.2s infinite;
}
.cb-dot:nth-child(2) { animation-delay: 0.2s; }
.cb-dot:nth-child(3) { animation-delay: 0.4s; }
@keyframes cb-bounce {
  0%,60%,100% { transform: translateY(0); }
  30%          { transform: translateY(-5px); }
}

/* ── INPUT ── */
.cb-input-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  border-top: 1px solid var(--border);
  background: var(--cream);
  flex-shrink: 0;
}
.cb-input {
  flex: 1;
  min-width: 0;
  padding: 11px 14px;
  border-radius: 12px;
  border: 1px solid var(--border);
  outline: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: var(--text);
  background: var(--white);
  transition: border-color 0.2s;
  -webkit-appearance: none;
}
.cb-input:focus { border-color: var(--olive); }
.cb-input::placeholder { color: var(--muted); }

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
  flex-shrink: 0;
  transition: background 0.2s, transform 0.15s;
}
.cb-send:hover { background: var(--navy-mid); transform: scale(1.05); }
.cb-send:active { transform: scale(0.96); }

/* ── TABLET ── */
@media (max-width: 768px) {
  .cb-fab-fixed {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
  .cb-panel {
    position: fixed;
    width: 320px;
    right: 20px;
    bottom: 20px;
  }
}

/* ── MOBILE ── */
@media (max-width: 480px) {
  .cb-fab-fixed {
    position: fixed;
    bottom: 16px;
    right: 16px;
  }
  .cb-fab {
    width: 54px;
    height: 54px;
    border-radius: 16px;
  }
  .cb-panel {
    position: fixed;
    right: 16px;
    left: 16px;
    bottom: 16px;
    width: auto;
    max-width: 100%;
    height: 62dvh;
    max-height: 480px;
    min-height: 320px;
    border-radius: var(--radius);
    border-bottom: 1px solid var(--border);
    animation: cb-slide-up 0.35s cubic-bezier(0.22,1,0.36,1);
  }
  .cb-bubble { font-size: 14px; }
  .cb-bubble-wrap { max-width: 80%; }
  .cb-input {
    font-size: 16px;
  }
  .cb-input-row {
    padding-bottom: 12px;
  }
}

/* ── VERY SMALL ── */
@media (max-width: 360px) {
  .cb-panel {
    position: fixed;
    right: 12px;
    left: 12px;
    bottom: 12px;
    width: auto;
    height: 58dvh;
  }
  .cb-fab-fixed {
    right: 12px;
  }
  .cb-title { font-size: 15px; }
}
`;

const ts = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
const uid = () => Math.random().toString(36).slice(2);

const INITIAL_MSG = {
  id: uid(),
  role: "bot",
  text: "Hello! 👋 How can I help you today?",
  time: ts(),
};

function renderMarkdown(text) {
  let html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/^### (.+)$/gm, "<h4>$1</h4>")
    .replace(/^## (.+)$/gm, "<h3>$1</h3>")
    .replace(/^# (.+)$/gm, "<h2>$1</h2>")
    .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/^\s*[-*•]\s+(.+)$/gm, "<li>$1</li>")
    .replace(/^\s*\d+\.\s+(.+)$/gm, "<li>$1</li>");

  html = html.replace(/(<li>.*<\/li>(\n|<br\/>)*)+/gs, (m) => `<ul>${m}</ul>`);
  html = html.split(/\n{2,}/).map((block) => {
    block = block.trim();
    if (!block) return "";
    if (/^<(h[234]|ul|ol|li)/.test(block)) return block;
    return `<p>${block.replace(/\n/g, "<br/>")}</p>`;
  }).join("");

  return html;
}

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const BotAvatarIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="8" width="18" height="12" rx="3" />
    <path d="M9 8V6a3 3 0 016 0v2" />
    <circle cx="9" cy="14" r="1.2" fill="white" stroke="none" />
    <circle cx="15" cy="14" r="1.2" fill="white" stroke="none" />
  </svg>
);

const FabIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    <circle cx="9" cy="10" r="0.8" fill="white" stroke="none" />
    <circle cx="12" cy="10" r="0.8" fill="white" stroke="none" />
    <circle cx="15" cy="10" r="0.8" fill="white" stroke="none" />
  </svg>
);

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MSG]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(0);

  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [open]);

  const buildHistory = useCallback(() =>
    messages.map(m => ({
      role: m.role === "user" ? "user" : "assistant",
      content: m.text,
    }))
  , [messages]);

  const send = async () => {
    if (!input.trim()) return;
    const userMsg = { id: uid(), role: "user", text: input, time: ts() };
    setMessages(prev => [...prev, userMsg]);
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
      setMessages(prev => [...prev, { id: uid(), role: "bot", text: data.reply || "No response", time: ts() }]);
      if (!open) setUnread(n => n + 1);
    } catch {
      setMessages(prev => [...prev, { id: uid(), role: "bot", text: "Error connecting to server.", time: ts() }]);
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
              <div className="cb-avatar"><BotAvatarIcon size={20} /></div>
              <div>
                <div className="cb-title">{BOT_NAME}</div>
                <div className="cb-sub">
                  <span className="cb-online-dot" />
                  {BOT_SUB}
                </div>
              </div>
            </div>
            <button className="cb-close" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="cb-msgs">
            {messages.map(m => (
              <div key={m.id} className={`cb-row ${m.role}`}>
                {m.role === "bot" && (
                  <div className="cb-bubble-avatar"><BotAvatarIcon size={14} /></div>
                )}
                <div className="cb-bubble-wrap">
                  {m.role === "bot" ? (
                    <div className="cb-bubble bot" dangerouslySetInnerHTML={{ __html: renderMarkdown(m.text) }} />
                  ) : (
                    <div className="cb-bubble user">{m.text}</div>
                  )}
                  <span className="cb-time">{m.time}</span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="cb-row bot">
                <div className="cb-bubble-avatar"><BotAvatarIcon size={14} /></div>
                <div className="cb-typing">
                  <span className="cb-dot" /><span className="cb-dot" /><span className="cb-dot" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="cb-input-row">
            <input
              ref={inputRef}
              className="cb-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Ask us anything..."
              inputMode="text"
              enterKeyHint="send"
            />
            <button className="cb-send" onClick={send}><SendIcon /></button>
          </div>
        </div>
      )}

      {/* FAB only shown when chat is closed */}
      {!open && (
        <div className="cb-fab-fixed">
          <button
            className="cb-fab"
            onClick={() => setOpen(true)}
            aria-label="Open chat"
          >
            {unread > 0 && <span className="cb-badge">{unread}</span>}
            <FabIcon />
          </button>
        </div>
      )}
    </>
  );
}