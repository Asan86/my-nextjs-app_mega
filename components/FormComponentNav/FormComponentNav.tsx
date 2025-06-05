"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import {
  setPhoneNumber,
  setVerificationCode,
  closeLoginModal,
} from "src/store/slices/formSliceNav";
import { CgClose } from "react-icons/cg";
import styles from "./FormComponentNav.module.scss";

export const FormComponentNav = () => {
  const dispatch = useAppDispatch();
  const { phoneNumber, verificationCode } = useAppSelector(
    (state) => state.formnav
  );

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPhoneNumber(e.target.value));
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setVerificationCode(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Phone Number:", phoneNumber);
    console.log("Verification Code:", verificationCode);
  };

  const handleClose = () => {
    dispatch(closeLoginModal());
  };

  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h3>Вход</h3>
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Закрыть"
        >
          <CgClose />
        </button>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneChange}
          placeholder="Номер телефона"
          className={styles.phoneInput}
        />
        <div className={styles.codeAndButton}>
          <input
            type="text"
            value={verificationCode}
            onChange={handleCodeChange}
            placeholder="Код"
          />
          <button type="submit" className={styles.otpButton}>
            ОТР-логн
          </button>
        </div>
        <div className={styles.buttons}>
          <button type="button">Войти</button>
        </div>
      </form>
    </div>
  );
};
