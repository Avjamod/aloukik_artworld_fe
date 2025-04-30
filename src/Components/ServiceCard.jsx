import React from "react";

const ServiceCard = ({ header, content }) => {
  return (
    <div>
      <div className="card bg-base-100 rounded-box grid  grow place-items-center m-4 ">
        <h2 className="font-bold text-xl uppercase ">{header}</h2>
        <p className="textarea-md p-4 text-center">{content}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
