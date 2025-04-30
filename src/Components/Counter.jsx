import React from "react";
import Count from "./Count";

const Counter = () => {
  return (
    <div className="flex justify-center uppercase ">
      <div className="stats shadow md:w-[90%] ">
        <>
          <Count value={100} message={"Projects"} />
          <Count value={72} message={"Happy Clients"} />
          <Count value={15} message={"Years Experience"} />
        </>
      </div>
    </div>
  );
};

export default Counter;
