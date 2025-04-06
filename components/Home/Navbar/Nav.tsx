"use client";
import Link from "next/link";
import LanguageToggle from "./LanguageToggle";
import SearchInput from "./SearchInput";
import { navLinks } from "@/constants/constant";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  return (
    <nav className="fixed top-0 w-full h-[12vh] z-[1000] bg-white/50 backdrop-blur-md rounded-[20px] shadow-md">
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <span className="text-lg font-bold text-black">LOGO</span>

        {/* NavLinks (отображаются только на больших экранах) */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map(({ id, url, label }) => (
            <Link
              key={id}
              href={url}
              className="text-black text-base font-medium hover:text-gray-700 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Правый блок (поиск, переключение языка, бургер-меню) */}
        <div className="flex items-center space-x-4">
          <SearchInput />
          <LanguageToggle />

          {/* Бургер-меню для мобильных устройств */}
          <button
            onClick={openNav}
            aria-label="Открыть мобильное меню"
            className="lg:hidden p-2 rounded-md transition-transform duration-200 hover:scale-110 cursor-pointer"
          >
            <HiBars3BottomRight className="w-8 h-8 text-black" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
