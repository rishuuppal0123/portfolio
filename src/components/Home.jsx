import React from "react";
import HeroImage from "../assets/photo.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Image from "./Image";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hi Everyone!
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a self taught programmer, a developer, with passion to learn new and emerging
            Technologies. I aim to build solutions to the real life problems using my coding skills.
            And I also love to work with the team of enthusiastic memebers with like minds.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
        <Image classes="rounded-2xl mx-auto w-2/3 md:w-full" name="my profile" path={HeroImage}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
