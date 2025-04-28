import React from "react";

const Count = ({ value, message }) => {
  return (
    <div>
      <div className="stat  place-items-center p-10">
        <div className="stat-value font-extrabold text-2xl px-0 md:text-5xl ">
          {value} +
        </div>
        <div className="stat-desc text-xs md:textarea-lg font-bold">
          {message}
        </div>
      </div>
    </div>
  );
};

export default Count;
