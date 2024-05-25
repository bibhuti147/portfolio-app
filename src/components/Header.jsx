import React from "react";
import logo from "../assets/images/header.jpg";

const Header = () => {
  return (
    <div className="px-8 py-4 flex justify-between sticky top-0 z-50 bg-[#F0EBE3] shadow-lg">
      <div className="flex gap-2">
        <img
          src={logo}
          className="w-16 h-16 rounded-full transform transition ease-in-out hover:scale-125"
        />
        <h1 className="text-xl pt-[17px] font-bold hover:text-[#FF5F00] cursor-default">
          BIBHUTI BHUSAN NAYAK
        </h1>
      </div>
      <div className="flex gap-12">
        <ul className="flex my-4 pt-1 gap-12 font-bold text-base text-gray-800">
          <li className="cursor-pointer hover:text-[#FF5F00]">HOME</li>
          <li className="cursor-pointer hover:text-[#FF5F00]">ABOUT</li>
          <li className="cursor-pointer hover:text-[#FF5F00]">PROJECTS</li>
          <li className="cursor-pointer hover:text-[#FF5F00]">CONTACT</li>
        </ul>
        <button className="rounded-full px-6 my-1 text-base text-white bg-gray-500 hover:bg-[#FF5F00] hover:text-white font-bold focus:outline-none">
          DOWNLOAD CV
        </button>
      </div>
    </div>
  );
};

export default Header;
