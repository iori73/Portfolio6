import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Bio({ isJapanese }) {
  const [ref1, inView1] = useInView({
    rootMargin: "-50px",
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    rootMargin: "-50px",
    triggerOnce: true,
  });

  return (
    <section className="bio section">
      <div className="bio__img-container">
       
        {/* <img className="bio__img" src="profile-min.png" alt="" /> */}
      </div>
      <div className="bio__text-container">
        <h2 className="bio__name">Iori Kawano</h2>

        <motion.div
          initial={{ opacity: 0.3, y: "10vw" }}
          animate={inView1 ? { y: "0vw", opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className={` ${inView1 ? "true" : "false"} `}
          ref={ref1}
        >
          <p
            className={`bio__text en ${
              isJapanese ? "hidden" : ""
            }`}
          >
            I started learning programming on my own in July 2022 to acquire
            practical skills. My interest in IT grew from this experience. I
            have also become strongly attracted to the possibilities of design
            through my daily studies.
          </p>
          <p
            className={`bio__text jp ${
              isJapanese ? "" : "hidden"
            }`}
          >
            実践的なスキルを身につけるため、2022年7月からプログラミング学習を独学で始めました。ITに対する興味はこの経験から芽生えました。日々の学びを通じて、デザインの可能性にも目を向けるようになりデザインの可能性に強く惹かれるようになりました。{" "}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, y: "10vw" }}
          animate={inView2 ? { y: "0vw", opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className={` ${inView2 ? "true" : "false"} `}
          ref={ref2}
        >
          <div
            className={`bio__text  en ${
              isJapanese ? "hidden" : ""
            }`}
          >
            I have come to think deeply about how design responds to people's
            needs and influences society. I want to have a new perspective and
            work to have a positive impact on society.
          </div>
          <div
            className={`bio__text jp ${
              isJapanese ? "" : "hidden"
            }`}
          >
            デザインがどのように人々のニーズに応え、社会に影響を与えるかについて深く考えるようになりました。私は新しい視点を持ち、社会にポジティブな影響を与えることに取り組みたいと考えています。
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Bio;
