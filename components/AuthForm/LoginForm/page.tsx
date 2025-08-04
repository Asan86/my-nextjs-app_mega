"use client";

import { useState, useEffect } from "react";
import styles from "./LoginForm.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { loginUser } from "@store/slices/loginSlice";

interface LoginFormProps {
  onSwitchToRegister?: () => void;
  onForgotPassword?: () => void;
}

const LoginForm = ({
  onSwitchToRegister,
  onForgotPassword,
}: LoginFormProps) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useAppDispatch();
  const { error, loading, user } = useAppSelector((state) => state.login);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ usernameOrEmail, password, rememberMe }));
  };

  useEffect(() => {
    if (user) {
      console.log("Успешный вход:", user);
    }
  }, [user]);

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

      {error && <div className={styles.error}>{error}</div>}

      <button
        type="button"
        className={styles.forgot}
        onClick={onForgotPassword}
      >
        Забыли пароль?
      </button>

      <div className={styles.actions}>
        <button type="submit" disabled={loading}>
          {loading ? "Загрузка..." : "Войти"}
        </button>

        <button
          type="button"
          className={styles.secondaryBtn}
          onClick={onSwitchToRegister}
        >
          Регистрация
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
