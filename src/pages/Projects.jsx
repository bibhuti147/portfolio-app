import React from "react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="py-20 md:py-32 bg-[#EEEEEE]">
      <h1 class="text-3xl md:text-4xl text-center font-bold pb-10">
        <span class="border-b-4 border-[#FF5F00]">PROJECTS</span>
      </h1>
      <p className="text-justify leading-relaxed hyphens-auto md:text-center text-gray-800 text-base md:text-xl font-serif px-8 md:px-56">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study.
      </p>
      <div className="pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 px-7 md:px-20 pt-10">
          <img
            src={project1}
            alt="/"
            className="h-[110%] md:h-fit transform transition-transform ease-in-out hover:scale-105"
          />
          <div className="md:px-16 mt-10 md:mt-0">
            <h1 className="text-2xl font-bold text-center md:text-left">
              Portfolio
            </h1>
            <p className="text-base md:text-xl text-gray-800 font-serif text-justify leading-relaxed hyphens-auto pt-5 md:pt-10">
              I have created a personal portfolio website using Vite and React,
              with Tailwind CSS for styling. This project showcases my ability
              to build modern, responsive web applications efficiently. The
              combination of Vite's fast build tooling, React's powerful
              component-based architecture, and Tailwind CSS's utility-first
              approach has allowed me to create a visually appealing and highly
              functional portfolio. Through this project, I demonstrate my
              skills in front-end development and my keen eye for design.
            </p>
            <div className="flex gap-5 pt-10">
              <button className="bg-[#FF5F00] px-5 py-2 text-xl text-white rounded-md font-semibold hover:bg-orange-600 focus:outline-none">
                <Link
                  to="https://github.com/bibhuti147/portfolio-app"
                  target="_blank"
                >
                  Code Study
                </Link>
              </button>
              <button className="bg-[#002379] px-5 py-2 text-xl text-white rounded-md font-semibold hover:bg-[#00215E] focus:outline-none">
                <Link to="#" target="_blank">
                  Live Site
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-7 md:px-20 pt-24">
          <img
            src={project2}
            alt="/"
            className="transform transition-transform ease-in-out hover:scale-105"
          />
          <div className="md:px-16 mt-10 md:mt-0">
            <h1 className="text-2xl font-bold text-center md:text-left">
              Odishaweather Blog Website
            </h1>
            <p className="text-base md:text-xl text-gray-800 font-serif text-justify leading-relaxed hyphens-auto pt-5 md:pt-10">
              Odishaweather is a blog website i recently created for a client
              using React and Vite, styled with Tailwind CSS. The project
              integrates Firebase for authentication and database management,
              enabling secure and efficient data handling. The platform allows
              the client and their fellow admins to easily post blogs, while
              users can view these posts and interact with them by liking and
              commenting after logging in. This project highlights my ability to
              build full-featured web applications that are both user-friendly
              and visually appealing.
            </p>
            <div className="flex gap-5 pt-10">
              <button className="bg-[#FF5F00] px-5 py-2 text-xl text-white rounded-md font-semibold hover:bg-orange-600 focus:outline-none">
                <Link
                  to="https://github.com/bibhuti147/odisha-weather-app"
                  target="_blank"
                >
                  Code Study
                </Link>
              </button>
              <button className="bg-[#002379] px-5 py-2 text-xl text-white rounded-md font-semibold hover:bg-[#00215E] focus:outline-none">
                <Link to="https://odishaweather.com/" target="_blank">
                  Live Site
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
