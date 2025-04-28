import React, { useEffect } from "react";
import HeroQuote from "./HeroQuote";
import HeroSection from "./HeroSection";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addData } from "../utils/homeDataSlice";
import AboutMain from "./ServiceMain";
import Counter from "./Counter";
import ServiceMain from "./ServiceMain";

const Home = () => {
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:1111/getData");

      dispatch(addData(res?.data));
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <HeroQuote />
      <HeroSection />
      <ServiceMain />
      <Counter />
    </div>
  );
};

export default Home;
