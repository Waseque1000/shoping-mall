import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className="bg-white -mt-10 pt-10">
      <div className="section-p1 flex flex-wrap  justify-between lg:pl-8 lg:mt-8 lg:pr-8">
        <div className=" flex flex-col lg:mb-14  ">
          <img
            className="h-50 w-52"
            src="../../../public/immage/logo.png"
            alt="logo"
          />
          <h4 className="text-2xl pb-6 mt-7 text-black font-semibold">
            Contact
          </h4>
          <p className="text-1xl font-semibold text-black">
            <strong>Address: </strong>562 Wellington Road, Street 32. San
            Francisco
          </p>
          <p className="text-1xl font-semibold text-black">
            <strong>Phone: </strong>+012222365 / (+91) 0123456789
          </p>
          <p className="text-1xl font-semibold text-black">
            <strong>Hours: </strong>10:00 - 18:00. Mon - Sat
          </p>

          <div className="follow">
            <h4 className="tex-2xl text-black font-bold">Follow</h4>
            <div className="lg:pt-6">
              <Link>
                <FontAwesomeIcon
                  className="text-3xl "
                  icon={faFacebook}
                ></FontAwesomeIcon>
              </Link>
              <Link>
                <FontAwesomeIcon
                  className="text-3xl lg:ml-4"
                  icon={faTwitter}
                ></FontAwesomeIcon>
              </Link>
              <Link>
                <FontAwesomeIcon
                  className="text-3xl lg:ml-4"
                  icon={faLinkedin}
                ></FontAwesomeIcon>
              </Link>
              <Link>
                <FontAwesomeIcon
                  className="text-3xl lg:ml-4"
                  icon={faGithub}
                ></FontAwesomeIcon>
              </Link>
              <Link>
                <FontAwesomeIcon
                  className="text-3xl lg:ml-4"
                  icon={faInstagram}
                ></FontAwesomeIcon>
              </Link>
            </div>
          </div>
        </div>

        <div className=" ">
          <h4 className="text-2xl text-black font-semibold mb-3">About</h4>
          <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
          <div className="flex flex-col">
            <Link className="font-semibold mt-3 text-black" href="#">
              About Us
            </Link>
            <Link className="font-semibold mt-3 text-black" href="#">
              Delivery Information
            </Link>
            <Link className="font-semibold mt-3 text-black" href="#">
              Privacy Policy
            </Link>
            <Link className="font-semibold mt-3 text-black" href="#">
              Terms & Conditions
            </Link>
            <Link className="font-semibold mt-3 text-black" href="#">
              Contact Us
            </Link>
          </div>
        </div>

        <div className=" ">
          <h4 className="text-2xl text-black font-semibold mb-3">My Account</h4>
          <div className="flex flex-col lg:pl-3">
            <Link className="font-semibold mt-3 text-black" href="#">
              Sign In
            </Link>
            <Link className="font-semibold mt-3 text-black" href="#">
              View Cart
            </Link>
            <Link className="font-semibold mt-3 text-black" href="#">
              My Wishlist
            </Link>
            <Link className="font-semibold mt-3 text-black" href="#">
              Track My Order
            </Link>
            <Link className="font-semibold mt-3 text-black" href="#">
              Help
            </Link>
          </div>
        </div>

        <div className="col install">
          <h4 className="text-black font-extrabold lg:mb-4">Install App</h4>
          <p className="text-1xl font-semibold text-black">
            Form App Store or Google Play
          </p>
          <div className="">
            <Link>
              {" "}
              <img
                className="mb-5 mt-2"
                src="../../../public/immage/pay/play.jpg"
                alt="logo"
              />
            </Link>

            <Link>
              {" "}
              <img
                className="mb-5 mt-2"
                src=" ../../../../../public/immage/pay/app.jpg"
                alt="logo"
              />
            </Link>
          </div>
          <p className="text-1xl font-semibold text-black">
            Secured Payment Gateways
          </p>
          <Link>
            <img
              className="mt-5"
              src="../../../public/immage/pay/pay.png"
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div className="text-center lg:pb-10">
        <p className="text-2xl font-semibold text-black">
          &copy;2023 <strong>Waseque Arafat</strong> - the font-end developer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
