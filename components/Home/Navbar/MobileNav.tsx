import React from "react";
import { navLinks } from "@/constants/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import LanguageToggle from "./LanguageToggle";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "-translate-x-full";

  return (
    <div>
      {/* Overlay */}
      {showNav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md z-[1001] transition-opacity duration-300"
          onClick={closeNav} // Закрываем меню при клике на оверлей
        ></div>
      )}

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-white bg-opacity-80 rounded-r-lg shadow-lg 
        flex flex-col justify-center items-start space-y-6 p-8 transform ${navOpen} 
        transition-transform duration-500 ease-in-out z-[1050]`}
      >
        {/* Навигационные ссылки */}
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url} onClick={closeNav}>
            <p className="text-black w-fit text-[20px] border-b-[1.5px] pb-1 border-black sm:text-[24px]">
              {link.label}
            </p>
          </Link>
        ))}

        {/* Language Toggle */}
        <LanguageToggle />

        {/* Кнопка закрытия */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-6 sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-black hover:text-gray-700 transition-colors"
        />
      </div>
    </div>
  );
};

export default MobileNav;
