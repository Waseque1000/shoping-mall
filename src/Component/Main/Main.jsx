import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Newsletter from "../Newsletter/Newsletter";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Main;
