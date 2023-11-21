import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Views/Navbar";
import Footer from "./Views/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
