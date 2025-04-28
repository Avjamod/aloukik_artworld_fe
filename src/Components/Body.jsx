import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const theme = useSelector((store) => store?.theme);
  return (
    <div data-theme={theme}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
