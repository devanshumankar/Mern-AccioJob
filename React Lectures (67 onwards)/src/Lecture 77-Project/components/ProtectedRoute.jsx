import React, { useContext } from "react";
import AuthContext from "./context/authContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const { currentUser } = useContext(AuthContext);
	return currentUser ? children : <Navigate to="/login"></Navigate>;
};

export default ProtectedRoute;
