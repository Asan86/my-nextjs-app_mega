import React from "react";
import { navLinks } from "@/constants/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import styles from "./MobileNav.module.scss";
import LanguageToggle from "../LanguageToggle/LanguageToggle";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  return (
    <div>
      {/* Overlay */}
      {showNav && <div className={styles.overlay} onClick={closeNav}></div>}

      {/* Mobile Navigation */}
      <div
        className={`${styles.navContainer} ${showNav ? styles.navOpen : ""}`}
      >
        {/* Навигационные ссылки */}
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url} onClick={closeNav}>
            <p className={styles.link}>{link.label}</p>
          </Link>
        ))}

        {/* Language Toggle */}
        <LanguageToggle />

        {/* Кнопка закрытия */}
        <CgClose onClick={closeNav} className={styles.closeButton} />
      </div>
    </div>
  );
};

export default MobileNav;
