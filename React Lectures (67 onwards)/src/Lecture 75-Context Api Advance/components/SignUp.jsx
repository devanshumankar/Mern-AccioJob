import React from "react";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
const SignUp = () => {
	const { signUp } = useContext(AuthContext);
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	function handleSubmit(e) {
		e.preventDefault();
		signUp({ name, password, email, phone });
		setEmail("");
		setName("");
		setPassword("");
		setPhone("");
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="enter username"
				value={name}
				onChange={(e) => setName(e.target.value)}
			></input>
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
			<input
				type="text"
				placeholder="enter phone"
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
			></input>
			<button type="submit">SignUp</button>
		</form>
	);
};

export default SignUp;
