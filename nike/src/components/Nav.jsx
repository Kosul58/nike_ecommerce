import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constanst";
const Nav = () => {
  return (
    <header className="padding-x py-8 fixed z-20 w-full">
      <nav className="flex justify-center items-center max-container bg-blue-200 w-[80%] h-[60px] rounded-xl sm:w-[90%]">
        <a href="/" className="lg:ml-20">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden mr-[-10%]">
          {navLinks.map((item) => {
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="fonts-montserrat leading-normal text-lg text-black font-montserrat hover:text-[25px] hover:text-coral-red"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div>
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
