import React, { useEffect, useState } from "react";
import "./css/product.css";
import { Link } from "react-router-dom";
const Products = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((res) => setProducts(res.products))
			.catch((err) => console.log(err));
	}, []);
	return (
		<div>
			{products.map((ele) => {
				return (
					<div key={ele.id} className="product">
						<h3>Title:{ele.title}</h3>
						<p>Description: {ele.description}</p>
						<p>Price:{ele.price}</p>
						<img src={ele.images[0]}></img>
						<button>
							<Link to={`product/${ele.id}`}>View Details</Link>
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Products;
