"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormField, resetForm } from "src/store/slices/formSlice";
import { RootState } from "src/store/store";
import styles from "./FormComponent.module.scss";

export const FormComponent = () => {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);

  const handleChange = (field: keyof typeof form, value: string) => {
    dispatch(updateFormField({ field, value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Данные формы:", form);
    alert("Заявка отправлена!");
    dispatch(resetForm());
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>Необходимо связаться с Вами?</h2>
          <p className={styles.subtitle}>Оставьте свои контакты</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Фамилия и имя"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="tel"
            placeholder="Номер телефона"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Эл. почта"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={styles.input}
            required
          />
          <textarea
            placeholder="Комментарий: Свяжитесь со мной"
            value={form.comment}
            onChange={(e) => handleChange("comment", e.target.value)}
            className={styles.textarea}
          />
          <button type="submit" className={styles.button}>
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  );
};
