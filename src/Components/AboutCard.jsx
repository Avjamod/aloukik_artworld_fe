import React from "react";

const AboutCard = ({ heading, para }) => {
  return (
    <div className="mb-16">
      <div className="uppercase text-lg font-bold ">{heading}</div>
      <p className="textarea-md font-light ">{para}</p>
    </div>
  );
};

export default AboutCard;
