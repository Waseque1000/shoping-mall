import React from "react";

const Feature = () => {
  return (
    <div>
      <section
        id="future"
        className="section-p1 flex lg:ml-20 lg:mt-40 lg:mp-40 "
      >
        <div className="fu-box  lg:ml-20">
          <img src={"../../../public/immage/features/f1.png"} alt="futures" />
          <h6 className="btn002 ml-5 mt-2  bg-[#cdebbc]">Free Shipping</h6>
        </div>

        <div className="fu-box  lg:ml-20">
          <img src={"../../../public/immage/features/f2.png"} alt="futures" />
          <h6 className="btn002 ml-5 mt-2 bg-[#d1ef82]">Online Order</h6>
        </div>

        <div className="fu-box  lg:ml-20">
          <img src={"../../../public/immage/features/f3.png"} alt="futures" />
          <h6 className="btn002 ml-7 mt-3 bg-[ #cdd4f8]">Save Money</h6>
        </div>

        <div className="fu-box  lg:ml-20">
          <img src={"../../../public/immage/features/f4.png"} alt="futures" />
          <h6 className="btn002 ml-7 mt-2 bg-[ #f6dbf6]">Promotions</h6>
        </div>

        <div className="fu-box  lg:ml-20">
          <img src={"../../../public/immage/features/f5.png"} alt="futures" />
          <h6 className="btn002 ml-8 mt-2 bg-[ #faede0]">Happy Sell</h6>
        </div>

        <div className="fu-box  lg:ml-20 lg:mb-20">
          <img src={"../../../public/immage/features/f6.png"} />
          <h6 className="btn002 ml-6 mt-2">F24/7 Support</h6>
        </div>
      </section>
    </div>
  );
};

export default Feature;
