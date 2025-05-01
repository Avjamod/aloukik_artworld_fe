import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="">
      <div className="px-4 pt-18">
        <h1 className="text-center bg-base-300 p-20 rounded-b-2xl font-bold text-4xl uppercase mb-8 ">
          Meet our team
        </h1>
      </div>
      <div className="text-center text-3xl uppercase font-bold p-10">
        "<span className="text-[#00638F]">Together</span>, we create the
        extraordinary."
      </div>
      <div className="grid md:grid-cols-3 m-4 ">
        <TeamCard
          name={"Dhaval"}
          about={"CEO and Head"}
          src={
            "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?t=st=1743006423~exp=1743010023~hmac=b1c21eb5942f0987439662594039137e819b9e858ebdf14f59908d64ec210445&w=826"
          }
        />
        <TeamCard
          name={"Jaypal"}
          about={"Matchmove supervisor"}
          src={
            "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?t=st=1743006931~exp=1743010531~hmac=a4ae0b3717a1ad119167c2d8c5fe052ec64b67130be9fb0ea817cd0c34f49564&w=826"
          }
        />
        <TeamCard
          name={"Sachin Makvana"}
          about={"Match Move Developer"}
          src={
            "https://img.freepik.com/free-vector/young-man-orange-hoodie_1308-175788.jpg?ga=GA1.1.463851474.1742881166&semt=ais_hybrid"
          }
        />
        <TeamCard
          name={"Rahul Aniyaliya"}
          about={"Match Move supeviser"}
          src={
            "https://img.freepik.com/free-vector/young-man-with-glasses-illustration_1308-174706.jpg?ga=GA1.1.463851474.1742881166&semt=ais_hybrid"
          }
        />
        <TeamCard
          name={"Aryan"}
          about={"Studio head"}
          src={
            "https://img.freepik.com/free-vector/smiling-young-man-glasses_1308-174702.jpg?ga=GA1.1.463851474.1742881166&semt=ais_hybrid"
          }
        />
      </div>
    </div>
  );
};

export default Team;
