import React from "react";

const Parent1Child2 = ({ onClick }) => {
	return <button onClick={() => onClick(2)}>2</button>;
};

export default Parent1Child2;
