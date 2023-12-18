import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ParallaxComponent = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className="parallax"
      style={{
        transform: `translateY(${offsetY * 0.5}px)`
      }}
    />
  );
};

export default ParallaxComponent;
