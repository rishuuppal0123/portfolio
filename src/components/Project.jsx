import React from "react";
import dice from "../assets/portfolio/dice.jpeg";
import disney from "../assets/portfolio/disney.jpeg";
import port from "../assets/portfolio/port.jpeg";
import sudoku from "../assets/portfolio/sudoku.jpeg";
import todo from "../assets/portfolio/todo.jpeg";
import tours from "../assets/portfolio/tours.jpeg";

const Portfolio = () => {
    const portfolios = [{
            id: 1,
            src: tours,
        },
        {
            id: 2,
            src: disney,
        },
        {
            id: 3,
            src: sudoku,
        },
        {
            id: 4,
            src: todo,
        },
        {
            id: 5,
            src: dice,
        },
        {
            id: 6,
            src: port,
        },
    ];

    return ( < div name = "project"
        className = "bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen" >
        <
        div className = "max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full" >
        <
        div className = "pb-8" >
        <
        p clasName = "text-4xl font-bold inline border-b-4 border-gray-500" >
        My Projects < /p>  <
        p className = "py-6" > Check out some of my work right here < /p>  <
        /div>

        <
        div className = "grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0" > {
            portfolios.map(({ id, src }) => ( < div key = { id }
                className = "shadow-md shadow-gray-600 rounded-lg" >
                <
                img src = { src }
                alt = ""
                className = "rounded-md duration-200 hover:scale-105" / >
                <
                div className = "flex items-center justify-center" >
                <
                button className = "w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
                Demo <
                /button>  <
                button className = "w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
                Code < /button>  <
                /div> <
                /div>
            ))
        } <
        /div>  <
        /div>  <
        /div>
    );
};

export default Portfolio;