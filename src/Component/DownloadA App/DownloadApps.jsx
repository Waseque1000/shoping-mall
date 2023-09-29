import React from "react";
import "./Apss.css";
import { Link } from "react-router-dom";
import video from "../../../public/immage/about/1.mp4";

const DownloadApps = () => {
  return (
    <div className="lg:mt-10 mt-10   lg:pb-10">
      <section id="app" className="section-p1">
        <h1 className="lg:text-6xl text-3xl mb-4 text-black font-bold lg:pb-10">
          Download Our <Link href="#">App</Link>
        </h1>
        <div className="video">
          <video src={video} autoPlay muted loop></video>
        </div>
      </section>
    </div>
  );
};

export default DownloadApps;
