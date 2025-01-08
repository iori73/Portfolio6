import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import HeroParallax from './notinuse/HeroParallax';

function Hero() {
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

  const [refCode1, inViewCode1] = useInView({ triggerOnce: true });
  const [refCode2, inViewCode2] = useInView({ triggerOnce: true });
  const [refCode3, inViewCode3] = useInView({ triggerOnce: true });
  const [refCode4, inViewCode4] = useInView({ triggerOnce: true });

  const [refLongArrow, inViewLongArrow] = useInView({ triggerOnce: true });
  const [refOrangePolygon, inViewOrangePolygon] = useInView({ triggerOnce: true });

  // スクロールポジションの追跡
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  // frontend codes
  useEffect(() => {
    setInViewStates((prev) => ({
      ...prev,
      code1: inViewCode1,
      code2: inViewCode2,
      code3: inViewCode3,
      code4: inViewCode4,
    }));
  }, [inViewCode1, inViewCode2, inViewCode3, inViewCode4]);

  // uiux codes
  // useEffect(() => {
  //   setInViewStates(prev => ({
  //     ...prev,
  //     code1: inViewCode1,
  //     code2: inViewCode2,
  //     code3: inViewCode3,
  //     code4: inViewCode4,
  //   }));
  // }, [inViewCode1, inViewCode2, inViewCode3, inViewCode4]);

  // 背景色
  function getInterpolatedColor(scrollPosition, startRGB, middleRGB, endRGB, maxScroll) {
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
  const bgColor = getInterpolatedColor(scrollPosition, startColor, middleColor, endColor, maxScrollValue);

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

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [textContainerAnimated, setTextContainerAnimated] = useState(false);

  return (
    <section className="hero">
      <HeroParallax />

      {/* {allImagesLoaded && ( */}
      <motion.div
        className="hero__text-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        onAnimationComplete={() => setTextContainerAnimated(true)}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={inViewH1 ? { y: '0vw', opacity: 1, scale: 1 } : {}}
          transition={{
            ease: [0.2, 0, 0.6, 1],
            duration: 1,
            delay: 0.2,
            bounce: 0.3,
          }}
          className={`hero__name  ${inViewH1 ? 'true' : 'false'}`}
          ref={refH1}
        >
          Hi, I'm Iori !
        </motion.h1>

        <div className="hero__message-container">
          <motion.p
            initial={{ opacity: 0, y: '2vh' }}
            animate={inViewMssg ? { y: '0vw', opacity: 1, scale: 1 } : {}}
            transition={{
              ease: [0.2, 0, 0.6, 1],
              duration: 1,
              delay: 0.5,
              bounce: 0.3,
            }}
            className={`hero__message ${inViewMssg ? 'true' : 'false'}`}
            ref={refMssg}
          >
            I'm a self-taught learner of{' '}
          </motion.p>

          <div className={`hero__title`}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inViewFront ? { y: '0vw', opacity: 1, scale: 1 } : {}}
              transition={{
                ease: [0.2, 0, 0.6, 1],
                duration: 2,
                delay: 2,
                bounce: 0.3,
              }}
              className={`hero__frontend  ${inViewFront ? 'true' : 'false'}`}
              ref={refFront}
            >
              <h2 className={`hero__frontend-text `}>Frontend</h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: '1vh' }}
              animate={inViewAnd ? { y: '0vw', opacity: 1, scale: 1 } : {}}
              transition={{
                ease: [0.2, 0, 0.6, 1],
                duration: 1,
                delay: 3,
                bounce: 0.3,
              }}
              className="hero__message"
              ref={refAnd}
            >
              and
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inViewUIUX ? { y: '0vw', opacity: 1, scale: 1 } : {}}
              transition={{
                ease: [0.2, 0, 0.6, 1],
                duration: 2,
                delay: 3.5,
                bounce: 0.3,
              }}
              className={`hero__uiux  ${inViewUIUX ? 'true' : 'false'}`}
              ref={refUIUX}
            >
              <h2 className={`hero__uiux-text`}>UI / UX</h2>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="hero__left-container">
        <div className="left-container-pr">
          <div className="frontend-codes-container">
            {textContainerAnimated && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05, duration: 2 }}
                className="frontend-codes"
              >
                <div className="row row1">
                  {/* <div className="green green-code1 code w-lg"></div> */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inViewCode1 ? { y: '0vw', opacity: 1, scale: 1 } : {}}
                    transition={{
                      ease: [0.2, 0, 0.6, 1],
                      duration: 1,
                      delay: 0.1,
                      bounce: 0.3,
                    }}
                    className="green green-code1 code w-lg"
                    ref={refCode1}
                  ></motion.div>
                  <div className="yellow yellow-code1 code w-sm"></div>
                </div>

                <div className="row row2">
                  <div className="orange orange-code1 code w-sm"></div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inViewCode2 ? { y: '0vw', opacity: 1, scale: 1 } : {}}
                    transition={{
                      ease: [0.2, 0, 0.6, 1],
                      duration: 1,
                      delay: 0.3,
                      bounce: 0.3,
                    }}
                    className="purple purple-code1 code w-md"
                    ref={refCode2}
                  ></motion.div>
                  <div className="blue blue-code1 code w-lg"></div>
                </div>

                <div className="row row3">
                  <div className="yellow yellow-code2 code w-lg"></div>
                  {/* <div className="green green-code2 code w-sm"></div> */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inViewCode3 ? { y: '0vw', opacity: 1, scale: 1 } : {}}
                    transition={{
                      ease: [0.2, 0, 0.6, 1],
                      duration: 1,
                      delay: 0.6,
                      bounce: 0.3,
                    }}
                    className="green green-code2 code w-sm"
                    ref={refCode3}
                  ></motion.div>
                </div>

                <div className="row row4">
                  <div className="green green-code3 code"></div>
                  <div className="blue blue-code2 code w-md"></div>
                  <div className="yellow yellow-code3 code w-lg"></div>
                </div>

                {/* <div className="row row5">
              <div className="blue blue-code2 code w-lg"></div>
              <div className="purple purple-code2 code w-sm"></div>
            </div> */}

                <div className="row row5">
                  {/* <div className="green green-code4 code w-sm"></div> */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inViewCode4 ? { y: '0vw', opacity: 1, scale: 1 } : {}}
                    transition={{
                      ease: [0.2, 0, 0.6, 1],
                      duration: 1,
                      delay: 0.8,
                      bounce: 0.3,
                    }}
                    className="green green-code4 code w-sm"
                    ref={refCode4}
                  ></motion.div>
                  <div className="orange orange-code2 code w-lg"></div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="hero__right-container">
        {/* bg */}
        <div className="right-bg-container">
          <img className="mask1" src="hero__images/mask1.png" alt="" />
          <img className="mask2" src="hero__images/mask2.png" alt="" />
          <img className="mask3" src="hero__images/mask3.png" alt="" />
          <img className="mask4" src="hero__images/mask4.png" alt="" />
        </div>

        <div className="uiux-codes-container">
          {textContainerAnimated && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="uiux-codes"
            >
              <div className="row row1">
                {/* <img className="long-arrow" src="hero__images/uiux/long arrow.svg" alt="" /> */}

                <motion.img
                  initial={{ opacity: 0 }}
                  animate={inViewLongArrow ? { y: '0vw', opacity: 1, scale: 1 } : {}}
                  transition={{ ease: [0.2, 0, 0.6, 1], duration: 1, delay: 2.4, bounce: 0.3 }}
                  ref={refLongArrow}
                  className="long-arrow"
                  src="hero__images/uiux/long arrow.svg"
                  alt=""
                />

                <img className="double-circle" src="hero__images/uiux/double circle.svg" alt="" />
              </div>

              <div className="row row2">
                <img className="marble-code1" src="hero__images/uiux/marble code.svg" alt="" />
                <img className="blue-polygon" src="hero__images/uiux/blue polygon.svg" alt="" />
              </div>

              <div className="row row3">
                <img className="toggle" src="hero__images/uiux/toggle.svg" alt="" />
              </div>

              <div className="row row4">
                <img className="marble-code2" src="hero__images/uiux/marble code2.svg" alt="" />
                {/* <img className="orange-polygon" src="hero__images/uiux/orange polygon.svg" alt="" /> */}
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={
                    inViewOrangePolygon
                      ? { y: isMobile ? '-2vh' : '-5vh', x: isMobile ? '3vw' : '0vw', opacity: 1, scale: 1 }
                      : {}
                  }
                  transition={{ ease: [0.2, 0, 0.6, 1], duration: 1, delay: 2.4, bounce: 0.3 }}
                  ref={refOrangePolygon}
                  className="orange-polygon"
                  src="hero__images/uiux/orange polygon.svg"
                  alt=""
                />
              </div>

              {/* <div className="row row5">
          <img className="arrow-button" src="hero__images/uiux/arrow button.svg" alt="" />
          </div> */}

              <div className="row row5">
                <div className="code"></div>
                <img className="pink-polygon" src="hero__images/uiux/pink polygon.svg" alt="" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
