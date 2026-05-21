import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import Notification from "../../components/Notification/Notification";

import styles from "./RegisterView.module.css";

export default function RegisterView() {
  const navigate = useNavigate();

  const [notification, setNotification] = useState(null);

  // Setup state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Email validation (shown on page, not popup)
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email.");
      return;
    } else {
      setEmailError("");
    }

    // Password validation (still popup)
    if (password !== confirmPassword) {
      setNotification({ type: "error", message: "Passwords do not match." });
      return;
    }

    AuthService.register({
      email,
      password,
      confirmPassword,
      role: "user",
    })
      .then(() => {
        setNotification({
          type: "success",
          message: "Registration successful",
        });
        navigate("/login");
      })
      .catch((error) => {
        const message = error.response?.data?.message || "Registration failed.";
        setNotification({ type: "error", message: message });
      });
  }

  return (
    <div className={styles.viewRegister}>
      <h2 className={styles.registerTitle}>Create Account</h2>

      <Notification
        notification={notification}
        clearNotification={() => setNotification(null)}
      />

      <form onSubmit={handleSubmit}>
        <div className={styles.formControl}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            size="50"
            required
            autoFocus
            autoComplete="email"
            placeholder="name@example.com"
            onChange={(event) => setEmail(event.target.value)}
          />

          {/* 🔥 Error shown here */}
          {emailError && (
            <p style={{ color: "red", marginTop: "5px" }}>{emailError}</p>
          )}
        </div>

        <div className={styles.formControl}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            size="50"
            required
            placeholder="Enter your password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            size="50"
            required
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>

        <button
          type="submit"
          className={`${styles.btnPrimary} ${styles.formButton}`}
        >
          Register
        </button>

        <Link className={styles.loginLink} to="/login">
          Have an account? Log in
        </Link>
      </form>
    </div>
  );
}
