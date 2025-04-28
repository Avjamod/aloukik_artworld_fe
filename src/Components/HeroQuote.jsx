import React from "react";
import { useSelector } from "react-redux";

const HeroQuote = () => {
  const { heroQuotes } = useSelector((store) => store.homeData) || {};
  return (
    <div>
      <div
        className="hero min-h-screen h-[80%]"
        style={{
          backgroundImage:
            "url(https://cdn.pond5.com/blog/rs/uploads/2021/02/VFX_Render_GIF.gif)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 md:text-8xl text-4xl font-bold opacity-70 uppercase">
              {heroQuotes}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroQuote;
