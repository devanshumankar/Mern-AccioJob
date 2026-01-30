import React from "react";

const ShowTodo = ({ allTodos }) => {
	return (
		<ol>
			{allTodos.map((ele, ind) => {
				return <li key={ind}>{ele}</li>;
			})}
		</ol>
	);
};

export default ShowTodo;
