import React from "react";

const Parent1Child1 = ({ onClick }) => {
	return <button onClick={() => onClick(1)}>1</button>;
};

export default Parent1Child1;
