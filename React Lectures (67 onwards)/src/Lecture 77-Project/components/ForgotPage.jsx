import React, { useEffect, useState } from "react";

const ForgotPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [users, setUsers] = useState(
		localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [],
	);
	useEffect(() => {
		localStorage.setItem("users", JSON.stringify(users));
	}, [users]);
	function handleReset(e) {
		e.preventDefault();

		if (!email || !password) {
			setError("All Fields required");
			return;
		}
		const user = users.find((ele) => ele.email == email);
		if (!user) {
			setError("User Not Found");
			return;
		}
		if (user.password == password) {
			setError("Password should not match previous password");
			return;
		}
		setUsers(
			users.map((ele) => {
				if (ele.email == email) {
					ele.password = password;
				}
				return ele;
			}),
		);
		setError("");
		setPassword("");
		setEmail("");
	}
	return (
		<form>
			<input
				type="email"
				placeholder="enter email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			></input>
			<input
				type="password"
				placeholder="enter new password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			></input>
			<button onClick={handleReset}>Reset</button>
			{error && <p>{error}</p>}
		</form>
	);
};

export default ForgotPage;
