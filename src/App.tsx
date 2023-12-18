// // import React, { useState, useEffect } from "react";
// // import ReactDOM from "react-dom/client";
// // import "./components/css/index.css";
// // import { Header,Home, Work1, Work2, Global } from "./index";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// // import React, { useState, useEffect } from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './components/css/index.css';
// // import { Hero, Bio, Works, Global, Navbar, Footer, Note, ParallaxComponent, Lottie1 } from './index';


// // const App = () => {
// //   const [isJapanese, setLanguage] = useState(true);


// //   // useEffect(() => {
// //   //   const handleScroll = () => {
// //   //     const socialElement = document.querySelector(".social");
// //   //     if (socialElement) {
// //   //       // social要素の上部がビューポート上部に到達したかどうかを確認
// //   //       const socialTop = socialElement.getBoundingClientRect().top;

// //   //       if (socialTop * 7 < scrollY) {
// //   //         // sticky状態になる条件
// //   //         setStickySocial(true);
// //   //         console.log("sticky");
// //   //       } else {
// //   //         setStickySocial(false);
// //   //       }
// //   //     }
// //   //   };

// //   //   window.addEventListener("scroll", handleScroll);
// //   //   return () => window.removeEventListener("scroll", handleScroll);
// //   // }, []);

// //   // // spとpcで表示を変える
// //   // useEffect(() => {
// //   //   const handleResize = () => {
// //   //     setIsMobile(window.innerWidth <= 768);
// //   //   };

// //   //   window.addEventListener("resize", handleResize);
// //   //   return () => window.removeEventListener("resize", handleResize);
// //   // }, []);



// //   return (
// //     <Router>
// //       <Global isJapanese={isJapanese} setLanguage={setLanguage} />
// //       <Routes>
// //         <Route path="/" element={<Home isJapanese={isJapanese} />} />
// //         <Route path="/work1" element={<Work1 />} />
// //         <Route path="/work2" element={<Work2 />} />
// //       </Routes>



// //       {/* <div className="social" style={{ gap: stickySocial ? '4rem' : '3rem', scale: stickySocial ?  '1.1' : '1'  }}> */}
// //       <div className="social" style={socialStyle}>
// //         {socialLinks.map((link, index) => (
// //           <a
// //             key={index}
// //             className={`social-icon`}
// //             href={link.href}
// //             target="_blank"
// //             rel="noreferrer"
// //             aria-label={link.label}
// //           >
// //             <img src={link.src} alt={link.label} className="social-icon" />
// //           </a>
// //         ))}
// //       </div>
// //       <Bio isJapanese={isJapanese} />
// //       <Works isJapanese={isJapanese} />
// //       <Note isJapanese={isJapanese} />
// //       <Footer />
// //       <Lottie1 />
// //       {/* <ParallaxComponent /> */}
// //     </Router>
// //   );
// // };

// // export default App;


// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import './components/css/index.css';
// import { Hero, Bio, Currently, Works, Global, Navbar, Footer, Note, ParallaxComponent, Lottie1 } from './index';

// const socialLinks = [
//   { href: 'https://twitter.com/iori73wsy', src: 'icons/x-twitter.svg' },
//   { href: 'https://www.instagram.com/ioriiii_13/', src: 'icons/instagram.svg' },
//   { href: 'https://www.linkedin.com/in/iori-kawano-131a4122a/', src: 'icons/linkedin.svg' },
//   { href: 'https://github.com/yoriss67', src: 'icons/github-orgnl.svg' },
//   { href: 'https://note.com/yoriss_b0607', src: 'icons/note.svg' },
//   { href: 'https://student.redesigner.jp/students/afd0d567a69657ea22e57f9faf589f10', src: 'icons/ReDesigner.svg' },
// ];

// const App = () => {
//   const [isJapanese, setLanguage] = useState(true);
//   const [stickySocial, setStickySocial] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


//   useEffect(() => {
//     const handleScroll = () => {
//       const socialElement = document.querySelector('.social');
//       if (socialElement) {
//         // social要素の上部がビューポート上部に到達したかどうかを確認
//         const socialTop = socialElement.getBoundingClientRect().top;

//         if (socialTop * 7 < scrollY) {
//           // sticky状態になる条件
//           setStickySocial(true);
//           console.log('sticky');
//         } else {
//           setStickySocial(false);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);



//   // spとpcで表示を変える
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);




//     // スタイルを動的に設定
//     const socialStyle = {
//       // isMobile ? 'sp' : 'pc'　今広がる仕様になっている
//       gap: stickySocial ? (isMobile ? '1.9rem' : '6rem') : (isMobile ? '1.5rem' : '5rem') ,
//       scale: stickySocial ? '1' : '1',
//       padding: stickySocial ? (isMobile ? '1rem 0' : '1rem') : (isMobile ? '1.5rem 0' : '2rem'),
//     };




//   return (
//     <>
//       <Global isJapanese={isJapanese} setLanguage={setLanguage} />

//       <Hero isJapanese={isJapanese} />

//       {/* <div className="social" style={{ gap: stickySocial ? '4rem' : '3rem', scale: stickySocial ?  '1.1' : '1'  }}> */}
//       <div className="social" style={socialStyle}>
//         {socialLinks.map((link, index) => (
//           <a
//             key={index}
//             className={`social-icon`}
//             href={link.href}
//             target="_blank"
//             rel="noreferrer"
//             aria-label={link.label}
//           >
//             <img src={link.src} alt={link.label} className="social-icon" />
//           </a>
//         ))}
//       </div>
//       <Bio isJapanese={isJapanese} />
//       <Works isJapanese={isJapanese} />
//       <Note isJapanese={isJapanese} />
//       <Footer />
//       <Lottie1 />
//     </>
//   );
// };

// export default App;



import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./components/css/index.css";
import { Header,Home, Work1, Work2, Global } from "./index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const App = () => {
  const [isJapanese, setLanguage] = useState(true);
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const socialElement = document.querySelector(".social");
  //     if (socialElement) {
  //       // social要素の上部がビューポート上部に到達したかどうかを確認
  //       const socialTop = socialElement.getBoundingClientRect().top;

  //       if (socialTop * 7 < scrollY) {
  //         // sticky状態になる条件
  //         setStickySocial(true);
  //         console.log("sticky");
  //       } else {
  //         setStickySocial(false);
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // // spとpcで表示を変える
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);



  return (
    <Router>
      <Global isJapanese={isJapanese} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Home isJapanese={isJapanese} />} />
        <Route path="/work1" element={<Work1 />} />
        <Route path="/work2" element={<Work2 />} />
      </Routes>



    </Router>
  );
};

export default App;