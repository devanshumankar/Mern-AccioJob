import React from "react";
import "../css/sort.css";
const Sort = ({ value, onClick }) => {
	return (
		<button className="sort-btn" onClick={() => {onClick(value)}}>
			{value}
		</button>
	);
};

export default Sort;
