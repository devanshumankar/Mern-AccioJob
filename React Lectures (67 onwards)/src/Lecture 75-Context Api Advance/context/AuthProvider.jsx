import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();
	const [prevUser, setPrevUser] = useState();
	function signUp({ name, email, password, phone }) {
		if (!name || !email || !password || !phone) {
			return false;
		}
		setUser({ name, email, password, phone });
		setPrevUser({ name, email, password, phone });
		return true;
	}
	function login({ email, password }) {
		if (prevUser?.email == email && prevUser?.password == password) {
			setUser(prevUser);
			return true;
		}
		return false;
	}
	function logout() {
		if (user) {
			setUser(null);
			return true;
		} else {
			return false;
		}
	}
	return (
		<AuthContext.Provider value={{ login, signUp, logout, user }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
