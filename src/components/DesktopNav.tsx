import { SetStateAction, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import iconArrUp from "../images/icon-arrow-up.svg";
import iconArrDown from "../images/icon-arrow-down.svg";

import iconTodo from "../images/icon-todo.svg";
import iconPlanning from "../images/icon-planning.svg";
import iconReminders from "../images/icon-reminders.svg";
import iconCalendar from "../images/icon-calendar.svg";

export default function DesktopNav() {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showCompany, setShowCompany] = useState(false);

  const ProductMenuItems = () => (
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
  );

  const CompanyMenuItems = () => (
    <ul className="flex gap-2 flex-col">
      <li className="cursor-pointer hover:text-almostBlack">History</li>
      <li className="cursor-pointer hover:text-almostBlack">Our Team</li>
      <li className="cursor-pointer hover:text-almostBlack">Blog</li>
    </ul>
  );

  return (
    <nav
      aria-label="desktop-navigation"
      className="hidden md:flex text-mediumGray justify-between items-center w-full"
    >
      <div className="flex gap-8">
        <DropDownMenu
          title="Features"
          menuItems={<ProductMenuItems />}
          width="w-40"
          navMenuState={showFeatures}
          setNavMenuState={setShowFeatures}
        />
        <DropDownMenu
          title="Company"
          menuItems={<CompanyMenuItems />}
          width="w-32"
          navMenuState={showCompany}
          setNavMenuState={setShowCompany}
        />
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

interface DropDownMenuProps {
  title: string;
  menuItems: React.ReactNode;
  width: string;
  navMenuState: boolean;
  setNavMenuState: React.Dispatch<SetStateAction<boolean>>;
}
const DropDownMenu = ({
  title,
  menuItems,
  width,
  navMenuState,
  setNavMenuState,
}: DropDownMenuProps) => {
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeNavMenu(evt: MouseEvent) {
      if (
        navMenuState &&
        node.current &&
        !node.current.contains(evt.target as Node)
      ) {
        setNavMenuState!(false);
      }
    }

    document.addEventListener("mousedown", closeNavMenu);

    return () => {
      document.removeEventListener("mousedown", closeNavMenu);
    };
  }, [navMenuState]);

  return (
    <div ref={node}>
      <a
        href="#"
        className="flex items-center gap-1 hover:text-almostBlack"
        onClick={() => {
          setNavMenuState!((prev) => !prev);
        }}
      >
        {title}
        <img
          className={navMenuState ? "hidden" : "block"}
          src={iconArrDown}
          alt=""
        />
        <img
          className={navMenuState ? "block" : "hidden"}
          src={iconArrUp}
          alt=""
        />
      </a>
      <div className="relative">
        <motion.div
          initial={{ y: "-20rem" }}
          animate={{ y: navMenuState ? 0 : "-20rem" }}
          className={`absolute bg-white rounded-xl shadow-nav p-6 top-4 left-0 ${width}`}
        >
          {menuItems}
        </motion.div>
      </div>
    </div>
  );
};
