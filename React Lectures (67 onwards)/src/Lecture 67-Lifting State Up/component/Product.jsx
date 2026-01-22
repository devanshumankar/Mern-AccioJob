import React, { useEffect } from "react";
import "../css/singleProduct.css";
const Product = ({ prod }) => {
	
	return (
		<div className="single-product">
			<h3>Name : {prod.name}</h3>
			<p>Desc : {prod.desc}</p>
			<p>Quantity : {prod.quantity}</p>
			<p>Amount : {prod.amount}</p>
		</div>
	);
};

export default Product;
