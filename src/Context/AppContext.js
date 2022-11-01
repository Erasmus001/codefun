/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import userDB from "../utils/userDB";

const AppContext = createContext({
  currentUser: null,
});

export const useAuth = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Create a user
  const registerUser = (email, password, username) => {};

  const loginUser = (email, password) => {};

  const values = {
    loginUser,
    currentUser,
    registerUser,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
