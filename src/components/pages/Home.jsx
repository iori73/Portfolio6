import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Header, Hero2, Bio, Works, Footer, Note, Monex } from "../../index";

function Home({ isJapanese }) {
  const [scrollY, setScrollY] = useState(0);
  // const [profileImageLoaded, setProfileImageLoaded] = useState(false);
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


  const isMobile = viewportWidth < 768;

  const profileStyle = isMobile
    ? {
      top: "50vh",
      left: "10%",
      width: "80vw",
      position: "absolute",
      objectFit: "cover",
    }
    : {
      top: scrollY > 60 ? "148vh" : "52vh",
      left: scrollY > 60 ? "40%" : "24%",
      width: "20vw",
      position: "absolute",

      objectFit: "cover",
    };



  const profileAnimation = isMobile
    ? {
      top: scrollY > 60 ? "108vh" : "70vh",
      left: scrollY > 60 ? "28%" : "16%",
      width: scrollY > 60 ? "45vw" : "40vw",
      height: scrollY > 60 ? "45vw" : "60vw",
      borderRadius: scrollY > 60 ? "100%" : "20px",
      filter: scrollY > 60 ? "blur(0px)" : "blur(2px)",
    }
    : {
      top: scrollY > 60 ? "110vh" : "70vh",
      left: scrollY > 60 ? "38%" : "23%",
      width: scrollY > 60 ? "25vw" : "20vw",
      height: scrollY > 60 ? "25vw" : "30vw",
      borderRadius: scrollY > 60 ? "100%" : "20px",
      filter: scrollY > 60 ? "blur(0px)" : "blur(2px)",
    };





  return (
    <main className="home">
      <Header />
      <Hero2 />
      {/* <motion.img
        className="global__img-profile"
        src="profile-min.jpg"
        alt="image of me"
        style={profileStyle}
        animate={profileAnimation}
        transition={{ duration: 0.6, type: "ease-in-out" }}
      /> */}

      <Bio isJapanese={isJapanese} />
      <Works isJapanese={isJapanese} />
      <Note isJapanese={isJapanese} />
      <Footer />
      {/* <Monex /> */}
    </main>
  );
}

export default Home;
