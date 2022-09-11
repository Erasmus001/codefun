import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";
import { BrowserRouter } from "react-router-dom";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
