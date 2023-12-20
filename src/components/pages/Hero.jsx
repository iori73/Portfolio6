import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import StarBackground from "./StarBackground";

function Hero() {
  const [refH1, inViewH1] = useInView({
    rootMargin: "50px",
    triggerOnce: true,
  });

  const [refFront, inViewFront] = useInView({
    rootMargin: "50px",
    triggerOnce: true,
  });
  const [refUIUX, inViewUIUX] = useInView({
    rootMargin: "50px",
    triggerOnce: true,
  });

  const [refMssg, inViewMssg] = useInView({
    rootMargin: "50px",
    triggerOnce: true,
  });

  const [refAnd, inViewAnd] = useInView({
    rootMargin: "50px",
    triggerOnce: true,
  });

  // const isPhone = window.innerWidth <= 768;

  // const phoneTransition = {
  //   duration: 2,
  //   delay: 1.5,
  // };

  // const pcTransition = {
  //   duration: 1.5,
  //   delay: 2,
  // };

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
  function interpolateColor(
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
  const bgColor = interpolateColor(
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
    console.log(`Image ${imgKey} loaded`);
    setImageLoaded((prev) => {
      const newState = { ...prev, [imgKey]: true };
      console.log(newState);
      return newState;
    });
  }

  // すべての画像がロードされたかどうかを判断するための関数
  const allImagesLoaded = Object.values(imageLoaded).every(
    (status) => status === true
  );

  return (
    <section className="hero">
      <StarBackground />

      {/* ⭕️ */}
      <div className="hero__bg-img-container">
        <div className="row1">
          {!imageLoaded.img1 && <Skeleton height={256} width={332} />}
          <img
            className={`img-high-scool1 ${!imageLoaded.img1 ? "skeleton" : ""}`}
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
            className="img-aus1"
            src="hero__images/Aus1.png"
            alt="Under a gate in Gold Coast"
            onLoad={() => handleImageLoaded("img3")}
          />

          {!imageLoaded.img4 && <Skeleton height={200} width={300} />}
          <img
            className="img-aus3"
            src="hero__images/Aus3.png"
            alt="In front of a waterfall in Gold Coast"
            onLoad={() => handleImageLoaded("img4")}
          />
        </div>

        <div className="row2">
          {!imageLoaded.img5 && <Skeleton height={200} width={300} />}
          <img
            className={`img-high-scool2 ${!imageLoaded.img5 ? "skeleton" : ""}`}
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
            className="img-aus2"
            src="hero__images/Aus2.png"
            alt="Walking on meadow hill in Gold Coast"
            onLoad={() => handleImageLoaded("img8")}
          />
        </div>
      </div>

      {/* ❌ */}
      {/* <div className="hero__bg-img-container">
        <div className="row1">
          {!imageLoaded.img1 ? (
            <Skeleton
              style={{ backgroundColor: "Gray" }}
              height={256}
              width={332}
            />
          ) : (
            <img
              className="img-high-scool1"
              src="hero__images/High-school1.png"
              alt="High school graduation"
              onLoad={() => console.log('Image loaded')}
              onError={() => console.log('Image failed to load')}
            />
          )}
        </div>
        row2も同様に処理
      </div> */}

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
                delay: 2, // 遅延時間の調整
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
                  delay: 3.5, // 遅延時間の調整
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


              {/* <motion.p
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
              </motion.p> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;