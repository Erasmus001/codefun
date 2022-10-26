import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Signup from "./Pages/Auth/Signup/Signup";
import ContactUs from "./Pages/Contact/ContactUs";
import Courses from "./Pages/Courses/Courses";
import Homepage from "./Pages/Home/Homepage";
import Course from "./Pages/Course/Course";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<Course />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* <Route path="/contact" element={<Mentors />} /> */}
          <Route path="/join-us" element={<Signup />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
