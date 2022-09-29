import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Signup from "./Pages/Auth/Signup/Signup";
import ContactUs from "./Pages/Contact/ContactUs";
import Homepage from "./Pages/Home/Homepage";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/join-us" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
