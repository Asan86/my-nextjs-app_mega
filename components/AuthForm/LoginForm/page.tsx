"use client";

import { useState } from "react";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usernameOrEmail, password }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <input
        type="text"
        placeholder="Логин или Email"
        value={usernameOrEmail}
        onChange={(e) => setUsernameOrEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;
