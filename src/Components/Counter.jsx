import React from "react";
import Count from "./Count";
import { useSelector } from "react-redux";

const Counter = () => {
  const { counter, counterMessage } =
    useSelector((store) => store.homeData) || {};
  return (
    <div className="flex justify-center uppercase ">
      <div className="stats shadow md:w-[90%] ">
        {counter?.length > 0 && counterMessage?.length > 0 ? (
          <>
            <Count value={counter[0]} message={counterMessage[0]} />
            <Count value={counter[1]} message={counterMessage[1]} />
            <Count value={counter[2]} message={counterMessage[2]} />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Counter;
