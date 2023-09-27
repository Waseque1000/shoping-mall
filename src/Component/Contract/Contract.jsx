import React from "react";
import "./Contract.css";
import ContractMap from "../ContractMap/ContractMap";
import ContractForm from "../ContractForm/ContractForm";

const Contract = () => {
  return (
    <div>
      <section className="hero bg-white h-[45vh] flex  w-[100%] flex-col justify-center items-center text-center">
        <h2 className="text-white text-6xl mb-5 font-bold">#KnowUs</h2>
        <p className="text-white text2xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </section>
      <ContractMap />
      <ContractForm />
    </div>
  );
};

export default Contract;
