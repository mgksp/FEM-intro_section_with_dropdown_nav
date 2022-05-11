import { useState } from "react";
import { motion } from "framer-motion";

import { menus } from "../utils/enums";

import iconArrUp from "../images/icon-arrow-up.svg";
import iconArrDown from "../images/icon-arrow-down.svg";

import iconTodo from "../images/icon-todo.svg";
import iconPlanning from "../images/icon-planning.svg";
import iconReminders from "../images/icon-reminders.svg";
import iconCalendar from "../images/icon-calendar.svg";

export default function DesktopNav() {
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
    <nav
      aria-label="desktop-navigation"
      className="hidden md:flex text-mediumGray justify-between items-center w-full"
    >
      <div className="flex gap-8">
        <div className="relative">
          <a
            href="#"
            className="flex items-center gap-1 hover:text-almostBlack"
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
          </a>
          <motion.div
            initial={{ y: "-20rem" }}
            animate={{ y: showFeatures ? 0 : "-20rem" }}
            className="absolute bg-white rounded-xl shadow-nav p-6 -bottom-[750%] right-0 w-40"
          >
            <ul className="flex gap-2 flex-col">
              <li className="flex items-center gap-2 cursor-pointer hover:text-almostBlack">
                <img className="w-4" src={iconTodo} alt="" />
                <p>Todo&nbsp;List</p>
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-almostBlack">
                <img className="w-4" src={iconCalendar} alt="" />
                <p>Calendar</p>
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-almostBlack">
                <img className="w-4" src={iconReminders} alt="" />
                <p>Reminders</p>
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-almostBlack">
                <img className="w-4" src={iconPlanning} alt="" />
                <p>Planning</p>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="relative">
          <a
            href="#"
            className="flex items-center gap-1 hover:text-almostBlack"
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
          </a>
          <motion.div
            initial={{ y: "-20rem" }}
            animate={{ y: showCompany ? 0 : "-20rem" }}
            className="absolute bg-white rounded-xl shadow-nav p-6 -bottom-[620%] left-0 w-32"
          >
            <ul className="flex gap-2 flex-col">
              <li className="cursor-pointer hover:text-almostBlack">History</li>
              <li className="cursor-pointer hover:text-almostBlack">
                Our Team
              </li>
              <li className="cursor-pointer hover:text-almostBlack">Blog</li>
            </ul>
          </motion.div>
        </div>
        <a href="#" className="hover:text-almostBlack">
          Careers
        </a>
        <a href="#" className="hover:text-almostBlack">
          About
        </a>
      </div>
      <div className="flex gap-8">
        <button className="cursor-pointer hover:text-almostBlack">Login</button>
        <button className="cursor-pointer py-3 px-5 border-1 border-mediumGray rounded-xl hover:text-almostBlack hover:border-mediumGray">
          Register
        </button>
      </div>
    </nav>
  );
}
