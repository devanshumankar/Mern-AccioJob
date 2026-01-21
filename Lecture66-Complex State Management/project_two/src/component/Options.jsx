import React from "react";
import "../css/options.css";
const Options = ({ option, onClick, isSelected }) => {
	return (
		<div className={`option ${isSelected ? "selected" : ""}`} onClick={onClick}>
			{option}
		</div>
	);
};

export default Options;
