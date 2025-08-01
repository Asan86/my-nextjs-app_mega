"use client";

import { useState } from "react";
import styles from "./TelegramAuthForm.module.scss";

const TelegramAuthForm = () => {
  const [step, setStep] = useState<"phone" | "no_chat" | "otp">("phone");
  const [countryCode, setCountryCode] = useState("+996");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const botLink = "https://t.me/your_bot_username";

  const handlePhoneSubmit = () => {
    if (!phone.match(/^\d{7,}$/)) {
      alert("Введите корректный номер телефона");
      return;
    }
    setStep("no_chat");
  };

  const handleOtpSubmit = () => {
    if (otp.trim().length < 4) {
      alert("Введите корректный код");
      return;
    }
    console.log("OTP подтвержден:", otp);
  };

  return (
    <div className={styles.form}>
      {step === "phone" && (
        <>
          <div className={styles.phoneInput}>
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+996">+996 (KG)</option>
              <option value="+7">+7 (RU)</option>
              <option value="+1">+1 (US)</option>
              <option value="+44">+44 (UK)</option>
            </select>
            <input
              type="tel"
              placeholder="Введите номер телефона"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button type="button" onClick={handlePhoneSubmit}>
            Далее
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
            Я активировал чат, далее
          </button>
        </>
      )}

      {step === "otp" && (
        <>
          <input
            type="text"
            placeholder="Введите код из Telegram"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="button" onClick={handleOtpSubmit}>
            Далее
          </button>
        </>
      )}
    </div>
  );
};

export default TelegramAuthForm;
