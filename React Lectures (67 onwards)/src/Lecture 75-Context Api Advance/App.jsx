import React, { useContext } from "react";
import User from "./components/User";
import AuthContext from "./context/AuthContext";
import AuthProvider from "./context/AuthProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Products from "./components/Product";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout></Layout>,
			children: [
				{
					path: "signup",
					element: <SignUp />,
				},
				{
					path: "home",
					element: (
						<ProtectedRoute>
							<Home></Home>
						</ProtectedRoute>
					),
				},
				{
					path: "login",
					element: <Login></Login>,
				},
				{
					path: "product",
					element: <Products></Products>,
				},
			],
		},
	]);
	return (
		<AuthProvider>
			<RouterProvider router={router}></RouterProvider>
		</AuthProvider>
	);
};

export default App;
