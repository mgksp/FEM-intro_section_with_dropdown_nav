import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menus } from "../utils/enums";

import iconClose from "../images/icon-close-menu.svg";

import iconArrUp from "../images/icon-arrow-up.svg";
import iconArrDown from "../images/icon-arrow-down.svg";

import iconTodo from "../images/icon-todo.svg";
import iconPlanning from "../images/icon-planning.svg";
import iconReminders from "../images/icon-reminders.svg";
import iconCalendar from "../images/icon-calendar.svg";

interface MobileNavProps {
  setShowMobNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNav({ setShowMobNav }: MobileNavProps) {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showCompany, setShowCompany] = useState(false);

  const handleDropdownMenuToggle = (menu: menus) => {
    if (menu === menus.features) {
      setShowCompany(false);
      setShowFeatures((prev) => !prev);
    }

    if (menu === menus.company) {
      setShowFeatures(false);
      setShowCompany((prev) => !prev);
    }
  };

  return (
    <motion.nav
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{
        duration: 0.2,
      }}
      aria-label="mobile-nav"
      className="absolute inset-0 grid grid-cols-mobNavLayout"
    >
      <motion.div
        animate={{
          backgroundColor: ["rgb(255, 255, 255)", "rgb(31, 41, 55)"],
        }}
        className="opacity-80"
      ></motion.div>
      <div className="bg-white p-6 flex flex-col gap-3">
        <button
          aria-label="close navigation"
          className="self-end mb-3"
          onClick={() => setShowMobNav(false)}
        >
          <img src={iconClose} alt="" />
        </button>
        <div className="">
          <div
            className="flex gap-2 items-center mb-3"
            onClick={() => handleDropdownMenuToggle(menus.features)}
          >
            Features{" "}
            <img
              className={showFeatures ? "hidden" : "block"}
              src={iconArrDown}
              alt=""
            />
            <img
              className={showFeatures ? "block" : "hidden"}
              src={iconArrUp}
              alt=""
            />
          </div>
          <AnimatePresence initial={false} exitBeforeEnter={true}>
            {showFeatures && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="pl-5 flex gap-3 flex-col overflow-hidden"
              >
                <a href="#" className="flex gap-2 items-center">
                  <img src={iconTodo} alt="" /> Todo&nbsp;List
                </a>
                <a href="#" className="flex gap-2 items-center">
                  <img src={iconCalendar} alt="" /> Calendar
                </a>
                <a href="#" className="flex gap-2 items-center">
                  <img src={iconReminders} alt="" /> Reminders
                </a>
                <a href="#" className="flex gap-2 items-center">
                  <img src={iconPlanning} alt="" /> Planning
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="">
          <div
            className="flex gap-2 items-center mb-3"
            onClick={() => handleDropdownMenuToggle(menus.company)}
          >
            Company{" "}
            <img
              className={showCompany ? "hidden" : "block"}
              src={iconArrDown}
              alt=""
            />
            <img
              className={showCompany ? "block" : "hidden"}
              src={iconArrUp}
              alt=""
            />
          </div>
          <AnimatePresence initial={false} exitBeforeEnter={true}>
            {showCompany && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="pl-5 flex gap-3 flex-col overflow-hidden"
              >
                <a href="#">History</a>
                <a href="#">Our Team</a>
                <a href="#">Blog</a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <a className="mb-3">Careers</a>
        <a className="mb-3">About</a>
        <button className="cursor-pointer hover:text-almostBlack mt-4">
          Login
        </button>
        <button className="cursor-pointer py-3 border-1 border-mediumGray rounded-xl hover:text-almostBlack hover:border-mediumGray">
          Register
        </button>
      </div>
    </motion.nav>
  );
}
