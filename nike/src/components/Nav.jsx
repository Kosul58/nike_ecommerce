import React, { useRef, useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constanst";
import { IoIosCloseCircle } from "react-icons/io";

const Nav = () => {
  const modalref = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [showburger, setburger] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
    setburger(!showburger);
  };

  return (
    <header className="padding-x py-8 fixed z-20 w-full">
      <nav className="flex justify-evenly items-center max-container bg-blue-200 w-[85%] h-[60px] rounded-xl sm:w-[95%]">
        <a href="/" className="lg:ml-20 max-[1200px]:ml-[-10]">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-2 max-lg:hidden mr-[-5%]">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="w-[15%] h-[50px] flex justify-center items-center"
            >
              <a
                href={item.href}
                className="font-montserrat text-lg text-black hover:text-[110%] hover:text-coral-red"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={` absolute right-5 max-lg:block transition-opacity duration-200 ${
            showburger ? "opacity-100" : "opacity-0"
          } lg:hidden`}
          onClick={toggleModal}
        >
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="hover:scale-125"
          />
        </div>
        <div
          ref={modalref}
          className={`absolute top-28 w-[80%] h-[70vh] border-2 z-30 rounded-xl  bg-white shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-opacity duration-200 ${
            showModal ? "opacity-100" : "opacity-0 pointer-events-none"
          } flex items-center justify-center flex-col lg:hidden`}
        >
          <IoIosCloseCircle
            size={30}
            className="hover:text-red-500 absolute right-0 top-0"
            onClick={toggleModal}
          />
          <ul className="flex-1 flex justify-center items-center gap-4 flex-col">
            {navLinks.map((item) => (
              <li
                key={item.label}
                className="w-[200px] h-[50px] flex justify-center items-center rounded-sm cursor-pointer "
              >
                <a
                  href={item.href}
                  className="font-montserrat text-lg text-black hover:text-[110%] hover:text-coral-red"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
