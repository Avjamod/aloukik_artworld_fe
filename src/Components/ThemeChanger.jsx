// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addtheme } from "../utils/themeSlice";

// const ThemeChanger = () => {
//   const [theme, setTheme] = useState(true);
//   const dispatch = useDispatch();
//   const handleTheme = () => {
//     setTheme(!theme);
//     if (theme) {
//       dispatch(addtheme("dark"));
//     } else {
//       dispatch(addtheme("light"));
//     }
//   };
//   return (
//     <div>
//       <label className="toggle text-base-content">
//         <input
//           type="checkbox"
//           value="synthwave"
//           className="theme-controller"
//           onChange={handleTheme}
//         />

//         <svg
//           aria-label="sun"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//         >
//           <g
//             strokeLinejoin="round"
//             strokeLinecap="round"
//             strokeWidth="2"
//             fill="none"
//             stroke="currentColor"
//           >
//             <circle cx="12" cy="12" r="4"></circle>
//             <path d="M12 2v2"></path>
//             <path d="M12 20v2"></path>
//             <path d="m4.93 4.93 1.41 1.41"></path>
//             <path d="m17.66 17.66 1.41 1.41"></path>
//             <path d="M2 12h2"></path>
//             <path d="M20 12h2"></path>
//             <path d="m6.34 17.66-1.41 1.41"></path>
//             <path d="m19.07 4.93-1.41 1.41"></path>
//           </g>
//         </svg>

//         <svg
//           aria-label="moon"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//         >
//           <g
//             strokeLinejoin="round"
//             strokeLinecap="round"
//             strokeWidth="2"
//             fill="none"
//             stroke="currentColor"
//           >
//             <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
//           </g>
//         </svg>
//       </label>
//     </div>
//   );
// };

// export default ThemeChanger;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addtheme } from "../utils/themeSlice";

const ThemeChanger = () => {
  const dispatch = useDispatch();

  // Initialize theme state from localStorage or default to true (light)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? false : true; // false = dark, true = light
  });

  // Sync theme with localStorage and Redux store on theme change
  useEffect(() => {
    const selectedTheme = theme ? "light" : "dark";
    localStorage.setItem("theme", selectedTheme);
    dispatch(addtheme(selectedTheme));

    // Optional: Set `data-theme` attribute for Tailwind/DaisyUI
    document.documentElement.setAttribute("data-theme", selectedTheme);
  }, [theme, dispatch]);

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div>
      <label className="toggle text-base-content">
        <input
          type="checkbox"
          className="theme-controller"
          onChange={handleTheme}
          checked={!theme} // checkbox on = dark mode
        />
        {/* Sun icon */}
        <svg
          aria-label="sun"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </g>
        </svg>
        {/* Moon icon */}
        <svg
          aria-label="moon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </g>
        </svg>
      </label>
    </div>
  );
};

export default ThemeChanger;
