import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<nav>
				<NavLink
					to="/home"
					style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
				>
					Home
				</NavLink>
				<NavLink
					to="/about"
					style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
				>
					About
				</NavLink>
				<NavLink
					to="/login"
					style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
				>
					Login
				</NavLink>
			</nav>
			<Outlet></Outlet>
		</>
	);
};

export default Layout;
