import React from "react";
import "./Home.css";
import Products from "../Products/Products";
import Banner from "../Banner/Banner";
import NewProduct from "../Products/NewProduct";
import SmallBanner from "../SmallBaner/SmallBanner";
import Smallbanner02 from "../SmallBanner02/Smallbanner02";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";

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
        <section
          id="future"
          className="section-p1 flex lg:ml-20 lg:mt-40 lg:mp-40 "
        >
          <div className="fu-box lg:ml-20">
            <img src={"../../../public/immage/features/f1.png"} alt="futures" />
            <h6 className="btn002  bg-[#cdebbc]">Free Shipping</h6>
          </div>

          <div className="fu-box lg:ml-20">
            <img src={"../../../public/immage/features/f2.png"} alt="futures" />
            <h6 className="btn002 bg-[#d1ef82]">Online Order</h6>
          </div>

          <div className="fu-box lg:ml-20">
            <img src={"../../../public/immage/features/f3.png"} alt="futures" />
            <h6 className="btn002 bg-[ #cdd4f8]">Save Money</h6>
          </div>

          <div className="fu-box lg:ml-20">
            <img src={"../../../public/immage/features/f4.png"} alt="futures" />
            <h6 className="btn002 bg-[ #f6dbf6]">Promotions</h6>
          </div>

          <div className="fu-box lg:ml-20">
            <img src={"../../../public/immage/features/f5.png"} alt="futures" />
            <h6 className="btn002 bg-[ #faede0]">Happy Sell</h6>
          </div>

          <div className="fu-box lg:ml-20 lg:mb-20">
            <img src={"../../../public/immage/features/f6.png"} />
            <h6 className="btn002">F24/7 Support</h6>
          </div>
        </section>
        <Products />
        <Banner />
        <NewProduct />
        <SmallBanner />
        <Smallbanner02 />
      </section>
    </div>
  );
};

export default Home;
