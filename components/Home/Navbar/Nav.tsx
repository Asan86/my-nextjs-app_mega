"use client";
import Link from "next/link";
import LanguageToggle from "./LanguageToggle";
import SearchInput from "./SearchInput";
import { navLinks } from "@/constants/constant";
import { HiBars3BottomRight } from "react-icons/hi2";
import styles from "./Nav.module.scss";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* LOGO */}
        <span className={styles.logo}>LOGO</span>

        {/* NavLinks */}
        <div className={styles.navLinks}>
          {navLinks.map(({ id, url, label }) => (
            <Link key={id} href={url}>
              {label}
            </Link>
          ))}
        </div>

        {/* Right side: Search + Language + Burger */}
        <div className={styles.rightSide}>
          <SearchInput />
          <LanguageToggle />
          <button
            onClick={openNav}
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
