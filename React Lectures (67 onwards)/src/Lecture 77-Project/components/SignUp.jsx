import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "./context/authContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const nameRef = useRef();
	useEffect(() => {
		nameRef.current.focus();
	}, []);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const { error, signUp, setCurrentUser } = useContext(AuthContext);
	const [remember, setRemember] = useState(null);
	const timer = useRef(null);
	const navigate = useNavigate();
	function handleSubmit(e) {
		e.preventDefault();
		signUp({ name, email, password });
		setEmail("");
		setName("");
		setPassword("");
		if (remember) {
			debouncing(1000);
		} else {
			debouncing(2000);
		}
		navigate("/profile");
	}
	function debouncing(delay) {
		clearInterval(timer.current);
		timer.current = setTimeout(() => {
			console.log("debouncing done");
			setCurrentUser(null);
		}, delay);
	}
	return (
		<form>
			<input
				type="text"
				ref={nameRef}
				placeholder="enter name"
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
				type="checkbox"
				id="remember"
				onChange={(e) => setRemember(e.target.checked)}
			/>
			<label htmlFor="remember">remember me</label>

			<button onClick={handleSubmit}>SignUp</button>
			{error && <p>{error}</p>}
		</form>
	);
};

export default SignUp;
