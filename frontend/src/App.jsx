/* eslint-disable no-unused-vars */
import React from "react";
import {BrowserRouter ,Routes, Route } from "react-router-dom";
import Home from "./Home";
import Success from "./Success";
import Cancel from "./Cancel";

const App = () => {
  return (
    <div>
      <Routes>
      {/* <Route path="/" element={<home />}/> */}
      <Route path="/" element={<Home />} />
      <Route path="/Success" element={<Success />} />
      <Route path="/Cancel" element={<Cancel />} />


      </Routes>
    </div>
  );
};

export default App;
