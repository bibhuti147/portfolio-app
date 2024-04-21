import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/aboutme" element={<Aboutus />} />
        <Route path="/projects" element={<Authentication />} />
      </Routes>
    </Router>
  );
};

export default App;
