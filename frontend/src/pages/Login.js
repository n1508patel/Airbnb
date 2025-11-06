import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Login({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("⚠️ All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("❌ Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("🔒 Password must be at least 6 characters.");
      return;
    }

    setError("");
    setAuth(true); // successful login
  };

  return (
    <div className="auth-container">
      <h1>Welcome Back 👋</h1>
      <form onSubmit={handleLogin} className="auth-form">
        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}
