import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../lottie/redtoyellow.json';

function Lottie1() {
  return (
    <div className='lottie-container'>
      <Lottie 
        animationData={animationData}
        loop={true}
        autoplay={true}
        className='lottie'
      />
    </div>
  );
}

export default Lottie1;
