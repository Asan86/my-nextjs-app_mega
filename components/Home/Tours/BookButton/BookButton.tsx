// components/BookButton.tsx
import React from "react";
import styles from "./BookButton.module.scss"; // импорт SCSS

type Props = {
  onClick?: () => void;
};

const BookButton = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.bookButton}>
      Забронировать
    </button>
  );
};

export default BookButton;
