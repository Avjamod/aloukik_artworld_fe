import React from "react";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const { heroDescription } = useSelector((store) => store.homeData) || {};

  return (
    <div>
      <div className="hero bg-base-200 md:min-h-screen my-6 text-center">
        <div className="hero-content w-[90%] flex-col lg:flex-row-reverse">
          <img
            src="/Home_page.gif"
            className="md:max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="md:text-4xl text-xl font-bold uppercase ">
              <span className="text-[#00638F]">Aloukik</span> Artworld
            </h1>
            <p className="md:py-6 py-2 md:text-md text-sm ">
              {heroDescription}
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
