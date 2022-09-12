import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Homepage from "./Pages/Home/Homepage";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
