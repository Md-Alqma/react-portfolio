import React, { useState, useEffect, useRef } from "react";
import TextTransition, { presets } from "react-text-transition";
import { motion } from "framer-motion";
import { useFollowPointer } from "../use-follow-pointer";

const TEXTS = ["Web Wizard", "UI Uchiha", "FSD"];

const About = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
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
      {/* <motion.div
        ref={ref}
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          border: "1px solid black",
        }}
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 4,
          stiffness: 120,
          restDelta: 0.001,
        }}
      /> */}
      <h1>About</h1>
      {/* <div className="d-flex">
        <h1>I am a</h1>&nbsp;&nbsp;
        <h1>
          <TextTransition springConfig={presets.wobbly}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h1>
      </div> */}
      {/* <motion.h1
        whileHover={{ scaleY: 2.5 }}
        whileTap={{ scaleY: 2 }}
        transition={{ type: "spring", stiffness: 400, damping: 2 }}>
        I am
      </motion.h1> */}
    </div>
  );
};

export default About;
