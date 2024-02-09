import React from "react";
import Hero from "../assets/photo.jpg";
import Image from "./Image";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="max-w-screen-lg space-x-20 mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div>
            <Image
              classes="mrounded-xl mx-auto w- 1/3 md:w-100"
              name="my profile"
              path={Hero}
            />
          </div>

          <div className="flex   flex-col justify-center  h-full">
            <p className="text-xl mt-20">
              I am a recent graduate from Computer Science domain, a keen
              developer focussing on good user interactive products.
              <br />A passionate Programmer and Developer with good Problem
              Solving skills and ability to perform well in a team. Along with
              it, I also love to draw, sketch, and play Badminton.
            </p>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default About;
