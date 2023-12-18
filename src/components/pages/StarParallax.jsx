// import { useState, useRef, useLayoutEffect } from 'react'
// import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'



// const StarParallax = ({ children, offset = 1 }) => {
//     const [elementTop, setElementTop] = useState(0);
//     const [clientHeight, setClientHeight] = useState(0);
//     const ref = useRef(null);
  
//     const { scrollY } = useScroll();
  
//     const initial = elementTop - clientHeight;
//     const final = elementTop + offset;
  
//     const yRange = useTransform(scrollY, [initial, final], [.2, -.2]);
//     const y = useSpring(yRange, { stiffness: 10, damping: 2 });
  
//     useLayoutEffect(() => {
//       const element = ref.current;
//       const onResize = () => {
//         setElementTop(element.getBoundingClientRect().top + window.scrollY );
//         setClientHeight(window.innerHeight);
//       };
//       onResize();
//       window.addEventListener('resize', onResize);
//       return () => window.removeEventListener('resize', onResize);
//     }, [ref]);
  
//     return (
//       <motion.div ref={ref} style={{ y }} className='paramotion'>
//         {children}
//       </motion.div>
//     );
//   };
  

// export default StarParallax


// legacy
import { useState, useRef, useLayoutEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'
import PropTypes from 'prop-types';

const StarParallax = ({ children, offset = 50 }) => {
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const ref = useRef(null)

  const { scrollY } = useScroll()

  const initial = elementTop - clientHeight
  const final = elementTop + offset

  const yRange = useTransform(scrollY, [initial, final], [1, -1])
  // damping を増やすと、動きがよりスムーズになります。
  const y = useSpring(yRange, { stiffness: 9, damping: 80 })

  useLayoutEffect(() => {
    const element = ref.current
    const onResize = () => {
      setElementTop(element.getBoundingClientRect().top + window.scrollY )
      setClientHeight(window.innerHeight)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [ref])

  const shouldReduceMotion = useReducedMotion()

  return shouldReduceMotion ? (
    <div>{children}</div>
  ) : (
    <motion.div ref={ref} style={{ y }} className='paramotion'>
      {children}
    </motion.div>
  )
}

// Prop types validation
StarParallax.propTypes = {
  children: PropTypes.node, 
  offset: PropTypes.number 
};


export default StarParallax
