

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";


const generateRandomShadows = (count, color) => {
  let boxShadow = "";
  for (let i = 0; i < count; i++) {
    const randomX = Math.floor(Math.random() * 2000);
    const randomY = Math.floor(Math.random() * 2000);
    // boxShadow += `${randomX}px ${randomY}px ${color}`;
    boxShadow += `${randomX}px ${randomY}px ${color}`;

    if (i < count - 1) boxShadow += ", ";
  }
  return boxShadow;
};

const StarLayer = ({ count, size, color, speed }) => {
  const [yPos, setYPos] = useState(0);
  const [shadows, setShadows] = useState("");

  const spring = useSpring(yPos, {
    stiffness: 100, // スターの動きの硬さ
    damping: 1, // スターの動きの減衰率
  });

  useEffect(() => {
    // Generate shadows only once when the component is mounted
    setShadows(generateRandomShadows(count, color));
  }, [count, color]);

  useEffect(() => {
    const handleScroll = () => {
      setYPos(window.scrollY * speed);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  const starStyle = {
    boxShadow: shadows,
    height: size,
    width: size,
    transition: "all .05s ease-in-out",
    transform: `translateY(-${yPos}px)`,
    borderRadius: "50%",
    y: spring,
  };

  return <div style={starStyle} />;
};

const StarBackground = () => {
  return (
    <div className="star-background"> 
      <StarLayer
        count={100}
        size="0.5rem"
        color="rgba(252, 255, 230, 0.3)"
        speed={.4}
        filter="blur(1px)"
      />
      <StarLayer
        count={25}
        size="0.3rem"
        color="#FFB966"
        speed={.1}
      />
      <StarLayer
        count={100}
        size="0.2rem"
        color="#096f52"
        speed={0.09}
      />
    </div>
  );
};

export default StarBackground;
