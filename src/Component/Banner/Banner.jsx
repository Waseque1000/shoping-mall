import React from "react";
import "./Bannder.css";

const Banner = () => {
  return (
    <section
      id="banner"
      className="section-m1 flex items-center justify-center flex-col   lg:pb-20 text-center h-[30vh] w-[100%]"
    >
      <h4 className="text-2xl text-white">Repair Services</h4>
      <h2 className="lg:text-4xl text-2xl p-2 text-white font-bold">
        Up To <span>70% Off</span> - All t-Shirts & Accessories
      </h2>
      <button className="  text-1xl px-5 py-2 rounded-md bg-white text-black mt-6 lg:-mb-36 hover:bg-[#088178] hover:text-white">
        Explore More
      </button>
    </section>
  );
};

export default Banner;
