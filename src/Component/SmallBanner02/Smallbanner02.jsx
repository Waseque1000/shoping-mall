import React from "react";
import "./small02.css";

const Smallbanner02 = () => {
  return (
    <section
      id="banner3"
      className="lg:flex  justify-between items-center p-20"
    >
      <div className="banner-box h-2/5">
        <h2 className="text-white font-bold text-2xl">SEASONAL SALE</h2>
        <h3 className="text-red-600 font-bold">Winter Collection 50% Off</h3>
      </div>

      <div className="banner-box h-2/5 banner-box2">
        <h2 className="text-white font-bold text-2xl">
          NEW FOOTWEAR COLLECTION
        </h2>
        <h3 className="text-red-600 font-bold">Spring / Summer 2022</h3>
      </div>

      <div className="banner-box h-2/5 banner-box3">
        <h2 className="text-white font-bold text-2xl">T-SHIRTS</h2>
        <h3 className="text-red-600 font-bold">New Trendy Prints</h3>
      </div>
    </section>
  );
};

export default Smallbanner02;
