import React, { useState, useEffect } from "react";

const socialLinks = [
  { href: "https://github.com/yoriss67", src: "icons/github-orgnl.svg" },

  { href: "https://twitter.com/iori73wsy", src: "icons/x-twitter.svg" },
  { href: "https://www.linkedin.com/in/iori-kawano-131a4122a/", src: "icons/linkedin.svg"},
  { href: "https://student.redesigner.jp/students/afd0d567a69657ea22e57f9faf589f10", src: "icons/ReDesigner.svg"},
  { href: "https://note.com/yoriss_b0607", src: "icons/note.svg" },
  { href: "https://medium.com/@iori730002204294", src: "icons/medium.svg" },
];

export default function Header() {
  const [stickySocial, setStickySocial] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      const socialElement = document.querySelector(".social");
      if (socialElement) {
        const socialTop = socialElement.getBoundingClientRect().top;

        if (socialTop * 7 < scrollY) {
          setStickySocial(true);
          console.log("sticky");
        } else {
          setStickySocial(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerStyle = {
    // isMobile ? 'sp' : 'pc' 今広がる仕様
    scale: stickySocial ? "1" : "1",
    padding: stickySocial ? isMobile ? "1rem 0" : ".8rem 0" : isMobile ? "1rem 0" : "1.5rem 0",
  };

  const socialStyle = {
    gap: stickySocial ? isMobile ? "1.9rem" : "6rem" : isMobile ? "1.5rem" : "5rem",

  }
  return (

    <header className="header" style={headerStyle}>
      <div className="header__social-container" style={socialStyle}>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            // className={`header__social-icon`}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
          >
            <img src={link.src} alt={link.label} className="header__icon-img" />
          </a>
        ))}
      </div>
    </header>
  );
}
