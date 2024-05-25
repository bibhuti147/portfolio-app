import React from "react";

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
            I'm a Frontend Focused Web Developer building and managing the
            Front-end of Websites and Web Applications that leads to the success
            of the overall product. Check out some of my work in the Projects
            section. I also like sharing content related to the stuff that I
            have learned over the years in Web Development so it can help other
            people of the Dev Community. Feel free to Connect or Follow me on my
            Linkedin and Instagram where I post useful content related to Web
            Development and Programming I'm open to Job opportunities where I
            can contribute, learn and grow. If you have a good opportunity that
            matches my skills and experience then don't hesitate to contact me.
          </p>
          <button className="bg-[#FF5F00] px-5 py-2 text-xl text-white rounded-md font-semibold hover:bg-orange-600 focus:outline-none">
            Contact me
          </button>
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
              FireBase
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
