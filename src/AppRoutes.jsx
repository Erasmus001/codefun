import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Signup from "./Pages/Auth/Signup/Signup";
import ContactUs from "./Pages/Contact/ContactUs";
import Courses from "./Pages/Courses/Courses";
import Homepage from "./Pages/Home/Homepage";
// import Mentorship from "./Pages/Mentorship/Mentorship";
// import Beginner from "./Pages/Mentorship/SingleMentorship/Beginner";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          {/* <Route path="/mentorship" element={<Mentorship />} /> */}
          {/* <Route path="/mentorship/beginner" element={<Beginner />} /> */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/join-us" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
