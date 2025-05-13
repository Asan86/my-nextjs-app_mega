"use client";

import React from "react";
import styles from "./BookButton.module.scss";
import { handleBookClick } from "../../utils/handleBookClick";

type Props = {
  onClick?: () => void;
  label?: string;
  className?: string;
};

const BookButton = ({
  onClick = handleBookClick,
  label = "Забронировать",
  className = "",
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.bookButton} ${className}`}
      aria-label={label}
    >
      {label}
    </button>
  );
};

export default BookButton;
