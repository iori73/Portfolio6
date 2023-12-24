import WorksData from "./WorksData";
import "../../css/Works.css";

import Parallax from "./WorksParallax";
import { motion } from "framer-motion";


import Work from './Work';


const Works = ({ isJapanese }) => (
  <section className="works section">
    <h2>Works</h2>
    {WorksData.map((work) => (
      <Work key={work.id} work={work} isJapanese={isJapanese} />
    ))}
  </section>
);

export default Works;
