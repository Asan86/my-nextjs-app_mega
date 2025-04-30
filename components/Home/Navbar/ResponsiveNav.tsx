"use client";
import React, { useState, useRef } from "react";
import Nav from "./Nav/Nav";
import MobileNav from "./MobileNav/MobileNav";
import { useClickOutside } from "../../../hooks/useClickOutside";

const ResponsivNav = () => {
  const [showNav, setShowNav] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  const handleNavShow = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);

  useClickOutside(
    mobileNavRef as React.RefObject<HTMLElement>,
    handleCloseNav,
    showNav
  );

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
