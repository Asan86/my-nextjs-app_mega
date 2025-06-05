import React from "react";
import styles from "./CustomButton.module.scss";
import { handleButtonClick } from "@components/utils/handleButtonClick";  

type CustomButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const CustomButton = ({
  onClick = handleButtonClick,
  children,
  className = "",
  type = "button",
}: CustomButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
