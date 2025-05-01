import React from "react";
import Counter from "./Counter";

const staticServices = [
  {
    id: 1,
    title: "MATCHMOVE",
    description:
      "Accurate motion, seamless integration. Our matchmove services precisely track camera and object movements, ensuring perfect alignment of CG elements with live-action footage. Bring your vision to life with realistic and dynamic visual effects.",
    imageURL1: "/2_Matchmoving.jpg",
    imageURL2: "/2_Matchmoving_over.jpg",
  },
  {
    id: 2,
    title: "Rotomation",
    description:
      "Bringing movement to life with accuracy. Our rotomation services recreate live-action performances in 3D, ensuring precise alignment between real and digital elements. Perfect for enhancing animations and integrating CG characters seamlessly.",
    imageURL1: "/8_Rotomation_v1.jpg",
    imageURL2: "/8_Rotomation_v1_over.jpg",
  },
  {
    id: 3,
    title: "CAMERA Tracking",
    description:
      "Camera tracking (3D tracking) is a process of video analysis that recreates camera movement in 3D space, and obtains the location of objects in the scene through point clouds.The 3D camera motion allows you to correctly composite 3D elements over your 2D footage on a post-production.",
    imageURL1: "/1_Camera_tracking.jpg",
    imageURL2: "/1_Camera_tracking_over.jpg",
  },
  {
    id: 4,
    title: "Object Tracking",
    description:
      "Object tracking (geometry tracking) is an analyzing movement/deformation of an object in the video and transferring its trajectory to 3D space.Depending on your goals we will track the camera relative to a static object, track the motion of the object relative to a static camera or track the motion of the object relative to a moving camera.",
    imageURL1: "/3_Object_tracking.jpg",
    imageURL2: "/3_Object_tracking_over.jpg",
  },
  {
    id: 5,
    title: "Rotoscoping",
    description:
      "Rotoscoping is one of the oldest animation techniques still in use. In the early days of cinema, rotoscoping meant tracing over live action footage frame by frame for use in animated films.",
    imageURL1: "/Rotoscope-Motion-Tracking(1)(1).png",
    imageURL2: "/Rotoscope-Motion-Tracking.png",
  },
  {
    id: 6,
    title: "Compositing",
    description:
      "VFX compositing is the process of combining visual elements from different sources, like live-action footage and computer-generated imagery (CGI), to create a single, realistic-looking image or scene.",
    imageURL1: "/movies-before-after-visual-effects-37(1)(1).png",
    imageURL2: "/movies-before-after-visual-effects-37.png",
  },
  {
    id: 7,
    title: "PAINT & CLEANUP",
    description:
      "Flawless visuals, down to the last pixel. Our paint and cleanup services remove unwanted elements, fix imperfections, and restore clarity to every frame. From erasing wires and rigs to repairing set inconsistencies, we deliver seamless, production-ready shots that elevate your visual narrative.",
    imageURL1: "/1713277432565(1)(1).png",
    imageURL2: "/1713277432565().png",
  },

  {
    id: 8,
    title: "Video Editing",
    description:
      "Crafting stories with precision. Our video editing services transform raw footage into polished, engaging narratives. From cutting-edge transitions to seamless storytelling, we deliver high-quality edits that captivate and leave a lasting impression.",
    imageURL1: "/editing-cover.webp",
    imageURL2: "/istockphoto-1270608484-612x612.jpg",
  },
];

const ServicePage = () => {
  return (
    <div className="px-6 pt-18 mb-20">
      <h1 className="text-center bg-base-200 p-20 rounded-b-2xl font-bold text-5xl uppercase mb-8">
        Our Services
      </h1>
      <div className="pb-7">
        <p className="md:text-3xl text-2xl font-bold text-center uppercase mt-4 max-w-3xl mx-auto">
          "Bringing your
          <span className="text-[#00638F]"> vision</span> to life with <br />
          precision and
          <span className="text-[#00638F]"> creativity</span>."
        </p>
      </div>

      <div className="space-y-16 max-w-6xl mx-auto">
        {staticServices.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } bg-base-300 p-6 rounded-xl shadow-md`}
          >
            <figure
              className="diff aspect-16/9 w-full md:w-1/2 rounded-lg shadow-lg"
              tabIndex={0}
            >
              <div className="diff-item-1" role="img" tabIndex={0}>
                <img alt="daisy" src={service.imageURL1} />
              </div>
              <div className="diff-item-2" role="img">
                <img alt="daisy" src={service.imageURL2} />
              </div>
              <div className="diff-resizer"></div>
            </figure>
            <div className="md:w-1/2 md:pl-10 md:pr-10 mt-6 md:mt-0">
              <h2 className="text-3xl uppercase font-bold mb-4">
                {service.title}
              </h2>
              <p className="text-md text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Counter />
    </div>
  );
};

export default ServicePage;
