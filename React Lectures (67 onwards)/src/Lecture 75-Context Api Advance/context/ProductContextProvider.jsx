import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import axios from "axios";
const ProductContextProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			const res = axios.get("https://dummyjson.com/products");
			setProducts(res.data.products);
		}
		fetchProducts();
	}, []);
	return <ProductContext.Provider>{children}</ProductContext.Provider>;
};

export default ProductContextProvider;
