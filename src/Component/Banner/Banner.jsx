import React from "react";
import "./Bannder.css";

const Banner = () => {
  return (
    <section id="banner" className="section-m1 lg:pb-20">
      <h4 className="text-2xl text-white">Repair Services</h4>
      <h2 className="text-4xl text-white font-bold">
        Up To <span>70% Off</span> - All t-Shirts & Accessories
      </h2>
      <button className="normal">Explore More</button>
    </section>
  );
};

export default Banner;
