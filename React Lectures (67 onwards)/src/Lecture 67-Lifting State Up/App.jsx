import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./component/Form";
import Products from "./component/Products";
import AllSorts from "./component/AllSorts";
import Posts from "./component/Posts";

const App = () => {
	const [products, setProducts] = useState([]);
	function handleSortClick(value) {
		console.log({ value });
		let productsCopy = [...products];

		if (value == "Name") {
			productsCopy.sort((a, b) => a.name.localeCompare(b.name));
		} else if (value == "Amount") {
			productsCopy.sort((a, b) => a.amount - b.amount);
		} else {
			productsCopy.sort((a, b) => a.quantity - b.quantity);
		}

		setProducts(productsCopy);
	}

	return (
		<>
			<Form setProducts={setProducts} />
			{products.length >= 2 && <AllSorts onClick={handleSortClick}></AllSorts>}

			<Products products={products} />
			{/* <Posts></Posts> */}
		</>
	);
};

export default App;
