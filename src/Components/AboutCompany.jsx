import React from "react";
import Counter from "./Counter";
import AboutCard from "./AboutCard";

const AboutCompany = () => {
  return (
    <div className="">
      <div className="px-4 pt-18 ">
        <h1 className="text-center bg-base-300 p-20 rounded-b-2xl font-bold text-4xl uppercase mb-8 ">
          About Company
        </h1>
      </div>
      <div className="md:flex mb-20 ">
        <div className="bg-base-100 md:w-[50%] p-4 ">
          <p className="uppercase md:text-3xl text-2xl font-extrabold mb-10">
            "Turning <span className="text-[#00638F]">imagination</span> into
            breathtaking on-screen reality."
          </p>

          <AboutCard
            heading={"Why Choose Us"}
            para={
              "At Aloukik Artworld, we are passionate about transforming imagination into stunning on-screen reality. Our commitment goes beyond delivering visuals—we craft immersive experiences that captivate audiences worldwide. With years of expertise, we have successfully delivered high-quality VFX for feature films, web series, advertisements, and digital platforms. Every frame we create is a testament to our dedication to innovation, precision, and storytelling excellence."
            }
          />
          <AboutCard
            heading={"How We Work"}
            para={
              "Our greatest asset is our people—a team of highly skilled and creative professionals who bring stories to life with unmatched attention to detail. We thrive under pressure, meeting the most demanding deadlines while maintaining exceptional quality standards. Our collaborative approach and cutting-edge technology empower us to push the boundaries of visual storytelling. Innovation is at the heart of everything we do. From developing custom tools to streamline workflows to adapting seamlessly to remote production, we embrace challenges with creativity and agility. Whether it's delivering complex sequences or handling large-scale projects, we consistently deliver solutions that exceed expectations."
            }
          />
          <AboutCard
            heading={"Our Vision"}
            para={
              "At Aloukik Artworld, our vision is to redefine the boundaries of imagination by delivering cutting-edge VFX solutions that transform ideas into breathtaking visual experiences. We aim to be a global leader in the visual effects industry, empowering storytellers to bring their creative visions to life with unparalleled realism and innovation.Our long-term goal is to continuously push the limits of technology and artistry, setting new industry standards while fostering a collaborative environment that nurtures talent and creativity. We are committed to creating impactful visuals that leave a lasting impression, shaping the future of entertainment, and inspiring audiences worldwide."
            }
          />
          <AboutCard
            heading={"Our Mission"}
            para={
              "At Aloukik Artworld, our mission is to deliver exceptional visual effects that enhance storytelling and captivate audiences. We are dedicated to combining creativity with cutting-edge technology to provide innovative and high-quality VFX solutions for films, television, and digital media. Our focus is on fostering a culture of excellence, collaboration, and continuous learning. We strive to empower our clients by turning their visions into reality while maintaining the highest standards of precision, efficiency, and artistic integrity. Through our work, we aim to push creative boundaries and set new benchmarks in the VFX industry."
            }
          />
        </div>

        <div className="relative p-4 md:w-[50%] mb-85">
          <img
            className="w-[80%]  shadow-lg"
            src="https://vitrina.ai/wp-content/uploads/2024/05/DALL%C2%B7E-2024-05-10-13.17.01-An-immersive-view-of-a-Hollywood-VFX-production-studio-illustrating-the-complex-process-of-creating-movie-visual-effects.-The-scene-should-show-artis.webp"
            alt="Image 1"
          />
          <img
            className="absolute md:top-57 top-35 md:left-30 left-26 w-[75%] z-1  shadow-xl"
            src="https://theyard-vfx.com/wp-content/uploads/2024/07/Design-sans-titre-2024-07-01T183946.085.png"
            alt="Image 2"
          />
          <img
            className="absolute md:top-120 top-65 md:left-10  w-[75%] z-1  shadow-xl"
            src="https://iacg.co.in/wp-content/uploads/vfx_Future_1.png"
            alt="Image 2"
          />
          <img
            className="absolute md:top-170 top-90 md:left-30 left-26 w-[75%]  shadow-xl"
            src="https://images.ctfassets.net/v7wr16nrr0mz/jLTFV2iIm4dygjD5CmLtO/acc35cf4bf95feb192711216f51093db/jellyfish-pictures-workers-1920x1080.jpg?w=1600&h=900&fit=fill&f=center&fm=webp"
            alt="Image 2"
          />
        </div>
      </div>
      <Counter />
    </div>
  );
};

export default AboutCompany;
