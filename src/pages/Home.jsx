import React from "react";
import Layout from "../components/Layout";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <Layout>
      <div className="grid gap-y-9 py-20 bg-[#FFFAE6]">
        <h1 className="text-6xl text-center font-bold mt-16">
          HEY, I'M BIBHUTI BHUSAN NAYAK
        </h1>
        <p className="py-12 px-10 text-center font-serif text-gray-700 text-xl">
          A Result-Oriented Web Developer building and managing Websites and Web
          Applications that leads to the success of the overall product.
        </p>
        <div className="flex justify-center gap-8">
          <button className="bg-[#FF5F00] text-3xl font-bold rounded-lg shadow-md px-16 py-3 text-white mb-16">
            Projects
          </button>
        </div>
      </div>
      <Aboutme />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
