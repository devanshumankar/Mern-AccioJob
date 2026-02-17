import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const Login = () => {
	const { user, login, logout } = useContext(AuthContext);
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	return (
		<div>
			{user && <button onClick={() => logout()}>Logout</button>}
			{!user && (
				<div>
					<input
						type="email"
						placeholder="enter email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></input>
					<input
						type="password"
						placeholder="enter password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></input>
					<button
						onClick={() => {
							login({ email, password });
							setEmail("");
							setPassword("");
						}}
					>
						Login
					</button>
				</div>
			)}
		</div>
	);
};

export default Login;
