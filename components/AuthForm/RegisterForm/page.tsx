"use client";

import { useState, useEffect } from "react";
import styles from "./RegisterForm.module.scss";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { registerUser, resetRegisterState } from "@store/slices/registerSlice";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const { loading, error, success } = useAppSelector((state) => state.register);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerUser({ email, login, password }));
  };

  useEffect(() => {
    if (success) {
      alert("Регистрация прошла успешно!");
      setEmail("");
      setLogin("");
      setPassword("");
      dispatch(resetRegisterState());
    }
  }, [success, dispatch]);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="email"
        placeholder="Введите почту *"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Введите логин *"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        required
      />
      <p className={styles.note}>Придумайте свой логин</p>

      <input
        type="password"
        placeholder="Придумайте пароль *"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <p className={styles.note}>
        Пароль должен быть не менее 8 символов, включать буквы в верхнем и
        нижнем регистре, содержать цифры и другие знаки
      </p>

      {error && <p className={styles.error}>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Загрузка..." : "Далее"}
      </button>
    </form>
  );
};

export default RegisterForm;
