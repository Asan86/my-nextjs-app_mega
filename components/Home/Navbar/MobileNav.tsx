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
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-10 w-full h-screen`}
      ></div>
      {/* NavLinks */}
      <div
        className={`text-black ${navOpen} fixed rounded-l-lg justify-center flex flex-col h-full transform transition-all 
        duration-500 delay-300 w-[80%] sm:[60%] bg-white opacity-80 space-y-6 z-[1050]`}
      >
        {navLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-black w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-black sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
        <LanguageToggle />
      </div>
    </div>
  );
};

export default MobileNav;
