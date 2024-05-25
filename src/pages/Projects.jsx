import React from "react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";

const Projects = () => {
  return (
    <div className="py-32 bg-[#EEEEEE]">
      <h1 class="text-3xl text-center font-bold pb-10">
        <span class="border-b-4 border-[#FF5F00]">PROJECTS</span>
      </h1>
      <p className="text-center text-gray-800 text-xl font-serif px-56">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study.
      </p>
      <div className="pt-20">
        <div className="grid grid-cols-2 px-20 pt-10">
          <img
            src={project1}
            alt="/"
            className="transform transition-transform ease-in-out hover:scale-105"
          />
          <div className="px-16">
            <h1 className="text-2xl font-bold">Portfolio</h1>
            <p className="text-xl text-gray-800 font-serif text-justify pt-10">
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally.
            </p>
            <div className="flex gap-5 pt-10">
              <button className="bg-[#FF5F00] px-5 py-2 text-xl text-white rounded-md font-semibold hover:bg-orange-600 focus:outline-none">
                Code Study
              </button>
              <button className="bg-[#002379] px-5 py-2 text-xl text-white rounded-md font-semibold hover:bg-[#00215E] focus:outline-none">
                Live Site
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 px-20 pt-20">
          <img
            src={project2}
            alt="/"
            className="transform transition-transform ease-in-out hover:scale-105"
          />
          <div className="px-16">
            <h1 className="text-2xl font-bold">Odishaweather Blog Website</h1>
            <p className="text-xl text-gray-800 font-serif text-justify pt-10">
              Odishaweather is a successful Blog project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally.
            </p>
            <div className="flex gap-5 pt-10">
              <button className="bg-[#FF5F00] px-5 py-2 text-xl text-white rounded-md font-semibold hover:bg-orange-600 focus:outline-none">
                Code Study
              </button>
              <button className="bg-[#002379] px-5 py-2 text-xl text-white rounded-md font-semibold hover:bg-[#00215E] focus:outline-none">
                Live Site
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
