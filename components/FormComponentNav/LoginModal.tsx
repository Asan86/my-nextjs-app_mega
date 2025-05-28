// components/LoginModal/LoginModal.tsx
"use client";
import { useAppDispatch, useAppSelector } from "../../src/store/hooks";
import { closeLoginModal } from "../../src/store/slices/formSliceNav";
import { FormComponentNav } from "../FormComponentNav/FormComponentNav";
import styles from "./LoginModal.module.scss"; // Импорт стилей

const LoginModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.formnav.loginModalOpen);

  if (!isOpen) return null;

  return (
    <div
      className={styles.modalOverlay}
      onClick={() => dispatch(closeLoginModal())}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <FormComponentNav />
      </div>
    </div>
  );
};

export default LoginModal;
