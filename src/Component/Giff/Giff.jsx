import React from "react";

const Giff = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="../../../public/immage/about/ezgif.com-video-to-gif.gif"
            className="max-w-3xl rounded-lg w-[100%] shadow-2xl"
          />
          <div>
            <h1 className="lg:text-5xl text-4xl mt-4 text-white font-bold">
              Box Office News!
            </h1>
            <p className="py-6 text-white font-semibold">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Giff;
