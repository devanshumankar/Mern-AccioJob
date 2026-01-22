import React from "react";
import Parent1Child1 from "./Parent1Child1";
import Parent1Child2 from "./Parent1Child2";
import Parent3Child3 from "./Parent3Child3";

const Parent1 = ({ sendClick }) => {
	return (
		<div className="parent1">
			<Parent1Child1 onClick={sendClick}></Parent1Child1>
			<Parent1Child2 onClick={sendClick}></Parent1Child2>
			<Parent3Child3 onClick={sendClick}></Parent3Child3>
		</div>
	);
};

export default Parent1;
