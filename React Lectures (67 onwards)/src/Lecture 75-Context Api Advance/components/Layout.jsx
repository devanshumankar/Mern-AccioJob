import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div>
			<nav>
				<Link to="/home">Home</Link>
				<Link to="/login">Login</Link>
				<Link to="/signup">SignUp</Link>
			</nav>
			<Outlet></Outlet>
		</div>
	);
};

export default Layout;
