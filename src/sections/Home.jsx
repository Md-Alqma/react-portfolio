import React, { useState, useEffect, useRef } from "react";
import bg from "../../public/images/home-background.jpg";
import styles from "./Section.module.css";
const HomeBackgroundStyle = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
};

const Home = ({ sectionStyle }) => {
  const homeText = "< Alqma.Dev />";
  return (
    <div className="section 1" style={sectionStyle}>
      <div className="bg-image">
        <img src={bg} className="img-fluid" alt="Sample" />
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <p className="text-white mb-0">Can you see me?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
