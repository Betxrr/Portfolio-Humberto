import React from "react";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <div className="TopperContainer">
        <h1></h1>
      </div>

      <div className="BodyContainer">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route   path="/about" element={<h1>About Page</h1>} />
          <Route path="/projects" element={<h1>Projects Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </div>
    </div>
  );
}
