import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import HeroParallax from "./HeroParallax";

function Hero() {


  // const [refH1, inViewH1] = useInView({
  //   rootMargin: "50px",
  //   triggerOnce: true,
  // });

  // const [refFront, inViewFront] = useInView({
  //   rootMargin: "50px",
  //   triggerOnce: true,
  // });
  // const [refUIUX, inViewUIUX] = useInView({
  //   rootMargin: "50px",
  //   triggerOnce: true,
  // });

  // const [refMssg, inViewMssg] = useInView({
  //   rootMargin: "50px",
  //   triggerOnce: true,
  // });

  // const [refAnd, inViewAnd] = useInView({
  //   rootMargin: "50px",
  //   triggerOnce: true,
  // });


  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

    // 一つのオブジェクトですべてのビューポート内視認性ステートを管理
    const [inViewStates, setInViewStates] = useState({
      h1: false,
      front: false,
      uiux: false,
      mssg: false,
      and: false,
    });
  
    // useInView フックの使用
    const [refH1, inViewH1] = useInView({ triggerOnce: true });
    const [refFront, inViewFront] = useInView({ triggerOnce: true });
    const [refUIUX, inViewUIUX] = useInView({ triggerOnce: true });
    const [refMssg, inViewMssg] = useInView({ triggerOnce: true });
    const [refAnd, inViewAnd] = useInView({ triggerOnce: true });
  
    // スクロールポジションの追跡
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    // 視認性が変わった時にステートを更新
    useEffect(() => {
      setInViewStates({
        h1: inViewH1,
        front: inViewFront,
        uiux: inViewUIUX,
        mssg: inViewMssg,
        and: inViewAnd,
      });
    }, [inViewH1, inViewFront, inViewUIUX, inViewMssg, inViewAnd]);



    
  // 背景色
  function getInterpolatedColor(
    scrollPosition,
    startRGB,
    middleRGB,
    endRGB,
    maxScroll
  ) {
    const ratio = Math.min(scrollPosition / maxScroll, 1);

    let r, g, b;

    if (ratio < 0.5) {
      // 始点色から中間色への補間
      const midRatio = ratio * 2; // 0から1の範囲に調整
      r = Math.round(startRGB[0] + midRatio * (middleRGB[0] - startRGB[0]));
      g = Math.round(startRGB[1] + midRatio * (middleRGB[1] - startRGB[1]));
      b = Math.round(startRGB[2] + midRatio * (middleRGB[2] - startRGB[2]));
    } else {
      // 中間色から終点色への補間
      const endRatio = (ratio - 0.5) * 2; // 0から1の範囲に調整
      r = Math.round(middleRGB[0] + endRatio * (endRGB[0] - middleRGB[0]));
      g = Math.round(middleRGB[1] + endRatio * (endRGB[1] - middleRGB[1]));
      b = Math.round(middleRGB[2] + endRatio * (endRGB[2] - middleRGB[2]));
    }

    return `rgb(${r}, ${g}, ${b})`;
  }

  // 使用例
  const startColor = [255, 137, 123]; // #FF897B
  const middleColor = [255, 167, 100];
  const endColor = [244, 250, 255]; // #F4FAFF
  const maxScrollValue = 700;

  // コンポーネント内での使用例
  const bgColor = getInterpolatedColor(
    scrollPosition,
    startColor,
    middleColor,
    endColor,
    maxScrollValue
  );

  // skeleton
  const [imageLoaded, setImageLoaded] = useState({
    img1: false,
    img2: false,
    img3: false,
    img4: false,
    img5: false,
    img6: false,
    img7: false,
    img8: false,
  });

  function handleImageLoaded(imgKey) {
    setImageLoaded((prev) => {
      const newState = { ...prev, [imgKey]: true };
      return newState;
    });
  }

  // すべての画像がロードされたかどうかを判断するための関数
  const allImagesLoaded = Object.values(imageLoaded).every(
    (status) => status === true
  );

  return (
    <section className="hero">
      <HeroParallax />
      <div className="hero__bg-img-container">
        <div className="upper-row">
          {!imageLoaded.img1 && <Skeleton height={256} width={332} />}
          <img
            className={`img-class-photo ${!imageLoaded.img1 ? "skeleton" : ""}`}
            src="hero__images/High-school1.png"
            alt="image of class group photo of high school graduation ceremony"
            onLoad={() => handleImageLoaded("img1")}
          />
          {!imageLoaded.img2 && <Skeleton height={200} width={300} />}
          <img
            className="img-ig"
            src="hero__images/IG-profile.png"
            alt="IG profile"
            onLoad={() => handleImageLoaded("img2")}
          />

          {!imageLoaded.img3 && <Skeleton height={200} width={300} />}
          <img
            className="img-gc-gate"
            src="hero__images/Aus1.png"
            alt="Me being under a gate in Gold Coast"
            onLoad={() => handleImageLoaded("img3")}
          />

          {!imageLoaded.img4 && <Skeleton height={200} width={300} />}
          <img
            className="img-waterfall"
            src="hero__images/Aus3.png"
            alt="In front of a waterfall in Gold Coast"
            onLoad={() => handleImageLoaded("img4")}
          />
        </div>

        <div className="lower-row">
          {!imageLoaded.img5 && <Skeleton height={200} width={300} />}
          <img
            className={`img-hat-toss ${!imageLoaded.img5 ? "skeleton" : ""}`}
            src="hero__images/High-school2.png"
            alt="image of me and my friends throwing graduate caps"
            onLoad={() => handleImageLoaded("img5")}
          />
          {!imageLoaded.img6 && <Skeleton height={200} width={300} />}
          <img
            className="img-profile"
            src="profile-min.jpg"
            alt="Profile picture"
            onLoad={() => handleImageLoaded("img6")}
          />

          {!imageLoaded.img7 && <Skeleton height={200} width={300} />}
          <img
            className="img-bali"
            src="hero__images/Bali1.png"
            alt="Surfing in Bali"
            onLoad={() => handleImageLoaded("img7")}
          />

          {!imageLoaded.img8 && <Skeleton height={200} width={300} />}
          <img
            className="img-hill"
            src="hero__images/Aus2.png"
            alt="Walking on meadow hill in Gold Coast"
            onLoad={() => handleImageLoaded("img8")}
          />
        </div>
      </div>



      {allImagesLoaded && (
        <div className="hero__container">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inViewH1 ? { y: "0vw", opacity: 1, scale: 1 } : {}}
            transition={{
              ease: [0.2, 0, 0.6, 1],
              duration: 2,
              delay: 1,
              bounce: 0.3,
            }}
            className={`hero__name  ${inViewH1 ? "true" : "false"}`}
            ref={refH1}
          >
            Hi, I'm Iori !
          </motion.h1>

          <div className="hero__message-container">
            <motion.p
              initial={{ opacity: 0, y: "2vh" }}
              animate={inViewMssg ? { y: "0vw", opacity: 1, scale: 1 } : {}}
              transition={{
                ease: [0.2, 0, 0.6, 1],
                duration: 2,
                delay: 2, 
                bounce: 0.3,
              }}
              className={`hero__message ${inViewMssg ? "true" : "false"}`}
              ref={refMssg}
            >
              I'm a self-taught learner of{" "}
            </motion.p>

            <div className={`hero__title`}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={inViewFront ? { y: "0vw", opacity: 1, scale: 1 } : {}}
                transition={{
                  ease: [0.2, 0, 0.6, 1],
                  duration: 1,
                  delay: 3,
                  bounce: 0.3,
                }}
                className={`hero__frontend  ${inViewFront ? "true" : "false"}`}
                ref={refFront}
              >
                <p className="hero__frontend-emoji">👩‍💻</p>
                <h2 className={`hero__frontend-text `}>Frontend</h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: "1vh" }}
                animate={inViewAnd ? { y: "0vw", opacity: 1, scale: 1 } : {}}
                transition={{
                  ease: [0.2, 0, 0.6, 1],
                  duration: 1,
                  delay: 3.5, 
                  bounce: 0.3,
                }}
                className="hero__message"
                ref={refAnd}
              >
                and
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inViewUIUX ? { y: "0vw", opacity: 1, scale: 1 } : {}}
                transition={{
                  ease: [0.2, 0, 0.6, 1],
                  duration: 1,
                  delay: 4,
                  bounce: 0.3,
                }}
                className={`hero__uiux  ${inViewUIUX ? "true" : "false"}`}
                ref={refUIUX}
              >
                <p className="hero__uiux-emoji">🧑🏼‍🎨</p>
                <h2 className={`hero__uiux-text`}>UI / UX</h2>
              </motion.div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;