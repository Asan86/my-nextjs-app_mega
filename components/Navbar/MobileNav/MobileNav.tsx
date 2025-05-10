import React from "react";
import { navLinks } from "@/constants/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import styles from "./MobileNav.module.scss";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useAppDispatch } from "@/src/store/hooks";
import { openLoginModal } from "@/src/store/slices/formSliceNav";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      {showNav && (
        <div
          className={`${styles.overlay} ${showNav ? styles.show : ""}`}
          onClick={closeNav}
        ></div>
      )}

      <div
        className={`${styles.navContainer} ${showNav ? styles.navOpen : ""}`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.url === "/login" ? "#" : link.url}
            onClick={() => {
              closeNav();
              if (link.label === "Вход") {
                dispatch(openLoginModal());
              }
            }}
          >
            <p className={styles.link}>{link.label}</p>
          </Link>
        ))}

        <div className={styles.languageToggleWrapper}>
          <LanguageToggle />
        </div>

        <CgClose onClick={closeNav} className={styles.closeButton} />
      </div>
    </div>
  );
};

export default MobileNav;
