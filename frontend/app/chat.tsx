"use client";

import { FormEvent, useState } from "react";

type Message = { id: number; text: string; time: string; mine?: boolean };

const initialMessages: Message[] = [
  { id: 1, text: "Hey! How are you doing?", time: "10:42 AM" },
  { id: 2, text: "I'm doing great! Just finished that project we talked about.", time: "10:43 AM", mine: true },
  { id: 3, text: "That's awesome! I knew you’d nail it ✨", time: "10:44 AM" },
  { id: 4, text: "Thanks! What are you up to today?", time: "10:45 AM", mine: true },
];

export function ChatPage({ onLogout }: { onLogout: () => void }) {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setMessages([...messages, { id: Date.now(), text, time: "Just now", mine: true }]);
    setDraft("");
  }

  return (
    <main className="chat-shell">
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="brand"><span className="brand-mark">✦</span><span>mychat</span></div>
          <button className="icon-button" aria-label="New conversation">＋</button>
        </div>
        <div className="search-box"><span>⌕</span><input placeholder="Search conversations" /></div>
        <p className="sidebar-label">MESSAGES</p>
        <button className="conversation active">
          <span className="avatar avatar-purple">S</span>
          <span className="conversation-info"><strong>Sam Wilson</strong><small>That&apos;s awesome! I knew...</small></span>
          <small className="conversation-time">10:45</small>
        </button>
        <button className="conversation">
          <span className="avatar avatar-green">J</span>
          <span className="conversation-info"><strong>Jamie Lee</strong><small>See you tomorrow!</small></span>
          <small className="conversation-time">Yesterday</small>
        </button>
        <div className="sidebar-bottom">
          <button className="profile-row"><span className="avatar avatar-orange">A</span><span><strong>Alex Morgan</strong><small>Online</small></span><span>•••</span></button>
          <button className="logout-button" onClick={onLogout}>↪ <span>Sign out</span></button>
        </div>
      </aside>

      <section className="conversation-panel">
        <header className="conversation-header">
          <div className="header-person"><span className="avatar avatar-purple">S</span><span><strong>Sam Wilson</strong><small><i /> Active now</small></span></div>
          <button className="icon-button" aria-label="More options">•••</button>
        </header>
        <div className="message-area">
          <div className="date-divider"><span>Today</span></div>
          {messages.map((message) => (
            <div key={message.id} className={`message-row ${message.mine ? "mine" : ""}`}>
              {!message.mine && <span className="avatar avatar-purple small-avatar">S</span>}
              <div><div className="message-bubble">{message.text}</div><small className="message-time">{message.time}</small></div>
            </div>
          ))}
        </div>
        <form className="composer" onSubmit={sendMessage}>
          <input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Write a message..." aria-label="Message" />
          <button type="button" className="emoji-button" aria-label="Add emoji">☺</button>
          <button type="submit" className="send-button" aria-label="Send message">↑</button>
        </form>
      </section>
    </main>
  );
}
