import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constanst";
import { IoIosCloseCircle } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const modalref = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [showburger, setburger] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
    setburger(!showburger);
  };

  const handleHrefClick = async (href) => {
    if (!isHome) {
      navigate("/", { replace: false });
    }
  };

  return (
    <header className="padding-x py-8 fixed z-20 w-full">
      <nav className="flex justify-center items-center max-container bg-blue-200 w-[85%] h-[60px] rounded-xl sm:w-[95%] shadow-[0_1px_5px_rgba(0,0,0,0.5)] max-sm:mt-[-1.5rem] mt-[-1rem]">
        <Link to="/" className="ml-10 min-sm:ml-0">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-2 max-lg:hidden mr-[-5%]">
          {navLinks.map((item) => (
            <li
              // key={item.label}
              className="w-[15%] h-[50px] flex justify-center items-center"
            >
              {item.link ? (
                <Link
                  to={item.link}
                  className="font-montserrat text-lg text-black hover:text-[110%] hover:text-coral-red cursor-pointer"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={isHome ? item.href : "/"}
                  onClick={() => !isHome && handleHrefClick(item.href)}
                  className="font-montserrat text-lg text-black hover:text-[110%] hover:text-coral-red cursor-pointer"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <Link to="/cart">
          <FaShoppingCart
            size={26}
            className="mr-10 cursor-pointer hover:scale-110 hover:text-coral-red hidden min-[1030px]:block"
          />
        </Link>

        <div
          className={`absolute right-5 max-lg:block transition-opacity duration-200 ${
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
          className={`absolute top-20 w-[80%] h-[70vh] min-h-[300px] border-2 z-30 rounded-xl bg-white shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-opacity duration-200 ${
            showModal ? "opacity-100" : "opacity-0 pointer-events-none"
          } flex items-center justify-center flex-col lg:hidden `}
        >
          <IoIosCloseCircle
            size={30}
            className="hover:text-red-500 absolute right-0 top-0"
            onClick={toggleModal}
          />
          <ul className="flex-1 flex justify-evenly items-center flex-col">
            {navLinks.map((item) => (
              <li
                key={item.label}
                className="min-w-[200px] min-h-[30px] w-auto h-auto flex justify-center items-center rounded-sm cursor-pointer"
              >
                {item.link ? (
                  <Link
                    to={item.link}
                    className="font-montserrat text-lg text-black hover:text-[110%] hover:text-coral-red text-[20px] sm:text-[30px] lg:text-[40px]"
                    onClick={toggleModal}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={isHome ? item.href : "/"}
                    onClick={() => {
                      !isHome && handleHrefClick(item.href);
                      toggleModal;
                    }}
                    className="font-montserrat text-lg text-black hover:text-[110%] hover:text-coral-red text-[20px] sm:text-[30px] lg:text-[40px]"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <Link to="/cart">
              <FaShoppingCart
                size={26}
                className="cursor-pointer hover:scale-110 hover:text-coral-red"
              />
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
