import React, { useState } from "react";
import Home from "./Home.jsx";
import About from "./About";
import Contact from "./Contact.jsx";
const Layout = () => {
	const [home, setHome] = useState(false);
	const [about, setAbout] = useState(false);
	const [contact, setContact] = useState(false);
	return (
		<div>
			<button
				onClick={() => {
					setHome(true);
					setAbout(false);
					setContact(false);
				}}
			>
				Home
			</button>
			<button
				onClick={() => {
					setHome(false);
					setAbout(true);
					setContact(false);
				}}
			>
				About
			</button>
			<button
				onClick={() => {
					setHome(false);
					setAbout(false);
					setContact(true);
				}}
			>
				Contact
			</button>
			<div>
				{home ? (
					<Home></Home>
				) : about ? (
					<About></About>
				) : contact ? (
					<Contact></Contact>
				) : null}
			</div>
		</div>
	);
};

export default Layout;
