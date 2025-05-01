import React from "react";
import HeroQuote from "./HeroQuote";
import HeroSection from "./HeroSection";
import Counter from "./Counter";
import ServiceMain from "./ServiceMain";

const Home = () => {
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
