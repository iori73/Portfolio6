import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./components/css/index.css";
import { Home, Work1, Work2, Global } from "./index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const App = () => {
  const [isJapanese, setLanguage] = useState(true);

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