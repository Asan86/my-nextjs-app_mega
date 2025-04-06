"use client";
import React, { useState, useEffect, useRef } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsivNav = () => {
  const [showNav, setShowNav] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  const handleNavShow = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);

  // Закрытие меню при клике вне его области
  useEffect(() => {
    if (!showNav) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target as Node)
      ) {
        handleCloseNav();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showNav]);

  return (
    <>
      <Nav openNav={handleNavShow} />
      <div ref={mobileNavRef}>
        <MobileNav
          showNav={showNav}
          closeNav={handleCloseNav}
          aria-hidden={showNav ? "false" : "true"}
        />
      </div>
    </>
  );
};

export default ResponsivNav;
