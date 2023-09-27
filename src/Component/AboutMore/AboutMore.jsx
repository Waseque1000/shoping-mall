import React from "react";
import "./aboutMore.css";
import { Link } from "react-router-dom";

const AboutMore = () => {
  return (
    <section id="about-us" className="section-p1 lg:mt-4 flex items-center">
      <img
        className="shadow-lg rounded-xl w-[48%]"
        src="../../../public/immage/about/a6.jpg"
        alt="aboutUs"
      />

      <div className=" lg:pl-10 lg:pr-9">
        <h2 className="text-black text-2xl font-bold">Who We Are?</h2>
        <p className="text-black text-1xl items-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          facilis aut saepe in incidunt, placeat, a dolor eius sit officiis
          magni ipsa odit consequatur. Dolore nisi voluptas, voluptate unde
          aspernatur quisquam maiores tempora dicta, provident ut voluptates
          ommodi accusamus possimus. Quibusdam perferendis porro illum.
        </p>

        <Link className="text-black font-semibold  pt-2" to={"/"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Link>

        <br />
        <br />
        <div className="text-red-600 font-bold">
          <marquee>
            Between vacations, many daydream about what adventures the next trip
            holds. You can spend your days switching back and forth from looking
            at your favorite travel photos to trying to go about your day to day
            life. But a few friendly reminders that the next adventure is closer
            than you think can help you put your wanderlust to rest. And one of
            the best distractions comes with this list of travel quotes. Pick
            your favorite from the collection below and use it to inspire your
            next trip
          </marquee>
        </div>
      </div>
    </section>
  );
};

export default AboutMore;
