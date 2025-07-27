"use client";

import { useState } from "react";
import styles from "./RegisterForm.module.scss";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, login, password }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleRegister} className={styles.form}>
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

      <button type="submit">Далее</button>
    </form>
  );
};

export default RegisterForm;

// "use client";

// import { useState } from "react";
// import styles from "./RegisterForm.module.scss";

// const RegisterForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const res = await fetch("/api/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, email, password }),
//     });
//     const data = await res.json();
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleRegister} className={styles.form}>
//       <input
//         type="text"
//         placeholder="Имя"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Пароль"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// };

// export default RegisterForm;
