import { colors } from "../assets/colors";
import { Link, NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";
import Button from "./Button";
import hamburger from "../assets/images/hamburger.png";
import closeIcon from "../assets/images/vector-close.png";
import { useState } from "react";
import Contact from "../pages/Contact";

const navLinks = [
  { name: "Timeline", to: "/#timeline" },
  { name: "Overview", to: "/#overview" },
  { name: "FAQs", to: "/#faq" },
  { name: "Contact", to: "/contact" },
];

function Navbar({ isContactPage }) {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="text-white border-b border-white/40 pt-8 pb-4 relative">
      <div className="w-[90%] mx-auto flex items-center justify-between ">
        <Link
          to={"/"}
          className="text-white text-[15px] md:text-[36px] font-clash cursor-pointer"
        >
          get<span className="text-[#D434FE]">linked</span>
        </Link>
        {/* desktop nav links container to be hidden in mobile */}
        <div className="hidden items-center  self-end  space-x-14 md:flex">
          <div>
            <ul className="flex items-center space-x-9">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className={`${
                      link.name === "Contact" && isContactPage
                        ? "gradient-text"
                        : null
                    }
                       font-montserrat
                      `}
                    // className={({ isActive, isPending }) =>
                    //   isActive
                    //     ? "font-montserrat  gradient-text"
                    //     : "font-montserrat"
                    // }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* register button */}
          {/* <Button text={"Regsiter"} /> */}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border border-[#D434FE] rounded-md w-[172px] h-[53px] flex items-center justify-center"
                : "custom-horizontal-gradient rounded-md w-[172px] h-[53px] flex items-center justify-center"
            }
            to={"/register"}
          >
            Register
          </NavLink>
        </div>
        {/* hamburger */}
        <div
          onClick={() => setShowNav(true)}
          className="block cursor-pointer md:hidden"
        >
          <img src={hamburger} alt="menu icon" />
        </div>
      </div>
      {/* mobile nav */}
      <div
        className={`${
          showNav ? "top-[0]" : "top-[-400px] "
        } duration-500 w-full bg-[#150e28] absolute top-0 z-[1999]  p-8 py-14`}
      >
        <ul className="flex flex-col items-start mt-5 space-y-9">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                className={`${
                  link.name === "Contact" && isContactPage
                    ? "gradient-text"
                    : null
                }
                 font-montserrat
                `}
                // className={({ isActive, isPending }) =>
                //   isActive
                //     ? "font-montserrat  gradient-text"
                //     : "font-montserrat"
                // }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-5">
          {" "}
          {/* <Button text={"Regsiter"} /> */}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "p-4 border border-[#D434FE] rounded-md"
                : "custom-horizontal-gradient p-4 rounded-md"
            }
            to={"/register"}
          >
            Register
          </NavLink>
        </div>
        <div
          onClick={() => setShowNav(false)}
          className="absolute top-5 right-5 z-[100] border p-2 cursor-pointer border-white rounded-full"
        >
          <img src={closeIcon} alt="close icon" />
        </div>
      </div>
    </nav>
  );
}
// bg-[#150e28]

export default Navbar;
