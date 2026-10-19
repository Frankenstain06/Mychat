"use client";

import { FormEvent, useState } from "react";
import { ChatPage } from "./chat";

type AuthMode = "login" | "register";

export default function Home() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoggedIn(true);
  }

  if (isLoggedIn) {
    return <ChatPage onLogout={() => setIsLoggedIn(false)} />;
  }

  return (
    <main className="auth-shell">
      <section className="auth-intro">
        <div className="brand">
          <span className="brand-mark">✦</span>
          <span>mychat</span>
        </div>
        <div className="intro-copy">
          <p className="eyebrow">CONVERSATIONS, SIMPLIFIED</p>
          <h1>Make space for the conversations that matter.</h1>
          <p className="intro-text">
            A calm, focused place to connect with your people. No noise, just
            better conversations.
          </p>
        </div>
        <div className="intro-art" aria-hidden="true">
          <span className="bubble bubble-one">Hey, good to see you!</span>
          <span className="bubble bubble-two">Let&apos;s catch up soon.</span>
          <span className="art-orb" />
        </div>
        <p className="copyright">© 2025 mychat</p>
      </section>

      <section className="auth-panel">
        <div className="auth-card">
          <div className="mobile-brand brand">
            <span className="brand-mark">✦</span>
            <span>mychat</span>
          </div>
          <div className="auth-heading">
            <p className="eyebrow">{mode === "login" ? "WELCOME BACK" : "GET STARTED"}</p>
            <h2>{mode === "login" ? "Sign in to mychat" : "Create your account"}</h2>
            <p>
              {mode === "login"
                ? "Pick up where you left off."
                : "Join a more thoughtful way to chat."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {mode === "register" && (
              <label>
                Username
                <input name="username" type="text" placeholder="e.g. alex" minLength={3} required />
              </label>
            )}
            <label>
              Email address
              <input name="email" type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Password
              <span className="password-input">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 6 characters"
                  minLength={6}
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </span>
            </label>
            {mode === "login" && (
              <div className="form-row">
                <label className="checkbox-label">
                  <input type="checkbox" /> <span>Remember me</span>
                </label>
                <button type="button" className="text-button">Forgot password?</button>
              </div>
            )}
            <button className="primary-button" type="submit">
              {mode === "login" ? "Sign in" : "Create account"} <span>→</span>
            </button>
          </form>

          <div className="auth-switch">
            <span>{mode === "login" ? "New to mychat?" : "Already have an account?"}</span>
            <button className="text-button" onClick={() => setMode(mode === "login" ? "register" : "login")}>
              {mode === "login" ? "Create an account" : "Sign in"}
            </button>
          </div>
          <p className="terms">
            By continuing, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
