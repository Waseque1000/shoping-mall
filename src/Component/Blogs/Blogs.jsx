import React from "react";
import "./Blogs.css";
import Blog from "../BLog/Blog";

const Blogs = () => {
  return (
    <div>
      <section className="blog pt-40 pb-32 w-[100]">
        <h2 className="text-center text-white font-bold text-7xl">#ReadMore</h2>
        <p className="text-center text-white text-2xl font-semibold mt-3">
          Read all case studies about our product!
        </p>
      </section>
      <Blog />
    </div>
  );
};

export default Blogs;
