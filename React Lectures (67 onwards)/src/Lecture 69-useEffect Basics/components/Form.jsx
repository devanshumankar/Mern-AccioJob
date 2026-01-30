import React, { useState } from "react";

const Form = ({ sendData }) => {
	const [todo, setTodo] = useState("");

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				sendData(todo);
				setTodo("");
			}}
		>
			<input
				type="text"
				placeholder="enter todo"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			></input>
			<button type="submit">Add Todo</button>
		</form>
	);
};

export default Form;
