import React from "react";
import "./Newsletter.css";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className="lg:flex pt-20 pb-20  justify-between items-center lg:pb-20 bg-[#041e42] section-p1 section-m1 "
    >
      <div className="newstext pb-11 p-4 lg:pl-10">
        <h4 className="text-2xl text-white font-bold">
          Sign Up For Newsletters
        </h4>
        <p className="text-1xl text-white font-semibold">
          Get E-mail update about our latest shop and
          <Link className="text-yellow-400 ml-3 ">special offers.</Link>
        </p>
      </div>

      <div className="form lg:pl-96 p-4   flex w-[100%]">
        <input
          className="w-[80%] p-3 rounded-md text-1xl"
          type="text"
          placeholder="Your email address"
        />
        <button className="bg-purple-700 px-7 py-2 rounded-xl text-white hover:bg-sky-600">
          Sign up
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
