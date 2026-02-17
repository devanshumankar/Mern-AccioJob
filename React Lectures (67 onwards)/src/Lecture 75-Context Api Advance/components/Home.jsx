import React, { use, useContext } from "react";
import AuthContext from "../context/AuthContext";

const Home = () => {
	const { user } = useContext(AuthContext);
	return (
		user && (
			<div>
				{user.name}
				{user.phone}
			</div>
		)
	);
};

export default Home;
