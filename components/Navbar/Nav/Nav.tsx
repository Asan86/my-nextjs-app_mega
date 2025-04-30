"use client";
import Link from "next/link";
import SearchInput from "../SearchInput/SearchInput";
import { navLinks } from "@/constants/constant";
import { HiBars3BottomRight } from "react-icons/hi2";
import styles from "./Nav.module.scss";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useEffect, useState } from "react";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
    openNav();  
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <span className={styles.logo}>LOGO</span>

        <div className={`${styles.navLinks} ${navOpen ? styles.navOpen : ""}`}>
          {navLinks.map(({ id, url, label }) => (
            <Link key={id} href={url}>
              {label}
            </Link>
          ))}
        </div>

        <div className={styles.rightSide}>
          <div className={styles.searchInputWrapper}>
            <SearchInput />
          </div>
          <div className={styles.languageToggleDesktop}>
            <LanguageToggle />
          </div>

          <button
            onClick={toggleNav}
            aria-label="Открыть мобильное меню"
            className={styles.burgerButton}
          >
            <HiBars3BottomRight />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
