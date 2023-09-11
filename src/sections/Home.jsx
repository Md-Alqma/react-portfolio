import React, { useState, useEffect, useRef } from "react";
import bg from "../../public/images/home-background.jpg";

const HomeBackgroundStyle = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
};

const Home = ({ sectionStyle }) => {
  const homeText = "< Alqma.Dev />";
  return (
    <div
      style={{ ...sectionStyle, ...HomeBackgroundStyle }}
      className="section 1">
      <h1 style={{ fontSize: "5rem", color: "yellow" }}>{homeText}</h1>
    </div>
  );
};

export default Home;
