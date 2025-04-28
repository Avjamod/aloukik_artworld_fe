import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../utils/themeSlice";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const ThemeController = () => {
  const [theme, setTheme] = useState("dark");
  const updatedTheme = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "lemonade",
    "coffee",
    "nord",
    "winter",
    "sunset",
  ];
  const handleThemeControl = async (theme) => {
    try {
      const res = await axios.put(BASE_URL + "/theme", { userTheme: theme });
      setTheme(theme);
      dispatch(changeTheme(theme));
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getTheme = async () => {
    try {
      const res = await axios.get(BASE_URL + "/theme");
      dispatch(changeTheme(res?.data?.theme));
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTheme();
  }, []);
  return (
    <div>
      <div className="dropdown w-30">
        <div tabIndex={0} role="button" className="btn w-[100%] m-1 ">
          {updatedTheme}
          <svg
            width="12px"
            height="12px"
            className="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content bg-base-300 rounded-box z-1  p-2 shadow-2xl max-h-60 overflow-y-auto "
        >
          {themes.map((t) => (
            <li key={t} onClick={() => handleThemeControl(t)}>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label={t}
                value={t}
                checked={theme === t}
                readOnly
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThemeController;
