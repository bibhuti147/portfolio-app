import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Aboutme = () => {
  return (
    <div className="py-32 bg-[#F6F5F2]">
      <h1 class="text-3xl md:text-4xl text-center font-bold pb-10">
        <span class="border-b-4 border-[#FF5F00]">ABOUT ME</span>
      </h1>
      <p className="text-justify leading-relaxed hyphens-auto md:text-center text-gray-800 text-base md:text-xl font-serif px-8 md:px-56">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-24 md:pt-32">
        <div className="px-8 md:px-16">
          <h1 className="text-2xl md:text-3xl font-bold pb-10">
            Get to know me!
          </h1>
          <p className="text-base md:text-xl text-gray-800 font-serif text-justify leading-relaxed hyphens-auto px-1 pb-10">
            I'm a budding web developer with a solid foundation in HTML, CSS,
            and JavaScript. I have experience building websites using Vite and
            React, leveraging the power and flexibility these technologies offer
            for creating dynamic and adequately responsive web applications. In
            addition to front-end development, I am proficient in using Firebase
            for both authentication and database management, ensuring secure and
            efficient handling of user data. Currently, I am focused on
            expanding my portfolio with diverse projects that showcase my
            abilities and creativity. I am always eager to learn new
            technologies and enhance my skills to deliver high-quality web
            solutions. I'm open to Job opportunities where I can contribute,
            learn and grow. If you have a good opportunity that matches my
            skills and experience then don't hesitate to contact me.
          </p>
          <div className="flex gap-3">
            <button className="bg-[#FF5F00] shadow-xl px-5 py-1 text-xl text-white rounded-md font-semibold hover:bg-orange-600 focus:outline-none">
              <Link
                to="https://drive.google.com/file/d/1Qf4c7dDPGgTcKYOImsUpeJsySO4Cuv7g/view?usp=sharing"
                target="_blank"
              >
                Download CV
              </Link>
            </button>
            <button className="bg-[#FF5F00] shadow-xl rounded-md focus:outline-none">
              <Link
                to="https://www.linkedin.com/in/bibhuti-bhusan-nayak-200a64218"
                target="_blank"
              >
                <FaLinkedin className="text-white rounded-md" size={50} />
              </Link>
            </button>
            <button className="bg-[#FF5F00] shadow-xl rounded-md focus:outline-none">
              <Link to="https://github.com/bibhuti147" target="_blank">
                <FaSquareGithub className="text-white rounded-md" size={50} />
              </Link>
            </button>
          </div>
        </div>
        <div className="px-8 md:px-6 pt-2">
          <h1 className="text-2xl md:text-3xl font-bold pb-10">My Skills</h1>
          <ul className="grid grid-cols-3 md:grid-cols-5 gap-3">
            <li className="bg-[#E2DFD0] text-sm md:text-lg text-center text-[#FF5F00] font-semibold py-2">
              HTML
            </li>
            <li className="bg-[#E2DFD0] text-sm md:text-lg text-center text-[#FF5F00] font-semibold py-2">
              CSS
            </li>
            <li className="bg-[#E2DFD0] text-sm md:text-lg text-center text-[#FF5F00] font-semibold py-2">
              JavaScript
            </li>
            <li className="bg-[#E2DFD0] text-sm md:text-lg text-center text-[#FF5F00] font-semibold py-2">
              NEXT
            </li>
            <li className="bg-[#E2DFD0] text-sm md:text-lg text-center text-[#FF5F00] font-semibold py-2">
              REACT
            </li>
            <li className="bg-[#E2DFD0] text-sm md:text-lg text-center text-[#FF5F00] font-semibold py-2">
              C++
            </li>
            <li className="bg-[#E2DFD0] text-sm md:text-lg text-center text-[#FF5F00] font-semibold py-2">
              Tailwind CSS
            </li>
            <li className="bg-[#E2DFD0] text-sm md:text-lg text-center text-[#FF5F00] font-semibold py-2">
              SASS
            </li>
            <li className="bg-[#E2DFD0] text-sm md:text-lg text-center text-[#FF5F00] font-semibold py-2">
              GIT
            </li>
            <li className="bg-[#E2DFD0] text-sm md:text-lg text-center text-[#FF5F00] font-semibold py-2">
              Firebase
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
