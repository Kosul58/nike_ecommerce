import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constanst";
const Nav = () => {
  return (
    <header className="padding-x py-8 fixed z-20 w-full">
      <nav className="flex justify-evenly items-center max-container bg-blue-200 w-[85%] h-[60px] rounded-xl sm:w-[95%]">
        <a
          href="/"
          className="lg:ml-20 max-[1200px]:ml-[-10]
        "
        >
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-2 max-lg:hidden mr-[-10%]">
          {navLinks.map((item) => {
            return (
              <li
                key={item.label}
                className="w-[15%] h-[50px] flex justify-center items-center"
              >
                <a
                  href={item.href}
                  className="fonts-montserrat leading-normal text-lg text-black font-montserrat hover:text-[150%] hover:text-coral-red "
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="absolute right-5">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="hidden max-lg:block"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
