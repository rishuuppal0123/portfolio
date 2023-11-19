import React from "react";
import disney from "../assets/portfolio/disney.jpeg";
import port from "../assets/portfolio/port.jpeg";
import tours from "../assets/portfolio/tours.jpeg";
import scanner_app from "../assets/portfolio/scanner_app.jpg";
import chat_app from "../assets/portfolio/chat_app.jpg";
import crypto_app from "../assets/portfolio/crypto_app.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: scanner_app,
      href: "https://github.com/rishuuppal0123/AadharQrScanner",
    },
    {
      id: 2,
      src: chat_app,
      href: "https://github.com/rishuuppal0123/Own-Chat-Application",
    },
    {
      id: 3,
      src: crypto_app,
      herf: "https://crypto-app-theta-six.vercel.app/",
    },
    {
      id: 4,
      src: port,
      href: "https://rishavuppal.vercel.app/",
    },
    {
      id: 5,
      src: tours,
      href: "https://rishuuppal0123.github.io/LGM-Task-1/",
    },
    {
      id: 6,
      src: disney,
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p clasName="text-4xl font-bold inline border-b-4 border-gray-500">
            <b> My Projects </b>{" "}
          </p>
          <p className="py-6"> Check out some of my works right here </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {" "}
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                href={link}
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>{" "}
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code{" "}
                </button>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
