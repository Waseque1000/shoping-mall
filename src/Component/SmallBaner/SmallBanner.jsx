import React from "react";
import "./smbanner.css";

const SmallBanner = () => {
  return (
    <section
      id="sm-banner"
      className="section-p1 lg:px-40 lg:py-20 flex items-center justify-between flex-wrap"
    >
      <div className="banner-box h-[40vh] flex justify-center flex-col pl-9 items-start w-[435px] ">
        <h4 className="text-white text-2xl font-semibold">Crazy Deals</h4>
        <h2 className="text-white font-semibold text-1xl">Buy 1 Get 1 Free</h2>
        <span className="text-white mb-4">
          The best classic dress is on sale at cara
        </span>
        <button className="white  px-5 py-2 bg-red-400 text-white rounded-xl hover:bg-[#088178]">
          Learn More
        </button>
      </div>

      <div className="h-[40vh] pl-9 flex justify-center flex-col items-start w-[435px]  banner-box2">
        <h4 className="text-white text-2xl font-semibold">spring/summer</h4>
        <h2 className="text-white font-semibold text-1xl">upcoming season</h2>
        <span className="font-bold text-white mb-4">
          The best classic dress is on sale at cara
        </span>
        <button className="white bg-green-500 text-black px-5 py-2 rounded-lg">
          Collection
        </button>
      </div>
    </section>
  );
};

export default SmallBanner;
