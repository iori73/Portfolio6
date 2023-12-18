import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Header, Hero, Bio, Works, Footer, Note, Lottie1 } from "../../index";
import Skeleton from "react-loading-skeleton";

import App from "./Skeleton/App";

function Home({ isJapanese }) {
  const [scrollY, setScrollY] = useState(0);
  const [profileImageLoaded, setProfileImageLoaded] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      const newY = window.scrollY;
      setScrollY(newY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollY);
  // // スクロール位置に基づいたスタイル
  // const profileStyle = {
  //   top: scrollY > 60 ? "108vh" : "52vh",
  //   left: scrollY > 60 ? "40%" : "24%",
  //   width: "20vw",
  //   position: "absolute",
  //   filter: scrollY > 60 ? "blur(0px)" : "blur(2px)",
  //   objectFit: "cover",
  // };

  const isMobile = viewportWidth < 768; // スマホ用の閾値

  // スクロール位置とビューポート幅に基づいたスタイル
  const profileStyle = isMobile
    ? {
        // スマートフォン用のスタイル
        top: "50vh", // スマートフォン用の値
        left: "10%", // スマートフォン用の値
        width: "80vw", // スマートフォン用の値
        position: "absolute",
        objectFit: "cover",
      }
    : {
        // デスクトップ用のスタイル
        top: scrollY > 60 ? "148vh" : "52vh",
        left: scrollY > 60 ? "40%" : "24%",
        width: "20vw",
        position: "absolute",

        objectFit: "cover",
      };

  // // アニメーション用のスタイル
  // const profileAnimation = {
  //   top: scrollY > 60 ? "110vh" : "70vh",
  //   left: scrollY > 60 ? "38%" : "23%",
  //   borderRadius: scrollY > 60 ? "100%" : "20px",
  //   width: scrollY > 60 ? "25vw" : "20vw",
  //   height: scrollY > 60 ? "25vw" : "30vw",
  // };

  // アニメーション用のスタイル
  const profileAnimation = isMobile
    ? {
        // スマートフォン用のアニメーション
        top: scrollY > 60 ? "108vh" : "70vh",
        left: scrollY > 60 ? "28%" : "16%",
        width: scrollY > 60 ? "45vw" : "40vw",
        height: scrollY > 60 ? "45vw" : "60vw",
        borderRadius: scrollY > 60 ? "100%" : "20px",
        filter: scrollY > 60 ? "blur(0px)" : "blur(2px)",
      }
    : {
        // デスクトップ用のアニメーション
        top: scrollY > 60 ? "110vh" : "70vh",
        left: scrollY > 60 ? "38%" : "23%",
        width: scrollY > 60 ? "25vw" : "20vw",
        height: scrollY > 60 ? "25vw" : "30vw",
        borderRadius: scrollY > 60 ? "100%" : "20px",
        filter: scrollY > 60 ? "blur(0px)" : "blur(2px)",
      };

  console.log(profileAnimation);

  function handleProfileImageLoaded(imgKey) {
    console.log(`Global Profile Image ${imgKey} loaded`);
    setProfileImageLoaded((prev) => {
      const newState = { ...prev, [imgKey]: true };
      console.log(newState);
      return newState;
    });
  }

  return (
    <section className="home">
      <Header />
      <Hero />

      <motion.img
        className="global-img-profile"
        src="profile-min.jpg"
        alt="image of me"
        style={profileStyle}
        animate={profileAnimation}
        transition={{ duration: 0.6, type: "ease-in-out" }}
      />

      {/* 🌸🌸🌸 */}
      {/* <motion.img
      className="global-img-profile"
      src="profile-min.jpg"
      alt="image of me"
      style={profileStyle}
      transition={{ duration: 1, type: "ease-in-out" }}
    /> */}
      <Bio isJapanese={isJapanese} />
      <Works isJapanese={isJapanese} />
      <Note isJapanese={isJapanese} />
      <Footer />
    </section>
  );
}

export default Home;
