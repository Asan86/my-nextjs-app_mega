"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../src/store/hooks";
import {
  setPhoneNumber,
  setVerificationCode,
} from "../../src/store/slices/formSliceNav";
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

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={phoneNumber}
        onChange={handlePhoneChange}
        placeholder="Номер телефона"
      />
      <input
        type="text"
        value={verificationCode}
        onChange={handleCodeChange}
        placeholder="Код"
      />
      <div className={styles.buttons}>
        <button type="submit">ОТР-логин</button>
        <button type="submit">Войти</button>
      </div>
    </form>
  );
};
