import { useEffect, useRef } from 'react';

function Global({ isJapanese, setLanguage }) {
  const cursorRef = useRef(null);
  const stalkerRef = useRef(null);

  useEffect(() => {
    const cursorElement = cursorRef.current;
    const stalkerElement = stalkerRef.current;


    const mouseMoveHandler = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      cursorElement.style.left = `${x}px`;
      cursorElement.style.top = `${y}px`;

      setTimeout(() => {
        stalkerElement.style.left = `${x}px`;
        stalkerElement.style.top = `${y}px`;
      }, 140);
    };

    document.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);


  const handleTranslateClick = () => {
    setLanguage(!isJapanese);
  };


  return (
    <>
      <div ref={cursorRef} id="cursor"></div>
      <div ref={stalkerRef} id="stalker"></div>

      <button id="translate" onClick={handleTranslateClick}>
        EN-JP
      </button>
    </>
  );
}

export default Global;
