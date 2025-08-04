"use client";

import { useState } from "react";
import { FaArrowLeft, FaTimes } from "react-icons/fa";
import styles from "./AuthForm.module.scss";
import LoginForm from "./LoginForm/page";
import RegisterForm from "./RegisterForm/page";
import TelegramLogin from "./TelegramLogin/page";

type Mode = "select" | "login" | "telegram" | "register";

interface AuthFormProps {
  onClose: () => void;
}

export default function AuthForm({ onClose }: AuthFormProps) {
  const [mode, setMode] = useState<Mode>("select");

  return (
    <div className={styles.container}>
      {mode !== "select" && (
        <button onClick={() => setMode("select")} className={styles.backBtn}>
          <FaArrowLeft size={18} />
        </button>
      )}
      <button onClick={onClose} className={styles.closeBtn}>
        <FaTimes size={18} />
      </button>

      {/* Заголовок */}

      <h2 className={styles.title}>
        {mode === "register"
          ? "Регистрация"
          : mode === "login"
            ? "Вход через почту"
            : mode === "telegram"
              ? "Вход"
              : ""}
      </h2>

      <div className={styles.content}>
        {mode === "select" && (
          <div className={styles.buttonGroup}>
            <button
              onClick={() => setMode("telegram")}
              className={styles.modeBtn}
            >
              Войти через Telegram
            </button>
            <button onClick={() => setMode("login")} className={styles.modeBtn}>
              Войти через почту
            </button>
            <button
              onClick={() => setMode("register")}
              className={styles.modeBtn}
            >
              Пройти регистрацию
            </button>
          </div>
        )}

        {mode === "login" && (
          <LoginForm
            onSwitchToRegister={() => setMode("register")}
            onForgotPassword={() =>
              console.log("Переход на восстановление пароля")
            }
          />
        )}
        {mode === "telegram" && <TelegramLogin />}
        {mode === "register" && <RegisterForm />}
      </div>
    </div>
  );
}
