import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import { motion } from "framer-motion";

const TEXTS = ["Web Wizard", "UI Uchiha", "Tree", "Color"];

const About = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div>
      <h1>About</h1>
      <div className="d-flex">
        <h1>I am a</h1>&nbsp;&nbsp;
        <h1>
          <TextTransition springConfig={presets.wobbly}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h1>
      </div>
      <motion.h1
        className="box"
        whileHover={{ scaleY: 2.5 }}
        whileTap={{ scaleY: 2 }}
        transition={{ type: "spring", stiffness: 400, damping: 2 }}>
        I am
      </motion.h1>
    </div>
  );
};

export default About;
