import React from "react";

import graphQl from "../assets/graphql.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import git from "../assets/git.png";
import sql from "../assets/sql.jpg";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import api from "../assets/api.jpg";
import cpp from "../assets/cpp.png";
import kotlin from "../assets/kotlin.png";
import android from "../assets/android.png";
import debug_test from "../assets/debug_testing.png";
import jetpack_compose from "../assets/jetpack _compose.png";
import styles from "../index.css";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: kotlin,
      title: "Kotlin",
      style: "shadow-green-500",
    },
    {
      id: 2,
      src: android,
      title: "Android",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: jetpack_compose,
      title: "Jetpack Compose",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-green-600",
    },
    {
      id: 6,
      src: cpp,
      title: "C++",
      style: "shadow-blue-500",
    },

    {
      id: 7,
      src: sql,
      title: "SQL",
      style: "shadow-gray-600",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-yellow-400",
    },

    {
      id: 9,
      src: git,
      title: "Version Control: Git",
      style: "shadow-green-400",
    },
    {
      id: 10,
      src: graphQl,
      title: "GraphQL",
      style: "shadow-sky-500",
    },
    {
      id: 11,
      src: debug_test,
      title: "Debugging and Testing",
      style: "shadow-gray-500",
    },

    {
      id: 12,
      src: api,
      title: "API Integrations",
      style: "shadow-yellow-400",
    },
  ];
  const styles = {
    experience: {
      paddingTop: "5%",
    },
  };
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div style={styles.experience}>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills and Technologies
          </p>
          <p className="py-6">These are the technologies I work upon</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
