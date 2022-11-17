/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import userDB from "../utils/userDB";

const AppContext = createContext({
  currentUser: null,
  userCourses: [],
});

export const useAuth = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Create a user
  const registerUser = (email, password, username) => {
    const user = {
      name: username,
      password,
      email,
    };
    // if (!email) {
    //   toast.error("Sorry, Please enter your email");
    // } else if (!password) {
    //   toast.error("Sorry, Please enter a secure password");
    // } else if (!username) {
    //   toast.error("Soory, Please enter your username");
    // } else {
    userDB.push({
      id: Math.floor(Math.random() * 100000),
      username,
      email,
      password,
    });

    // Set currentUser to registered user...
    setCurrentUser(user);

    localStorage.setItem("userDB", JSON.stringify(userDB));
    // }
  };

  const loginUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem("userDB"));

    const currentUser = users?.find(
      (email, password) =>
        email !== users.email && password !== users.password
    );

    console.log(`Current user => `, currentUser);
  };

  const values = {
    loginUser,
    currentUser,
    registerUser,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
