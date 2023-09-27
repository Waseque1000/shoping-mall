import React from "react";
import "./ContractMap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import {
  faClock,
  faEnvelope,
  faMobile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ContractMap = () => {
  return (
    <div className="bg-white">
      <section id="contact" className="section-p1 lg:pt-10 lg:pl-10 lg:pb-10">
        <div className="contact-details text-black">
          <span className="text-black lg:pb-6">GET IN TOUCH</span>
          <h2 className="text-black text-3xl font-bold">
            Visit one of our agency locations or contact us today
          </h2>
          <h3 className="text-2xl font-semibold text-black">Head Office</h3>
          <div className="location">
            <p>
              <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
              <p>56 Glassford street Glasgow G1 1UL New York</p>
            </p>

            <Link>
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              <p>contact@example.com</p>
            </Link>

            <Link>
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              <p>+9170058691</p>
            </Link>

            <Link>
              <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
              <p>Monday - Saturday: 9:00am to 16:00pm</p>
            </Link>
          </div>
        </div>

        {/*  */}
      </section>
    </div>
  );
};

export default ContractMap;
