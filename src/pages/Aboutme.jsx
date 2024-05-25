import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Aboutme = () => {
  return (
    <div className="py-32 bg-[#F6F5F2]">
      <h1 class="text-4xl text-center font-bold pb-10">
        <span class="border-b-4 border-[#FF5F00]">ABOUT ME</span>
      </h1>
      <p className="text-center text-gray-800 text-xl font-serif px-56">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>
      <div className="grid grid-cols-2 pt-32">
        <div className="px-16">
          <h1 className="text-3xl font-bold pb-10">Get to know me!</h1>
          <p className="text-xl text-gray-800 font-serif text-justify pb-10">
            I'm a budding web developer with a solid foundation in HTML, CSS,
            and JavaScript. I have experience building websites using Vite and
            React, leveraging the power and flexibility these technologies offer
            for creating dynamic and responsive web applications. In addition to
            front-end development, I am proficient in using Firebase for both
            authentication and database management, ensuring secure and
            efficient handling of user data. Currently, I am focused on
            expanding my portfolio with diverse projects that showcase my
            abilities and creativity. I am always eager to learn new
            technologies and enhance my skills to deliver high-quality web
            solutions. I'm open to Job opportunities where I can contribute,
            learn and grow. If you have a good opportunity that matches my
            skills and experience then don't hesitate to contact me.
          </p>
          <div className="flex gap-3">
            <button className="bg-[#FF5F00] px-5 py-1 text-xl text-white rounded-md font-semibold hover:bg-orange-600 focus:outline-none">
              <a href="#contact">Contact me</a>
            </button>
            <button className="text-[#FF5F00] rounded-md focus:outline-none">
              <Link
                to="https://www.linkedin.com/in/bibhuti-bhusan-nayak-200a64218"
                target="_blank"
              >
                <FaLinkedin size={50} />
              </Link>
            </button>
            <button className="text-[#FF5F00] rounded-md focus:outline-none">
              <Link to="https://github.com/bibhuti147" target="_blank">
                <FaSquareGithub size={50} />
              </Link>
            </button>
          </div>
        </div>
        <div className="px-6">
          <h1 className="text-3xl font-bold pb-10">My Skills</h1>
          <ul className="grid grid-cols-5 gap-3">
            <li className="bg-[#E2DFD0] text-lg text-center text-[#FF5F00] font-semibold py-2">
              HTML
            </li>
            <li className="bg-[#E2DFD0] text-lg text-center text-[#FF5F00] font-semibold py-2">
              CSS
            </li>
            <li className="bg-[#E2DFD0] text-lg text-center text-[#FF5F00] font-semibold py-2">
              JavaScript
            </li>
            <li className="bg-[#E2DFD0] text-lg text-center text-[#FF5F00] font-semibold py-2">
              REACT
            </li>
            <li className="bg-[#E2DFD0] text-lg text-center text-[#FF5F00] font-semibold py-2">
              C++
            </li>
            <li className="bg-[#E2DFD0] text-lg text-center text-[#FF5F00] font-semibold py-2">
              Tailwind CSS
            </li>
            <li className="bg-[#E2DFD0] text-lg text-center text-[#FF5F00] font-semibold py-2">
              SASS
            </li>
            <li className="bg-[#E2DFD0] text-lg text-center text-[#FF5F00] font-semibold py-2">
              GIT & GitHub
            </li>
            <li className="bg-[#E2DFD0] text-lg text-center text-[#FF5F00] font-semibold py-2">
              Firebase
            </li>
            <li className="bg-[#E2DFD0] text-lg text-center text-[#FF5F00] font-semibold py-2">
              SQL
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
