import React from "react";
import imgn1 from "../../../public/immage/products/n1.jpg";
import imgn2 from "../../../public/immage/products/n2.jpg";
import imgn3 from "../../../public/immage/products/n3.jpg";
import imgn4 from "../../../public/immage/products/n4.jpg";
import imgn5 from "../../../public/immage/products/n5.jpg";
import imgn6 from "../../../public/immage/products/n6.jpg";
import imgn7 from "../../../public/immage/products/n7.jpg";
import imgn8 from "../../../public/immage/products/n8.jpg";

const NewProduct = () => {
  return (
    <div className="lg:pb-7 mt-7 lg:ml-8 lg:mr-8 lg:mt-20">
      {/* section -02 */}
      <div className="text-black lg:mb-10">
        <h1 className="lg:text-6xl font-bold text-center text-3xl mb-2">
          Featured Products
        </h1>
        <p className="lg:text-2xl text-center lg:mt-2">
          Summer Collection New Modern Design
        </p>
      </div>
      <div className="grid grid-rows-2   lg:pt-10 lg:grid-flow-col gap-4">
        <div className="pro border   lg:mb-5">
          <img src={imgn1} alt="product" />
          <div className="des">
            <span className="text-[#606063] pl-6 lg:pl-9 text-1xl">Adidas</span>
            <h5 className="text-black pl-4 lg:pl-6  text-2xl">
              Cartoon Astronaut T-Shirt
            </h5>

            <h4 className="text-[#088178]  pl-6 font-semibold text-2xl lg:pl-9">
              $75
            </h4>
          </div>
          <a href="#" id="cart-icon">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
        <div className="pro border">
          <img src={imgn2} alt="product" />
          <div className="des">
            <span className="text-[#606063] pl-6 lg:pl-9 text-1xl">Adidas</span>
            <h5 className="text-black pl-4 lg:pl-6 text-2xl">
              Cartoon Astronaut T-Shirt
            </h5>

            <h4 className="text-[#088178]  pl-6 font-semibold text-2xl lg:pl-9">
              $75
            </h4>
          </div>
          <a href="#" id="cart-icon">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
        <div className="pro border">
          <img src={imgn3} alt="product" />
          <div className="des">
            <span className="text-[#606063] pl-6 lg:pl-9 text-1xl">Adidas</span>
            <h5 className="text-black pl-4 lg:pl-6 text-2xl">
              Cartoon Astronaut T-Shirt
            </h5>

            <h4 className="text-[#088178]  pl-6 font-semibold text-2xl lg:pl-9">
              $75
            </h4>
          </div>
          <a href="#" id="cart-icon">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
        <div className="pro border">
          <img src={imgn4} alt="product" />
          <div className="des">
            <span className="text-[#606063] pl-6 lg:pl-9 text-1xl">Adidas</span>
            <h5 className="text-black pl-4 lg:pl-6 text-2xl">
              Cartoon Astronaut T-Shirt
            </h5>

            <h4 className="text-[#088178]  pl-6 font-semibold text-2xl lg:pl-9">
              $75
            </h4>
          </div>
          <a href="#" id="cart-icon">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
        <div className="pro border">
          <img src={imgn5} alt="product" />
          <div className="des">
            <span className="text-[#606063] pl-6 lg:pl-9 text-1xl">Adidas</span>
            <h5 className="text-black pl-4 lg:pl-6 text-2xl">
              Cartoon Astronaut T-Shirt
            </h5>

            <h4 className="text-[#088178]  pl-6 font-semibold text-2xl lg:pl-9">
              $75
            </h4>
          </div>
          <a href="#" id="cart-icon">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </div>

        <div className="pro border">
          <img src={imgn6} alt="product" />
          <div className="des">
            <span className="text-[#606063] pl-6 lg:pl-9 text-1xl">Adidas</span>
            <h5 className="text-black pl-4 lg:pl-6 text-2xl">
              Cartoon Astronaut T-Shirt
            </h5>

            <h4 className="text-[#088178]  pl-6 font-semibold text-2xl lg:pl-9">
              $75
            </h4>
          </div>
          <a href="#" id="cart-icon">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
        <div className="pro border">
          <img src={imgn7} alt="product" />
          <div className="des">
            <span className="text-[#606063] pl-6 lg:pl-9 text-1xl">Adidas</span>
            <h5 className="text-black pl-4 lg:pl-6 text-2xl">
              Cartoon Astronaut T-Shirt
            </h5>

            <h4 className="text-[#088178]  pl-6 font-semibold text-2xl lg:pl-9">
              $75
            </h4>
          </div>
          <a href="#" id="cart-icon">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
        <div className="pro border">
          <img src={imgn8} alt="product" />
          <div className="des">
            <span className="text-[#606063] pl-6 lg:pl-9 text-1xl">Adidas</span>
            <h5 className="text-black pl-4 lg:pl-6 text-2xl">
              Cartoon Astronaut T-Shirt
            </h5>

            <h4 className="text-[#088178]  pl-6 font-semibold text-2xl lg:pl-9">
              $75
            </h4>
          </div>
          <a href="#" id="cart-icon">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
