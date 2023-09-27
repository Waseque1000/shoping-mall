import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className=" bg-white" id="blog">
      <div className="blog-box">
        <div className="blog-img">
          <img src="../../../public/immage/blog/b1.jpg" />
        </div>

        <div className="blog-details ml-10">
          <h4 className="text-black font-bold text-3xl lg:mb-3 ">
            The Cotton-Jersey zip-up hoodie
          </h4>
          <p className="text-black  mb-3">
            Kickstarter man braid godard coloring book. Reslette waistocost
            selfies yrwolf chartreuse hexagon irony, godard....
          </p>
          <Link className="text-red-500 font-semibold" href="#">
            READ MORE......
          </Link>
        </div>
      </div>

      <div className="blog-box">
        <div className="blog-img">
          <img src="../../../public/immage/blog/b2.jpg" alt="blogImg" />
        </div>

        <div className="blog-details ml-10">
          <h4 className="text-black font-bold text-3xl lg:mb-3 ">
            How To Style A Quiff
          </h4>
          <p className="text-black  mb-3">
            Kickstarter man braid godard coloring book. Reslette waistocost
            selfies yrwolf chartreuse hexagon irony, godard....
          </p>
          <Link className="text-red-500 font-semibold" href="#">
            READ MORE......
          </Link>
        </div>
      </div>

      <div className="blog-box">
        <div className="blog-img">
          <img src="../../../public/immage/blog/b3.jpg" alt="blogImg" />
        </div>

        <div className="blog-details ml-10">
          <h4 className="text-black font-bold text-3xl lg:mb-3 ">
            Most-Have Skater Girl Item
          </h4>
          <p className="text-black  mb-3">
            Kickstarter man braid godard coloring book. Reslette waistocost
            selfies yrwolf chartreuse hexagon irony, godard....
          </p>
          <Link className="text-red-500 font-semibold" href="#">
            READ MORE......
          </Link>
        </div>
      </div>

      <div className="blog-box">
        <div className="blog-img">
          <img src="../../../public/immage/blog/b4.jpg" alt="blogImg" />
        </div>

        <div className="blog-details ml-10">
          <h4 className="text-black font-bold text-3xl lg:mb-3 ">
            Runway Inspired Trends
          </h4>
          <p className="text-black  mb-3">
            Kickstarter man braid godard coloring book. Reslette waistocost
            selfies yrwolf chartreuse hexagon irony, godard....
          </p>
          <Link className="text-red-500 font-semibold" href="#">
            READ MORE......
          </Link>
        </div>
      </div>

      <div className="blog-box">
        <div className="blog-img">
          <img src="../../../public/immage/blog/b5.jpg" alt="blogImg" />
        </div>

        <div className="blog-details ml-10">
          <h4 className="text-black font-bold text-3xl lg:mb-3 ">
            Cotton-Jersey Suit Match Cloth
          </h4>
          <p className="text-black  mb-3">
            Kickstarter man braid godard coloring book. Reslette waistocost
            selfies yrwolf chartreuse hexagon irony, godard....
          </p>
          <Link className="text-red-500 font-semibold" href="#">
            READ MORE......
          </Link>
        </div>
      </div>

      <div className="blog-box">
        <div className="blog-img">
          <img src="../../../public/immage/blog/b6.jpg" alt="blogImg" />
        </div>

        <div className="blog-details ml-10">
          <h4 className="text-black font-bold text-3xl lg:mb-3 ">
            AW20 Menswear Trends
          </h4>
          <p className="text-black  mb-3">
            Kickstarter man braid godard coloring book. Reslette waistocost
            selfies yrwolf chartreuse hexagon irony, godard....
          </p>
          <Link className="text-red-500 font-semibold" href="#">
            READ MORE......
          </Link>
        </div>
      </div>

      <div className="blog-box">
        <div className="blog-img">
          <img src="../../../public/immage/blog/b7.jpg" alt="blogImg" />
        </div>

        <div className="blog-details ml-10">
          <h4 className="text-black font-bold text-3xl lg:mb-3 ">
            The New Fashionable Home
          </h4>
          <p className="text-black  mb-3">
            Kickstarter man braid godard coloring book. Reslette waistocost
            selfies yrwolf chartreuse hexagon irony, godard....
          </p>
          <Link className="text-red-500 font-semibold" href="#">
            READ MORE......
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
