import React, { useState } from "react";
import "../css/cardDetails.css";
const UserDetails = () => {
	const [users, setUsers] = useState([]);
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("");
	const handleClick = (e) => {
		e.preventDefault();

		if (!name || !age || !gender) {
			alert("All fields required");
			return;
		}
		const tempObj = {
			name,
			age,
			gender,
		};

		setUsers((prev) => [...prev, tempObj]);

		setName("");
		setAge("");
		setGender("");
	};
	return (
		<>
			<h1>User Details</h1>
			<form>
				<div className="name-container">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						placeholder="enter name"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					></input>
				</div>
				<div className="age-container">
					<label htmlFor="age">Age</label>
					<input
						type="number"
						placeholder="enter age"
						id="age"
						value={age}
						onChange={(e) => setAge(e.target.value)}
					></input>
				</div>
				<div className="gender-container">
					<label htmlFor="gender">Gender</label>
					<input
						type="radio"
						name="gender"
						value="male"
						checked={gender === "male"}
						onChange={(e) => setGender(e.target.value)}
					/>
					Male
					<input
						type="radio"
						name="gender"
						value="female"
						checked={gender === "female"}
						onChange={(e) => setGender(e.target.value)}
					/>
					Female
				</div>
				<button onClick={handleClick}>Send Data</button>
			</form>
			{users.map((ele, ind) => {
				return (
					<div key={ind} className="user-details">
						<h3 className="username">{ele.name}</h3>
						<p className="userage">{ele.age}</p>
						<p className="usergender">{ele.gender}</p>
					</div>
				);
			})}
		</>
	);
};

export default UserDetails;
