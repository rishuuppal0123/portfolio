import React from "react";
import tours from "../assets/project_img/tours.jpeg";
import scanner_app from "../assets/project_img/scanner_app.jpg";
import chat_app from "../assets/project_img/chat_app.jpg";
import crypto_app from "../assets/project_img/crypto_app.jpg";
import blog_app from "../assets/project_img/blog_ss.jpg";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: blog_app,
      code: "https://github.com/rishuuppal0123/the_bloggers_site",
      link: "https://sunny-cheesecake-dd6417.netlify.app",
    },
    {
      id: 2,
      src: crypto_app,
      code: "https://github.com/rishuuppal0123/Crypto-app/",
      link: "https://crypto-app-theta-six.vercel.app/",
    },
    {
      id: 3,
      src: tours,
      code: "https://github.com/rishuuppal0123/LGM-Task-1",
      link: "https://rishuuppal0123.github.io/LGM-Task-1/",
    },
    {
      id: 4,
      src: scanner_app,
      code: "https://github.com/rishuuppal0123/AadharQrScanner",
      link: ""
    },
    {
      id: 5,
      src: chat_app,
      code: "https://github.com/rishuuppal0123/Own-Chat-Application",
      link: ""
    }
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            <b> My Projects </b>
          </p>
          <p className="py-6"> Check out some of my works right here </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center"> {
                link.length ? <Link to ={link}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  </Link> : <div></div>
                }
                {
                  code.length ? <Link to={code}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                  </Link> : <div></div>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
