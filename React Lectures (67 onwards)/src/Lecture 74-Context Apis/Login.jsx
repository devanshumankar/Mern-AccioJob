import React, { useState } from "react";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
	return (
		<button onClick={() => setIsLoggedIn(!isLoggedIn)}>
			{!isLoggedIn ? "Login" : "Logout"}
		</button>
	);
};

export default Login;
