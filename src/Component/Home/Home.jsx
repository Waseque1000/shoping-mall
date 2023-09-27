import React from "react";
import "./Home.css";
import Products from "../Products/Products";
import Banner from "../Banner/Banner";
import NewProduct from "../Products/NewProduct";
import SmallBanner from "../SmallBaner/SmallBanner";
import Smallbanner02 from "../SmallBanner02/Smallbanner02";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import Feature from "../Feature/Feature";

const Home = () => {
  return (
    <div className=" bg-white  ">
      <section className="lg:pl-40" id="hero">
        <h4 className="hh4 text-2xl font-bold">Trade-in-offer</h4>
        <h2 className="text-4xl text-black font-semibold">
          Supper value deals
        </h2>
        <h1 className="hn1 text-7xl font-semibold lg:mb-5">On all products</h1>
        <p className="text-2xl text-black lg:mb-3">
          Save more with coupons & up to 70% off!
        </p>
        <button className="btn-01">SHOP NOW</button>
      </section>
      {/* new section */}
      <section>
        <Feature /> <Products />
        <Banner />
        <NewProduct />
        <SmallBanner />
        <Smallbanner02 />
      </section>
    </div>
  );
};

export default Home;
