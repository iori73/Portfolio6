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
    <div className="bio section">
      <div className="bio-img-container">
        <img className="bio-img " src="profile-min.png"></img>
      </div>
      <div className="bio-text-container">
        <h2 className="bio-name">Iori Kawano</h2>

        <motion.div
          initial={{ opacity: 0.3, y: "10vw" }}
          animate={inView1 ? { y: "0vw", opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className={` ${inView1 ? "true" : "false"} `}
          ref={ref1}
        >
          <p
            className={`bio-text toggleBox-en ${
              isJapanese ? "display-none" : ""
            }`}
          >
            I started studying programming on my own in July 2022. This was the
            beginning of my interest in IT. I want to contribute to creating
            services that people benefit in a global working environment.
          </p>
          <p
            className={`bio-text toggleBox-jp ${
              isJapanese ? "" : "display-none"
            }`}
          >
            2022年7月から独学でプログラミングの勉強を始めました。これをきっかけにITに興味を持ち始めました。私はグローバルな環境で、人々に利益を届けるサービスづくりに貢献したいと考えています。
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
            className={`bio-text  toggleBox-en ${
              isJapanese ? "display-none" : ""
            }`}
          >
            I have a strong interest in English and different cultures, and a
            desire to collaborate with people from diverse backgrounds. In the
            future, I aim to work overseas while quickly adapting to
            technological advancements.
          </div>
          <div
            className={`bio-text toggleBox-jp ${
              isJapanese ? "" : "display-none"
            }`}
          >
            私には英語や異文化に対する強い興味と、バックグラウンドが違う人とコラボレーションしたいという思いがあります。将来的には技術の進歩に素早く適応しながら、海外で働くことを目標としています。{" "}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Bio;
