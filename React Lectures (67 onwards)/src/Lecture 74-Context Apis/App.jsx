import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import { useState } from "react";
const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout></Layout>,
			children: [
				{
					path: "home",
					element: (
						<ProtectedRoute isLoggedIn={isLoggedIn}>
							<Home></Home>
						</ProtectedRoute>
					),
				},
				{
					path: "about",
					element: <About></About>,
				},
				{
					path: "login",
					element: (
						<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
					),
				},
			],
		},
	]);
	return <RouterProvider router={router}></RouterProvider>;
};

export default App;
