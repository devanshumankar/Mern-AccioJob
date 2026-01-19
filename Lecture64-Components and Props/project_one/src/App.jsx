import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import GrandParent from "./components/GrandParent";
import Profile from "./components/Profile";
function App() {
	const [tab, setTab] = useState("home");
	const array = [
		{
			name: "Devanshu",
			role: "SDE1",
		},
		{
			name: "Prajwal",
			role: "Data Analyst",
		},
		{
			name: "Tanmay",
			role: "Java Developer",
		},
	];
	return (
		<div className="main-container">
			{/* <Card>
				<h1>Devanshu</h1>
				<p>Raj</p>
			</Card> */}
			{/* <button onClick={() => setTab("home")}>Home</button>
			<button onClick={() => setTab("about")}>About</button>
			<button onClick={() => setTab("contact")}>Contact</button>

			{tab === "home" ? (
				<Home></Home>
			) : tab == "about" ? (
				<About></About>
			) : (
				<Contact></Contact>
			)}
			<GrandParent name="Devanshu"></GrandParent> */}
			{array.map((ele, id) => (
				<Profile name={ele.name} role={ele.role} key={id}></Profile>
			))}
		</div>
	);
}

export default App;
