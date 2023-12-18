import React from 'react';
import Parallax from './Parallax';
import { motion } from 'framer-motion';

const Square = ({ height, backgroundColor, delay, zIndex }) => (
  <motion.div
    style={{
      position: 'absolute',
      width: '100%',
      height: `${height}px`,
      backgroundColor,
      zIndex: `${zIndex}`,
    }}
    initial={{ opacity: 0, y: '-20px' }}
    animate={{ opacity: 1, y: '0px' }}
    transition={{ delay: delay }}
  />
);

// 前
// #67A675
// #FCE258

function Waves() {
  const squaresData = [
    { height: 220, backgroundColor: '#78957b', delay: 4.2, offset: 600, zIndex: 1, stiffness: 200 },
    { height: 160, backgroundColor: '#ead6ad', delay: 3.8, offset: 600, zIndex: 2, stiffness: 180 },
    { height: 110, backgroundColor: '#CEDFD9', delay: 3.4, offset: 600, zIndex: 3, stiffness: 160 },
    { height: 70, backgroundColor: '#EDAF82', delay: 3.0, offset: 600, zIndex: 4, stiffness: 140 },
    { height: 40, backgroundColor: '#EECC98', delay: 2.6, offset: 600, zIndex: 5, stiffness: 120 },
    { height: 20, backgroundColor: '#615196', delay: 2.2, offset: 600, zIndex: 6, stiffness: 100 },
  ];

  const squares = squaresData.map((square, i) => (
    <Parallax key={i} offset={square.offset} stiffness={square.stiffness}>
      <Square key={i} height={square.height} backgroundColor={square.backgroundColor} delay={square.delay} zIndex={i} />
    </Parallax>
  ));

  return (
    <div>
      <div className="parallax-container">
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          {squares}
        </div>
      </div>
    </div>
  );
}
export default Waves;
