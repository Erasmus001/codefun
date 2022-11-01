/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Signup from "./Pages/Auth/Signup/Signup";
import ContactUs from "./Pages/Contact/ContactUs";
import Courses from "./Pages/Courses/Courses";
import Homepage from "./Pages/Home/Homepage";
import Course from "./Pages/Course/Course";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Signin from "./Pages/Auth/Signin/Signin";
import UserDashboard from "./Pages/UserDashboard/UserDashboard";
import UserCourses from './Pages/UserDashboard/UserCourses/UserCourses'
import UserAssignment from './Pages/UserDashboard/UserAssignment/UserAssignment'
import UserEvents from './Pages/UserDashboard/UserEvent/UserEvents'
import UserSettings from './Pages/UserDashboard/UserSettings/UserSettings'

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
          <Route path="/join-us" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/me" element={<UserDashboard />} />
          <Route path="/me/:userId" element={<UserDashboard />} />
          <Route path="/me/:userId/courses" element={<UserCourses />} />
          <Route path="/me/:userId/assignments" element={<UserAssignment />} />
          <Route path="/me/:userId/events" element={<UserEvents />} />
          <Route path="/me/:userId/settings" element={<UserSettings />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
