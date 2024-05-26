import React, { useState } from "react";
import logo from "../assets/images/header.jpg";
import { VscThreeBars } from "react-icons/vsc";

const Header = () => {
  const [isopen, setIsopen] = useState(false);

  const navList = (
    <ul className="md:flex my-4 pt-1 gap-12 font-bold text-base text-gray-800">
      <hr className="bg-gray-400 flex justify-center my-4 -ml-10 w-[150%] lg:hidden" />
      <li className="cursor-pointer py-1 md:py-0 hover:text-[#FF5F00]">
        <a href="#home">HOME</a>
      </li>
      <hr className="bg-gray-400 flex justify-center my-4 -ml-10 w-[150%] lg:hidden" />
      <li className="cursor-pointer py-2 md:py-0 hover:text-[#FF5F00]">
        <a href="#aboutme">ABOUT</a>
      </li>
      <hr className="bg-gray-400 flex justify-center my-4 -ml-10 w-[150%] lg:hidden" />
      <li className="cursor-pointer py-2 md:py-0 hover:text-[#FF5F00]">
        <a href="#projects">PROJECTS</a>
      </li>
      <hr className="bg-gray-400 flex justify-center my-4 -ml-10 w-[150%] lg:hidden" />
      <li className="cursor-pointer py-2 md:py-0 hover:text-[#FF5F00]">
        <a href="#contact">CONTACT</a>
      </li>
    </ul>
  );

  return (
    <div
      className="px-5 md:px-8 py-4 flex justify-between fixed top-0 z-50 bg-[#F0EBE3] shadow-lg w-full"
      style={{ top: 0 }}
    >
      <div className="flex gap-2">
        <img
          src={logo}
          className="w-16 h-16 rounded-full transform transition ease-in-out hover:scale-125"
        />
        <h1 className="text-xl mt-5 md:mt-0 md:pt-[17px] font-bold hover:text-[#FF5F00] cursor-default">
          BIBHUTI BHUSAN NAYAK
        </h1>
      </div>
      <div className="flex gap-4 md:gap-12">
        <div className="hidden md:block">{navList}</div>
        <button className="rounded-full px-6 my-1 text-base text-white bg-gray-500 hover:bg-[#FF5F00] hover:text-white font-bold focus:outline-none">
          DOWNLOAD CV
        </button>
        <button className="md:hidden" onClick={() => setIsopen(!isopen)}>
          <VscThreeBars size={40} />
        </button>
      </div>
      {isopen && (
        <div
          className="lg:hidden absolute top-20 right-0 px-6 bg-[#F0EBE3] text-right w-full shadow-xl"
          onClick={() => setIsopen(!isopen)}
        >
          {navList}
        </div>
      )}
    </div>
  );
};

export default Header;
