import React from "react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
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
          <div className="md:px-16 mt-20 md:mt-0">
            <h1 className="text-2xl font-bold text-center md:text-left">
              Movie Matrix Website
            </h1>
            <p className="text-base md:text-xl text-gray-800 font-serif text-justify leading-relaxed pt-5 md:pt-10">
              This is a responsive web application using React and Vite that
              features a curated list of movies and TV shows. The app includes a
              filter option, allowing users to toggle between movies and TV
              shows, and a "Suggest Me" button that randomly selects 10 items
              from the list. Additionally, I integrated a search functionality
              powered by the OMDB API, enabling users to search for any movie or
              TV show directly within the app. My focus was on creating a
              user-friendly interface and ensuring optimal performance for a
              smooth and enjoyable browsing experience.
            </p>
            <div className="flex gap-5 pt-10">
              <button className="bg-[#FF5F00] px-5 py-2 text-xl text-white rounded-md font-semibold hover:bg-orange-600 focus:outline-none">
                <Link
                  to="https://github.com/bibhuti147/Movie_Matrix"
                  target="_blank"
                >
                  Code Study
                </Link>
              </button>
              <button className="bg-[#002379] px-5 py-2 text-xl text-white rounded-md font-semibold hover:bg-[#00215E] focus:outline-none">
                <Link to="https://movie-matrix-zeta.vercel.app" target="_blank">
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
            <p className="text-base md:text-xl text-gray-800 font-serif text-justify leading-relaxed pt-5 md:pt-10">
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
        <div className="grid grid-cols-1 md:grid-cols-2 px-7 md:px-20 pt-24">
          <img
            src={project3}
            alt="/"
            className="transform transition-transform ease-in-out hover:scale-105"
          />
          <div className="md:px-16 mt-10 md:mt-0">
            <h1 className="text-2xl font-bold text-center md:text-left">
              Expense Tracker Website
            </h1>
            <p className="text-base md:text-xl text-gray-800 font-serif text-justify leading-relaxed pt-5 md:pt-10">
              This is a comprehensive budget management application using
              Next.js, where users can seamlessly create, edit, and manage
              budgets and expenses. The application features secure user
              authentication powered by Clerk, ensuring that only authorized
              users can access their financial data. I incorporated Shadcn UI to
              create a responsive and intuitive interface, enhancing the overall
              user experience. To provide users with clear insights into their
              spending, I integrated Recharts for dynamic bar chart
              visualizations. The backend is efficiently managed using Drizzle,
              which ensures smooth data operations and scalability. This project
              demonstrates my ability to build full-stack applications with a
              focus on usability, security, and performance.
            </p>
            <div className="flex gap-5 pt-10">
              <button className="bg-[#FF5F00] px-5 py-2 text-xl text-white rounded-md font-semibold hover:bg-orange-600 focus:outline-none">
                <Link
                  to="https://github.com/bibhuti147/Expense_Tracker"
                  target="_blank"
                >
                  Code Study
                </Link>
              </button>
              <button className="bg-[#002379] px-5 py-2 text-xl text-white rounded-md font-semibold hover:bg-[#00215E] focus:outline-none">
                <Link
                  to="https://expense-tracker-flax-psi.vercel.app/"
                  target="_blank"
                >
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
