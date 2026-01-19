import React from "react";
import Parent from "./Parent";

const GrandParent = ({ name }) => {
	return (
		<div>
			<h3>GrandParent:{name}</h3>
			<Parent name={name}></Parent>
		</div>
	);
};

export default GrandParent;
