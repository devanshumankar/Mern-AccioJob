import React from "react";
import "../css/profile.css";
const Profile = ({ name, role }) => {
	return (
		<div className="profile">
			<h3>Name : {name}</h3>
			<p>Role : {role}</p>
		</div>
	);
};

export default Profile;
