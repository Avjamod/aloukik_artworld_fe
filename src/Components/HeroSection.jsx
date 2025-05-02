import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <div className="hero bg-base-200 md:min-h-screen my-6 text-center">
        <div className="hero-content w-[90%] flex-col lg:flex-row-reverse">
          <img
            src="/Home_page.gif"
            className="md:max-w-lg rounded-lg shadow-2xl m-4"
          />
          <div>
            <h1 className="md:text-5xl text-2xl my-4 font-bold uppercase ">
              <span className="text-[#00638F] ">Aloukik</span> Artworld
            </h1>
            <p className="md:py-6 py-2 md:text-md text-sm my-3">
              Welcome to Aloukik Artworld, where creativity takes center stage.
              We specialize in delivering high-quality VFX and animation
              services that transform imagination into stunning visual
              experiences. Our team blends artistic vision with advanced
              technology to craft stories that captivate and inspire. Whether
              it's for film, advertising, or digital media, we bring ideas to
              life with precision and flair. Join us on a journey where every
              frame tells a story beyond the ordinary.
            </p>
            <Link to="/about/company">
              <button className="btn btn-primary">More...</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
