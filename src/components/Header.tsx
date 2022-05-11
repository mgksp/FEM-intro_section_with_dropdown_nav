import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import logo from "../images/logo.svg";

import iconMenu from "../images/icon-menu.svg";
import iconClose from "../images/icon-close-menu.svg";

import iconArrUp from "../images/icon-arrow-up.svg";
import iconArrDown from "../images/icon-arrow-down.svg";

import iconTodo from "../images/icon-todo.svg";
import iconPlanning from "../images/icon-planning.svg";
import iconReminders from "../images/icon-reminders.svg";
import iconCalendar from "../images/icon-calendar.svg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  const [showMobNav, setShowMobNav] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 py-6 md:px-10 md:py-8 md:mb-9 md:justify-start gap-14">
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
