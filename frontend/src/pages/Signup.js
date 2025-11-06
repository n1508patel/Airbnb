import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Signup({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
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

    if (password !== confirmPassword) {
      setError("❗ Passwords do not match.");
      return;
    }

    setError("");
    setAuth(true); // successful signup
  };

  return (
    <div className="auth-container">
      <h1>Create Account 🏡</h1>
      <form onSubmit={handleSignup} className="auth-form">
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

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
