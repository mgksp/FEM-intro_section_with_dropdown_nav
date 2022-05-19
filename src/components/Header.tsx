import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import logo from "../images/logo.svg";

import iconMenu from "../images/icon-menu.svg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  const [showMobNav, setShowMobNav] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 py-6 md:px-10 md:py-8 md:mb-9 md:justify-start gap-14 max-w-[90rem] mx-auto">
      <img src={logo} alt="" />
      <button
        aria-label="menu"
        className="md:hidden"
        onClick={() => setShowMobNav(true)}
      >
        <img src={iconMenu} alt="" />
      </button>

      <DesktopNav />
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {showMobNav && <MobileNav setShowMobNav={setShowMobNav} />}
      </AnimatePresence>
    </header>
  );
}
