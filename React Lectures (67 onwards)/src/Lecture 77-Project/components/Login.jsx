import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "./context/authContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const emailRef = useRef();
	useEffect(() => {
		emailRef.current.focus();
	}, []);
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [remember, setRemember] = useState(null);
	const timer = useRef(null);
	const { login, error, setCurrentUser } = useContext(AuthContext);
	function handleClick(e) {
		e.preventDefault();
		login({ email, password });
		if (remember) {
			debouncing(1000);
		} else {
			debouncing(2000);
		}
		navigate("/profile");
	}

	function handleForgot() {
		navigate("/forget");
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
				type="email"
				ref={emailRef}
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
			<label htmlFor="remember">Remember me</label>

			<button onClick={handleForgot}>Forgot Password</button>
			<button onClick={handleClick}>Login</button>
			{error && <p>{error}</p>}
		</form>
	);
};

export default Login;
