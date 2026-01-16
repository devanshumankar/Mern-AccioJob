import React from "react";
import "../css/productcard.css";
const ProductCard = ({ title, price, image, description, theme }) => {
	return (
		<div className={theme}>
			<h2>{title}</h2>
			<img src={image} alt="iphone"></img>
			<h3>Price : {price}</h3>
			<p>{description}</p>
			<button className="btn">Add to Cart</button>
		</div>
	);
};

export default ProductCard;
