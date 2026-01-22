import React, { useState } from "react";
import Parent1 from "./Parent1";
import Parent2 from "./Parent2";
import "../css/homework.css";
const App = () => {
	const [click, setClick] = useState();
	function handleClick(val) {
		setClick(val);
	}
	return (
		<div className="container">
			<Parent1 sendClick={handleClick}></Parent1>
			<Parent2 value={click}></Parent2>
		</div>
	);
};

export default App;
