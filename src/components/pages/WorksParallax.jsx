import { useState, useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

const WorksParallax = ({ children, offset, stiffness }) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useScroll();

  // スクロール位置に基づいてサイン波形の動きを加える
  const y = useTransform(scrollY, value => {
    const wave = Math.sin(value / 100); // 100は波の間隔を調整
    return (offset + wave * 10); // 10は波の大きさを調整
  });

  const spring = useSpring(y, { stiffness: stiffness, damping: 80 });

  useLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset);
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [ref]);

  const shouldReduceMotion = useReducedMotion();

  return shouldReduceMotion ? (
    <>{children}</>
  ) : (
    <motion.div ref={ref} style={{ y: spring }} className="paramotion">
      {children}
    </motion.div>
  );
};

export default WorksParallax;
