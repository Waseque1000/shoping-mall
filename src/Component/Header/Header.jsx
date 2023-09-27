import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../../public/immage/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#E3E6F3]  p-4">
      <div className="container mx-auto    ">
        <div className="flex flex-wrap items-center justify-between">
          <div className="lg:flex  md:flex items-center ml-5 flex-shrink-0  mr-6">
            <div>
              <Link to="/" className="font-bold  text-3xl">
                <img className="lg:m-5" src={img} alt="" />
              </Link>
            </div>
          </div>
          <div className="block  lg:hidden">
            <button
              className=" hover:text-yellow-400-400 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path
                  d="M20 2H0v2h20V2zM20 9H0v2h20V9zM20 16H0v2h20v-2z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div
            className={`w-full lg:flex lg:items-center lg:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="text-sm lg:flex-grow text-black lg:mr-9">
              <Link
                to="/"
                onClick={closeMenu}
                className="block  text-[17px] font-bold mt-4 lg:inline-block lg:mt-0  hover:text-gray-400 mr-4 lg:active:border lg:border-green-600 lg:active:p-4"
              >
                Home
              </Link>
              <Link
                to="/shop"
                onClick={closeMenu}
                className="block text-[17px] font-bold mt-4 lg:inline-block lg:mt-0  hover:text-gray-400 mr-4 lg:active:border lg:border-green-600 lg:active:p-4"
              >
                Shop
              </Link>
              <Link
                to="/blogs"
                onClick={closeMenu}
                className="block text-[17px] font-bold mt-4 lg:inline-block lg:mt-0  hover:text-gray-400 mr-4 lg:active:border lg:border-green-600 lg:active:p-4"
              >
                Blog
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="block  text-[17px] font-bold mt-4 lg:inline-block lg:mt-0  hover:text-gray-400 lg:active:border lg:border-green-600 lg:active:p-4"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block lg:ml-3 text-[17px] font-bold mt-4 lg:inline-block lg:mt-0  hover:text-gray-400 lg:active:border lg:border-green-600 lg:active:p-4"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
