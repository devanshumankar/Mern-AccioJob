import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div>
			<nav>
				<NavLink to="/login">Login</NavLink>
				<NavLink to="/signup">Sign Up</NavLink>
				<NavLink to="/profile">Profile</NavLink>
			</nav>
			<Outlet></Outlet>
		</div>
	);
};

export default Layout;
