"use client";

import { useState } from "react";
import styles from "./LoginForm.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usernameOrEmail, password, rememberMe }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <input
        type="text"
        placeholder="Введите почту или логин *"
        value={usernameOrEmail}
        onChange={(e) => setUsernameOrEmail(e.target.value)}
        required
      />

      <div className={styles.passwordWrapper}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Введите пароль *"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="button"
          className={styles.togglePassword}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <label className={styles.remember}>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        Запомнить меня
      </label>

      <div className={styles.forgot}>Запомнить пароль?</div>

      <div className={styles.actions}>
        <button type="submit">Войти</button>
        <button type="button" className={styles.secondaryBtn}>
          Регистрация
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

  