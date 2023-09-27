import React from "react";
import "./About.css";
import AboutMore from "../AboutMore/AboutMore";
import DownloadApps from "../DownloadA App/DownloadApps";
import Feature from "../Feature/Feature";
import Giff from "../Giff/Giff";

const About = () => {
  return (
    <div className="bg-white">
      <section className="hero bg-white h-[45vh] flex  w-[100%] flex-col justify-center items-center text-center">
        <h2 className="text-white text-6xl mb-5 font-bold">#KnowUs</h2>
        <p className="text-white text2xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </section>
      <AboutMore />
      <DownloadApps />
      <Feature />
      <Giff />
    </div>
  );
};

export default About;
