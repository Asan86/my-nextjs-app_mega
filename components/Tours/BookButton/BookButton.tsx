import React from "react";
import styles from "./BookButton.module.scss";
import { handleBookClick } from "../../utils/handleBookClick"; // путь проверь под свой проект

type Props = {
  onClick?: () => void;
};

const BookButton = ({ onClick = handleBookClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.bookButton}>
      Забронировать
    </button>
  );
};

export default BookButton;
