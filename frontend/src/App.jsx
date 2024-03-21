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
      <Route path="/frontend/src/Home.jsx" element={<Home />} />
      <Route path="/frontend/src/Success.jsx" element={<Success />} />
      <Route path="/frontend/src/Cancel.jsx" element={<Cancel />} />

      {/* <Route path="/success" element={<success />}/> */}
        {/* <Route path="/"  element={<home/>} />
        <Route path="/success" element={<success/>} />
        <Route path="/cancel" element={<cancel/>} /> */}
      </Routes>
    </div>
  );
};

export default App;
