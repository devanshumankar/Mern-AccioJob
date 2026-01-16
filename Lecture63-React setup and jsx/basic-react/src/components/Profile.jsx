import React from "react";
import "../css/profile.css";
const Profile = ({ name, imgSrc, role, theme }) => {
	return (
		<div className={theme}>
			<img src={imgSrc}></img>
			<h2>{name}</h2>
			<p>Role : {role}</p>
		</div>
	);
};

export default Profile;
