"use client";
import Link from "next/link";
import LanguageToggle from "./LanguageToggle";
import SearchInput from "./SearchInput";
import { navLinks } from "@/constants/constant";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <nav
      className={`bg-blue-500 ${
        navBg ? "shadow-md" : "fixed"
      } rounded-[20px] transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <div className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center flex-col">
          LOGO
        </div>
        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="relative text-black text-base font-medium w-fit ">
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          {/* SearchInput */}
          <SearchInput />
          {/* Language Switcher */}
          <LanguageToggle />
          <HiBars3BottomRight
            onClick={openNav}
            className="b-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
