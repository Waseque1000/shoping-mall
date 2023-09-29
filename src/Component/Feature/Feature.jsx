import React from "react";
import img1 from "../../../public/immage/features/f2.png";
import img2 from "../../../public/immage/features/f1.png";
import img3 from "../../../public/immage/features/f3.png";
import img4 from "../../../public/immage/features/f4.png";
import img5 from "../../../public/immage/features/f5.png";
import img6 from "../../../public/immage/features/f6.png";

const Feature = () => {
  return (
    <div>
      <section
        id="future"
        className="section-p1 lg:flex p-6  grid grid-cols-2   lg:ml-20 lg:mt-40 lg:mp-40 "
      >
        <div className="fu-box mb-6  lg:ml-20">
          <img src={img2} alt="futures" />
          <h6 className="btn002 ml-5 mt-2  bg-[#cdebbc]">Free Shipping</h6>
        </div>

        <div className="fu-box mb-6  lg:ml-20">
          <img src={img1} alt="futures" />
          <h6 className="btn002 ml-5 mt-2 bg-[#d1ef82]">Online Order</h6>
        </div>

        <div className="fu-box mb-6  lg:ml-20">
          <img src={img3} alt="futures" />
          <h6 className="btn002 ml-7 mt-3 bg-[ #cdd4f8]">Save Money</h6>
        </div>

        <div className="fu-box mb-6  lg:ml-20">
          <img src={img4} alt="futures" />
          <h6 className="btn002 ml-7 mt-2 bg-[ #f6dbf6]">Promotions</h6>
        </div>

        <div className="fu-box mb-6  lg:ml-20">
          <img src={img5} alt="futures" />
          <h6 className="btn002 ml-8 mt-2 bg-[ #faede0]">Happy Sell</h6>
        </div>

        <div className="fu-box mb-6  lg:ml-20 lg:mb-20">
          <img src={img6} />
          <h6 className="btn002 ml-6 mt-2">F24/7 Support</h6>
        </div>
      </section>
    </div>
  );
};

export default Feature;
