import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
	const [data, setData] = useState({});
	const { id } = useParams();
	useEffect(() => {
		fetch(`https://dummyjson.com/products/${id}`)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setData(res);
			});
	}, [id]);
	return (
		<div>
			<h3>Title:{data.title}</h3>
			<p>Description: {data.description}</p>
			<p>Price:{data.price}</p>
			<img src={data.images}></img>
		</div>
	);
};

export default Product;
