import React from 'react';
import Parallax from './WorksParallax';

const Work = ({ work, isJapanese }) => {
  const parallaxProps = [
    { offset: 100, stiffness: 100 },
    { offset: 100, stiffness: 150 },
    { offset: 100, stiffness: 200 },
  ];

  const images = [work.image1, work.image2];

  return (
    <div className={`works__work ${work.className}`}>
      <div className="work-img-container">
        {images.map((image, index) => (
          <Parallax
            key={index}
            offset={parallaxProps[index % parallaxProps.length].offset}
            stiffness={parallaxProps[index % parallaxProps.length].stiffness}
          >
            <img
              src={image}
              alt={`${work.alt} ${index + 1}}`}
              className={`works-img${index + 1}`}
            />
          </Parallax>
        ))}
      </div>

      <div className="work-text">
        <div className="work-time">
          <div className="work-date">{work.date}</div>
          <img className="work-tool-logo" src={work.toolLogo} alt="tool logo" />
          <div className={`work-period jp ${isJapanese ? "" : "hidden"}`}>
            <p>制作期間：</p>
            {work.periodJP}
          </div>
          <div className={`work-period en ${isJapanese ? "hidden" : ""}`}>
            <p>Period:</p>
            {work.periodEN}
          </div>
        </div>

        <div className="work-title-container">
          <div className={`work-semi-title jp ${isJapanese ? "" : "hidden"}`}>
            {work.semiTitleJP}
          </div>
          <div className={`work-semi-title en ${isJapanese ? "hidden" : ""}`}>
            {work.semiTitleEN}
          </div>

          <div className="work-title">
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              <h3 className={`jp ${isJapanese ? "" : "hidden"}`}>
                {work.titleJP}
              </h3>
            </a>
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              <h3 className={`en ${isJapanese ? "hidden" : ""}`}>
                {work.titleEN}
              </h3>
            </a>
          </div>
        </div>

        <div className="work-text-sent">
          <p className={`jp ${isJapanese ? "" : "hidden"}`}>
            {work.descJP}
          </p>
          <p className={`en ${isJapanese ? "hidden" : ""}`}>
            {work.descEN}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
