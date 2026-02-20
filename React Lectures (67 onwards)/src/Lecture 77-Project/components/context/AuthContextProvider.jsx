import React, { useEffect, useState } from "react";
import AuthContext from "./authContext";

const AuthContextProvider = ({ children }) => {
	const [error, setError] = useState("");
	const [currentUser, setCurrentUser] = useState(
		localStorage.getItem("currentUser") ?
			JSON.parse(localStorage.getItem("currentUser"))
		:	null,
	);
	const [users, setUsers] = useState(
		localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [],
	);
	function signUp({ name, email, password }) {
		if (!name || !email || !password) {
			setError("All Fields are Required");
			return;
		}
		setUsers((prev) => [...prev, { name, email, password }]);
		setCurrentUser({ name, email, password });
	}
	function login({ email, password }) {
		if (!email || !password) {
			setError("All Fields are Required");
			return;
		}
		const ind = users.findIndex((ele) => ele.email == email);
		if (ind == -1) {
			setError("No User Exists");
		} else {
			const temp = users[ind];
			if (temp.password == password) {
				setCurrentUser(temp);
			} else {
				setError("Password Invalid");
			}
		}
	}
	useEffect(() => {
		localStorage.setItem("users", JSON.stringify(users));
		localStorage.setItem("currentUser", JSON.stringify(currentUser));
	}, [users]);
	return (
		<AuthContext.Provider
			value={{ login, signUp, error, currentUser, setCurrentUser }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
