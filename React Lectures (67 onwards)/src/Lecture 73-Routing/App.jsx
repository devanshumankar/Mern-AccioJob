import React from "react";
import Products from "./Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./Product";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Products></Products>,
		},
		{
			path: "/product/:id",
			element: <Product></Product>,
		},
	]);
	return (
		<RouterProvider router={router}>
			<Products></Products>
		</RouterProvider>
	);
};

export default App;
