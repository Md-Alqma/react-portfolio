import React, { useState, useEffect, useRef } from "react";
import bg from "../../public/images/home-background.jpg";

const HomeBackgroundStyle = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
};

const TEXTS = ["Web Wizard", "UI Uchiha", "FSD"];

const Home = ({ sectionStyle }) => {
  return (
    <div
      style={{ ...sectionStyle, ...HomeBackgroundStyle }}
      className="section 1">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
