import React from "react";

const Footer = () => {
  const styles = {
    foot: {
      color: "black",
      size: "300px",
      backgroundColor: "white",
    },
  };
  return (
    <div
      name="footer"
      classname="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div style={styles.foot} classname="pb-8">
        <p>Made with ❤️ by Rishav </p>
      </div>
    </div>
  );
};

export default Footer;
