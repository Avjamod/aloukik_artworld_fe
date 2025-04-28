import React from "react";

const TeamCard = ({ name, about, src }) => {
  return (
    <div className="m-4">
      <div className="card card-side bg-base-100 shadow-sm">
        <figure className="w-[12rem] h-[16rem] flex items-center justify-center overflow-hidden rounded-lg">
          <img className="w-full h-full object-cover" src={src} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-600">{about}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-[#008dca] hover:bg-[#027bb3]">
              Watch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
