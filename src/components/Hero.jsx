import React, { useState, useEffect } from "react";

import { useTransform, useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StarBackground from "./StarBackground";
// import StarParallax from "./StarParallax";


// const Star = ({ size, left, top, backgroundColor }) => (
//   <div
//     style={{
//       position: "absolute",
//       width: `${size}px`,
//       height: `${size}px`,
//       borderRadius: "50%",
//       // backgroundColor: 'white',
//       backgroundColor,
//       left: `${left}%`,
//       top: `${top}%`,
//     }}
//   />
// );

// import PropTypes from 'prop-types';

// // Add prop types validation
// Star.propTypes = {
//   size: PropTypes.number.isRequired,
//   left: PropTypes.number.isRequired,
//   top: PropTypes.number.isRequired,
//   backgroundColor: PropTypes.string.isRequired,
// };

// function getRandomColor() {
//   const baseValue = 200;
//   var red = baseValue + Math.floor(Math.random() * 30);
//   var green = baseValue + Math.floor(Math.random() * 30);
//   var blue = baseValue + Math.floor(Math.random() * 30);

//   // Create a CSS color string using the RGB values
//   var color = "rgb(" + red + ", " + green + ", " + blue + ")";

//   return color;
// }

function Hero({ isJapanese }) {
  const [refH1, inViewH1] = useInView({
    rootMargin: "50px",
    triggerOnce: true,
  });

  const [refUIUX, inViewUIUX] = useInView({
    rootMargin: "50px",
    triggerOnce: true,
  });

  const [refFront, inViewFront] = useInView({
    rootMargin: "50px",
    triggerOnce: true,
  });

  const [refMssg, inViewMssg] = useInView({
    rootMargin: "-20px",
    triggerOnce: true,
  });

  const isPhone = window.innerWidth <= 768;

  const phoneTransition = {
    duration: 2,
    delay: 1.5,
  };

  const pcTransition = {
    duration: 1.5,
    delay: 2,
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 背景色
  function interpolateColor(scrollPosition, startRGB,  endRGB, maxScroll) {
    const ratio = Math.min(scrollPosition / maxScroll, 1);
    const r = Math.round(startRGB[0] + ratio * (endRGB[0] - startRGB[0]));
    const g = Math.round(startRGB[1] + ratio * (endRGB[1] - startRGB[1]));
    const b = Math.round(startRGB[2] + ratio * (endRGB[2] - startRGB[2]));

    return `rgb(${r}, ${g}, ${b})`;
  }

  // 使い方
  const startColor = [244, 243, 239]; // #F4F3EF
  const endColor = [83, 195, 208]; // #F69A76
  const maxScrollValue = 1000; // この値は必要に応じて調整

  // コンポーネント内での使用例
  const bgColor = interpolateColor(
    scrollPosition,
    startColor,
    middleColor,
    endColor,
    maxScrollValue
  );

  // // Star
  // const stars = Array.from({ length: 10 }).map((_, i) => (
  //   <Star
  //     key={i}
  //     backgroundColor={getRandomColor()}
  //     size={Math.random() * 20}
  //     // 幅と高さ
  //     left={Math.random() * 100}
  //     top={Math.random() * 100}
  //   />
  // ));

  return (
    <div className="hero">
      <div className="hero-bg-sky"></div>
      <div className="tropical1"></div>
      <div className="tropical2"></div>
      <motion.div
        className="hero-bg"
        style={{ backgroundColor: bgColor }}
      ></motion.div>
      <StarBackground />

      

      {/* 
      <div className="parallax_container">
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <StarParallax offset={10}>{stars}</StarParallax>
        </div>
      </div> */}

      {/* 使わない */}
      {/* <motion.div className="hero-bg-wave7" style={{ scale: 1 + scrollPosition * 0.001 }}></motion.div>
      <motion.div className="hero-bg-wave6" style={{ scale: 1 + scrollPosition * 0.002 }}></motion.div>
<motion.div className="hero-bg-wave5" style={{ scale: 1 + scrollPosition * 0.003 }}></motion.div>
 */}

      <motion.div
        className="hero-bg-wave8"
        style={{
          y: -scrollPosition * 0.001,
          x: isPhone ? scrollPosition * 0.04 : -scrollPosition * 0,
        }}
      ></motion.div>

      <motion.div
        className="hero-bg-wave7"
        style={{
          y: -scrollPosition * 0.04,
          x: isPhone ? 0 : -scrollPosition * 0.04,
        }}
      ></motion.div>

      <motion.div
        className="hero-bg-wave6"
        style={{
          y: -scrollPosition * 0.05,
          x: isPhone ? scrollPosition * 0.1 : scrollPosition * 0.08,
        }}
      ></motion.div>

      <motion.div
        className="hero-bg-wave5"
        style={{
          // y: -scrollPosition * 0.08,
          y: isPhone ? -scrollPosition * 0.08 : -scrollPosition * 0.08,
          x: isPhone ? scrollPosition * 0.15 : scrollPosition * 0.1,
        }}
      ></motion.div>

      {/* 使わない */}
      {/* <motion.div
        className="hero-bg-wave4"
        style={{ y: -scrollPosition * 0.1 }}
      ></motion.div>
      <motion.div
        className="hero-bg-wave3"
        style={{ y: -scrollPosition * 0.12 }}
      ></motion.div>
      <motion.div
        className="hero-bg-wave2"
        style={{ y: -scrollPosition * 0.16 }}
      ></motion.div>
      <motion.div
        className="hero-bg-wave1"
        style={{ y: -scrollPosition * 0.18 }}
      ></motion.div> */}

      {/* <motion.img
        className="girl-img"
        src="/girl.svg"
        alt="girl image"
        style={{ x: scrollPosition * 0.5, scale: 1 + scrollPosition * 0.0001 }}
      /> */}

      <div className="hero-container">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={inViewH1 ? { y: "0vw", opacity: 1, scale: 1 } : {}}
          transition={{
            ease: [0.2, 0, 0.6, 1],
            duration: 2,
            delay: 1,
            bounce: 0.3,
          }}
          className={`hero-name  ${inViewH1 ? "true" : "false"}`}
          ref={refH1}
        >
          Hi, I'm Iori !
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: "5vh" }}
          animate={inViewMssg ? { y: "0vw", opacity: 1, scale: 1 } : {}}
          transition={isPhone ? phoneTransition : pcTransition}
          className={`hero-message ${inViewMssg ? "true" : "false"}`}
          ref={refMssg}
        >
          I'm a self-taught learner of{" "}
        </motion.div>

        <div className={`hero-title`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inViewUIUX ? { y: "0vw", opacity: 1, scale: 1 } : {}}
            transition={{
              ease: [0.2, 0, 0.6, 1],
              duration: 1,
              delay: 3,
              bounce: 0.3,
            }}
            className={`uiux  ${inViewUIUX ? "true" : "false"}`}
            ref={refUIUX}
          >
            <img className="uiux-icon" src="/icons/uiux.svg" alt="uiux icon" />
            <h2 className={`uiux-text`}>UI / UX</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inViewFront ? { y: "0vw", opacity: 1, scale: 1 } : {}}
            transition={{
              ease: [0.2, 0, 0.6, 1],
              duration: 1,
              delay: 4,
              bounce: 0.3,
            }}
            className={`frontend  ${inViewFront ? "true" : "false"}`}
            ref={refFront}
          >
            <img
              className="frontend-icon"
              src="/icons/frontend.svg"
              alt="frontend icon"
            />
            <h2 className={`frontend-text `}>Frontend</h2>
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: "5vh" }}
          animate={inViewMssg ? { y: "0vw", opacity: 1, scale: 1 } : {}}
          transition={isPhone ? phoneTransition : pcTransition}
          className={`hero-message ${inViewMssg ? "true" : "false"}`}
          ref={refMssg}
        >
          <p className={` toggleBox-en ${isJapanese ? "display-none" : ""}`}>
            I think about how to cross design and technology every day. My goal
            is to contribute to the creation of services that provide
            convenience and happiness to people.
          </p>
          <p className={` toggleBox-jp ${isJapanese ? "" : "display-none"}`}>
            デザインとテクノロジーの <br className="dn-in-pc" />{" "}
            融合を日々考えています。
            <br />
            人に便利さや幸せを提供するサービス作りに貢献することを目指しています。
          </p>
        </motion.div> */}
      </div>
    </div>
  );
}

export default Hero;
