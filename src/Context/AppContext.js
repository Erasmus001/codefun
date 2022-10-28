/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext({
	currentUser: null,
});

export const useAuth = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	const Login = (email, password) => {};

	const values = {
		Login,
		currentUser,
	};

	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
