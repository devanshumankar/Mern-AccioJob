import React from "react";
import Child from "./Child";
import Child2 from "./Child2";
const Parent = ({ name }) => {
	return (
		<div>
			<h3>Parent:{name}</h3>
			<Child name={name}></Child>
			<Child2 name="Child2"></Child2>
		</div>
	);
};

export default Parent;
