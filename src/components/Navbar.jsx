import { colors } from "../assets/colors";
import { Link, NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";
import Button from "./Button";
import hamburger from "../assets/images/hamburger.png";
import closeIcon from "../assets/images/vector-close.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Timeline", to: "/timeline" },
  { name: "Overview", to: "/overview" },
  { name: "FAQs", to: "/faq" },
  { name: "Contact", to: "/contact" },
];

function Navbar() {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="text-white border-b border-white/40 pt-8 pb-4 relative">
      <div className="w-[90%] mx-auto flex items-center justify-between ">
        <h2
          onClick={() => navigate("/")}
          className="text-white text-[15px] md:text-[36px] font-clash cursor-pointer"
        >
          get<span className="text-[#D434FE]">linked</span>
        </h2>
        {/* desktop nav links container to be hidden in mobile */}
        <div className="hidden items-center  self-end  space-x-14 md:flex">
          <div>
            <ul className="flex items-center space-x-9">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-montserrat  gradient-text"
                        : "font-montserrat"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* register button */}
          <Button text={"Regsiter"} />
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
                className={({ isActive, isPending }) =>
                  isActive
                    ? "font-montserrat  gradient-text"
                    : "font-montserrat"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-5">
          {" "}
          <Button text={"Regsiter"} />
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
