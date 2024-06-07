import React, { useState } from "react";
import logo from "../assets/images/header.jpg";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Header = () => {
  const [isopen, setIsopen] = useState(false);

  const navList = (
    <ul className="md:flex md:my-4 pt-1 gap-12 font-bold text-base text-gray-800">
      <hr className="bg-gray-200 flex justify-center my-4 -ml-10 w-[150%] lg:hidden" />
      <li className="cursor-pointer py-0 md:py-0 hover:text-[#FF5F00]">
        <a href="#home">HOME</a>
      </li>
      <hr className="bg-gray-200 flex justify-center my-4 -ml-10 w-[150%] lg:hidden" />
      <li className="cursor-pointer py-1 md:py-0 hover:text-[#FF5F00]">
        <a href="#aboutme">ABOUT</a>
      </li>
      <hr className="bg-gray-200 flex justify-center my-4 -ml-10 w-[150%] lg:hidden" />
      <li className="cursor-pointer py-1 md:py-0 hover:text-[#FF5F00]">
        <a href="#projects">PROJECTS</a>
      </li>
      <hr className="bg-gray-200 flex justify-center my-4 -ml-10 w-[150%] lg:hidden" />
      <li className="cursor-pointer mb-4 py-1 md:py-0 hover:text-[#FF5F00]">
        <a href="#contact">CONTACT</a>
      </li>
    </ul>
  );

  return (
    <div className="px-5 md:px-8 pt-4 md:pb-2 pb-4 flex justify-between fixed top-0 z-50 bg-zinc-200 shadow-lg w-full">
      <div className="flex gap-2">
        <img
          src={logo}
          className="w-9 md:w-16 h-9 md:h-16 rounded-full transform transition ease-in-out hover:scale-125"
        />
        <h1 className="text-sm md:text-xl mt-[9px] md:mt-0 md:pt-[17px] font-bold hover:text-[#FF5F00] cursor-default">
          BIBHUTI BHUSAN NAYAK
        </h1>
      </div>
      <div className="flex gap-4 md:gap-12">
        <div className="hidden md:block">{navList}</div>
        <div className="-mt-1">
          <Link
            to="https://docs.google.com/document/d/1dpH185alkERXOYv-Y2GcXpfJIf8_ELqoE2P3j_YIDR8/edit?usp=sharing"
            target="_blank"
          >
            <button className="hidden lg:block rounded-full px-6 py-4 mt-2 text-base text-white bg-[#FF5F00] font-bold focus:outline-none">
              DOWNLOAD CV
            </button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsopen(!isopen)}>
          <VscThreeBars size={30} />
        </button>
      </div>
      {isopen && (
        <div
          className="lg:hidden absolute top-[56px] right-0 px-6 bg-zinc-200 text-right w-full shadow-xl"
          onClick={() => setIsopen(!isopen)}
        >
          {navList}
        </div>
      )}
    </div>
  );
};

export default Header;
