import React from "react";
import ThemeChanger from "./ThemeChanger";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-300 shadow-2xl fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost bg lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 uppercase font-bold rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>About</a>
                <ul className="p-2">
                  <li>
                    <Link to="/team"> Team</Link>
                  </li>
                  <li>
                    <Link to="/about/company">Company</Link>{" "}
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/services" className="hover:bg-base-100 ">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/contact"> Contact </Link>
              </li>
            </ul>
          </div>
          <img src="/public/logo.ico.png" className="md:w-[12%] w-[20%] " />
          <Link
            className="btn btn-ghost md:text-2xl text-xl  font-bold uppercase "
            to="/"
          >
            <span className="text-[#00638F] ">Aloukik</span> Artworld
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase font-bold textarea-md">
            <li>
              <details>
                <summary>About</summary>
                <ul className="p-2 ">
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/about/company">Company</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/services" className="hover:bg-base-100 ">
                Services
              </Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeChanger />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
