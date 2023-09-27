import React from "react";
import ShopHero from "../ShopHero/ShopHero";
import ShopProducts from "../Shop-featureproducts/shopProducts";
import Newsletter from "../Newsletter/Newsletter";

const Shop = () => {
  return (
    <div className="bg-white">
      <ShopHero />
      <ShopProducts />
    </div>
  );
};

export default Shop;
