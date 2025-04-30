import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceMain = () => {
  return (
    <div className="flex flex-col justify-center my-6 items-center md:min-h-screen text-center">
      <h3 className="md:text-6xl text-2xl font-bold uppercase mb-4 p-5 font-[Roboto Condensed]">
        Our Services
      </h3>
      <h2 className="md:text-3xl text-lg  font-bold my-10 uppercase">
        "Happiness is a by-product of an{" "}
        <span className="text-[#00638F]">effort</span> to make someone else
        <span className="text-[#00638F]"> happy</span>."
      </h2>
      <div className=" w-[90%]  grid md:grid-cols-3">
        <ServiceCard
          header={"Rotoscoping"}
          content={
            "Rotoscoping is one of the oldest animation techniques still in use. In the early days of cinema, rotoscoping meant tracing over live action footage frame by frame for use in animated films."
          }
        />
        <ServiceCard
          header={"Compositing"}
          content={
            "VFX compositing is the process of combining visual elements from different sources, like live-action footage and computer-generated imagery (CGI), to create a single, realistic-looking image or scene."
          }
        />
        <ServiceCard
          header={"PAINT & CLEANUP"}
          content={
            "Flawless visuals, down to the last pixel. Our paint and cleanup services remove unwanted elements, fix imperfections, and restore clarity to every frame. From erasing wires and rigs to repairing set inconsistencies, we deliver seamless, production-ready shots that elevate your visual narrative."
          }
        />
        <ServiceCard
          header={"MATCHMOVE"}
          content={
            "Accurate motion, seamless integration. Our matchmove services precisely track camera and object movements, ensuring perfect alignment of CG elements with live-action footage. Bring your vision to life with realistic and dynamic visual effects."
          }
        />
        <ServiceCard
          header={"CAMERA tracking"}
          content={
            "Camera tracking (3D tracking) is a process of video analysis that recreates camera movement in 3D space, and obtains the location of objects in the scene through point clouds.The 3D camera motion allows you to correctly composite 3D elements over your 2D footage on a post-production."
          }
        />
        <ServiceCard
          header={"Object tracking"}
          content={
            "Object tracking (geometry tracking) is an analyzing movement/deformation of an object in the video and transferring its trajectory to 3D space.Depending on your goals we will track the camera relative to a static object, track the motion of the object relative to a static camera or track the motion of the object relative to a moving camera."
          }
        />
        <ServiceCard
          header={"Rotomation"}
          content={
            "Bringing movement to life with accuracy. Our rotomation services recreate live-action performances in 3D, ensuring precise alignment between real and digital elements. Perfect for enhancing animations and integrating CG characters seamlessly."
          }
        />
        <ServiceCard
          header={"Animation"}
          content={
            "Transform ideas into motion. Our animation services bring characters, objects, and environments to life with fluid, realistic, and visually stunning animations. From 2D to 3D, we craft dynamic stories that captivate and engage."
          }
        />
        <ServiceCard
          header={"Video Editing"}
          content={
            "Crafting stories with precision. Our video editing services transform raw footage into polished, engaging narratives. From cutting-edge transitions to seamless storytelling, we deliver high-quality edits that captivate and leave a lasting impression."
          }
        />
      </div>
    </div>
  );
};

export default ServiceMain;
