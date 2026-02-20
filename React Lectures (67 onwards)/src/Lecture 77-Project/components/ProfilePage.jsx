import React, { useContext } from "react";
import AuthContext from "./context/authContext";

const ProfilePage = () => {
	const { currentUser, setCurrentUser } = useContext(AuthContext);
	function handleLogout() {
		setCurrentUser(null);
	}
	return (
		<div>
			{currentUser && <p>Current User:{currentUser.name}</p>}
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};

export default ProfilePage;
