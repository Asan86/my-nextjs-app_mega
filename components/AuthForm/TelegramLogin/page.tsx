"use client";

import { useState } from "react";
import styles from "./TelegramAuthForm.module.scss";

const TelegramAuthForm = () => {
  const [step, setStep] = useState<"phone" | "no_chat" | "otp">("phone");

 
  const botLink = "https://t.me/your_bot_username";

  return (
    <div className={styles.form}>
      {step === "phone" && (
        <>
          <input type="tel" placeholder="Введите номер телефона" required />
          <button type="button" onClick={() => setStep("no_chat")}>
            Продолжить
          </button>
        </>
      )}

      {step === "no_chat" && (
        <>
          <p className={styles.message}>
            Для входа необходимо активировать чат с Telegram-ботом.
          </p>
          <a href={botLink} target="_blank" rel="noopener noreferrer">
            <button type="button">Открыть чат с ботом</button>
          </a>
          <button type="button" onClick={() => setStep("otp")}>
            Я активировал чат, продолжить
          </button>
        </>
      )}

      {step === "otp" && (
        <>
          <input type="text" placeholder="Введите код из Telegram" required />
          <button type="button">Подтвердить код</button>
        </>
      )}
    </div>
  );
};

export default TelegramAuthForm;
