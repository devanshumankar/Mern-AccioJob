import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProfilePage from "./components/ProfilePage";
import AuthContextProvider from "./components/context/AuthContextProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPage from "./components/ForgotPage";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout></Layout>,
			children: [
				{
					path: "login",
					element: <Login></Login>,
				},
				{
					path: "signup",
					element: <SignUp></SignUp>,
				},
				{
					path: "profile",

					element: (
						<ProtectedRoute>
							<ProfilePage></ProfilePage>,
						</ProtectedRoute>
					),
				},
				{
					path: "forget",
					element: <ForgotPage></ForgotPage>,
				},
			],
		},
	]);
	return (
		<AuthContextProvider>
			<RouterProvider router={router}></RouterProvider>;
		</AuthContextProvider>
	);
};

export default App;
