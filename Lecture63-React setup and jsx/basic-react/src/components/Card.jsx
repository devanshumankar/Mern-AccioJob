import React from "react";
import "../css/card.css";
const Card = ({ theme }) => {
	return <div className={theme}>Theme: {theme}</div>;
};

export default Card;
