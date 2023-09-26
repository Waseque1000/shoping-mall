import React from "react";
import { Link } from "react-router-dom";
import img from "../../../public/immage/logo.png";

const Header = () => {
  return (
    <div className="bg-[#E3E6F3]">
      <div className="navbar bg-white flex justify-between  ">
        <img className="lg:m-5" src={img} alt="" />
        <div className="lg:mr-6 text-1xl">
          <Link className="lg:ml-6 text-black font-semibold">Home</Link>
          <Link className="lg:ml-6 text-black font-semibold">Shop</Link>
          <Link className="lg:ml-6 text-black font-semibold">Blog</Link>
          <Link className="lg:ml-6 text-black font-semibold">About</Link>
          <Link className="lg:ml-6 text-black font-semibold">Contract</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
