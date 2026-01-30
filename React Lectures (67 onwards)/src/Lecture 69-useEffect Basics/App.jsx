import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import Timer from "./components/Timer";

const App = () => {
	const [showTime, setShowTime] = useState(false);
	// const [todos, setTodos] = useState([]);
	// // mounting
	// useEffect(() => {}, []);

	// // unmounting
	// useEffect(() => {
	//     // same as mounting
	// 	return () => {
	// 		// run on unmounting
	// 	};
	// }, []);

	// // capture phase

	// useEffect(() => {
	// 	// this will run on each todos
	// }, [todos]);
	// return <div>Hello</div>;
	return (
		<>
			{/* <Todo></Todo> */}
			<button>{showTime ? "Hide" : "show"}</button>
			{showTime && <Timer></Timer>}
		</>
	);
};

export default App;
