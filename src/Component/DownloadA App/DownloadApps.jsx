import React from "react";
import "./Apss.css";
import { Link } from "react-router-dom";

const DownloadApps = () => {
  return (
    <div className="lg:mt-10  lg:pb-10">
      <section id="app" className="section-p1">
        <h1 className="text-6xl text-black font-bold lg:pb-10">
          Download Our <Link href="#">App</Link>
        </h1>
        <div className="video">
          <video
            src="../../../public/immage/about/1.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </section>
    </div>
  );
};

export default DownloadApps;
