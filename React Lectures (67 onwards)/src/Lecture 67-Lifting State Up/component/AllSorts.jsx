import React from "react";
import Sort from "./Sort";
import "../css/allSorts.css";
const AllSorts = ({ onClick }) => {
	const array = ["Name", "Amount", "Quantity"];
	return array.map((ele, ind) => {
		return <Sort key={ind} value={ele} onClick={onClick}></Sort>;
	});
};

export default AllSorts;
