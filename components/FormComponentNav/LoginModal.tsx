"use client";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { closeLoginModal } from "@store/slices/formSliceNav";
import styles from "./LoginModal.module.scss";
import AuthForm from "@components/AuthForm/page";

const LoginModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.formnav.loginModalOpen);

  const handleClose = () => dispatch(closeLoginModal());

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <AuthForm onClose={handleClose} />
      </div>
    </div>
  );
};

export default LoginModal;
