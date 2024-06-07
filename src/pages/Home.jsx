import React from "react";
import Layout from "../components/Layout";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Contact from "./Contact";
import bgd from "../assets/images/logo.jpg";

const Home = () => {
  return (
    <Layout>
      <div
        id="home"
        className="py-[130px]"
        style={{ backgroundImage: `url(${bgd})` }}
      >
        <h1 className="text-4xl md:text-6xl text-center font-bold pt-24">
          HEY, I'M BIBHUTI BHUSAN NAYAK
        </h1>
        <p className="py-12 px-10 font-serif text-gray-700 text-justify leading-relaxed hyphens-auto text-base md:text-xl">
          A Result-Oriented Web Developer building and managing Websites and Web
          Applications that leads to the success of the overall product.
        </p>
        <div className="flex justify-center gap-8">
          <button className="bg-[#FF5F00] shadow-xl text-3xl font-bold rounded-lg px-16 py-3 text-white">
            <a href="#projects">Projects</a>
          </button>
        </div>
      </div>
      <div id="aboutme">
        <Aboutme />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </Layout>
  );
};

export default Home;
