import React, { useEffect, useState } from "react";
import Form from "./Form";
import ShowTodo from "./ShowTodo";

const Todo = () => {
	const [todos, setTodos] = useState(() => {
		const savedTodo = localStorage.getItem("todos");
		return savedTodo ? JSON.parse(savedTodo) : [];
	});
	function handleForm(val) {
		if (!val) return;
		setTodos((prev) => [...prev, val]);
	}
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
			.then((res) => res.json())
			.then((res) => {
				const data = res;
				setTodos((prev) => [...prev, ...data.map((ele) => ele.title)]);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	return (
		<>
			<h1>Todos</h1>
			<Form sendData={handleForm}></Form>
			{todos.length > 0 && <ShowTodo allTodos={todos}></ShowTodo>}
			{loading && <p>Loading Data</p>}
		</>
	);
};

export default Todo;
