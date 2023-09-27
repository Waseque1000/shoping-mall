import React from "react";
import "./shophero.css";

const ShopHero = () => {
  return (
    <section className="hero bg-white h-[45vh] flex  w-[100%] flex-col justify-center items-center text-center">
      <h2 className="text-white text-6xl mb-5 font-bold">#StayHome</h2>
      <p className="text-white text2xl font-semibold">
        Save more with coupons & up to 70% off!
      </p>
    </section>
  );
};

export default ShopHero;
