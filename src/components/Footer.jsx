import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black text-white px-20">
      <div className="flex justify-between border-b-gray-400 border-b-[0.1px] py-20">
        <div>
          <h1 className="text-3xl font-bold mb-5">Bibhuti Bhusan Nayak</h1>
          <p className="text-sm w-[75%]">
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that leads to the success of the overall product
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-5">SOCIAL</h1>
          <ul className="flex gap-3">
            <li>
              <FaLinkedin size={30} />
            </li>
            <li>
              <FaSquareGithub size={30} />
            </li>
            <li>
              <FaSquareXTwitter size={30} />
            </li>
          </ul>
        </div>
      </div>
      <div className="py-10 text-center text-sm">
        <p>© Copyright 2024 . Made by Bibhuti Bhusan Nayak</p>
      </div>
    </div>
  );
};

export default Footer;
