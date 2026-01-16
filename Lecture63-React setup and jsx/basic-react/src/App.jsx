import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import ProductCard from "./components/ProductCard";
import Layout from "./components/Layout";
function App() {
	return (
		<>
			{/* <Profile
				imgSrc="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=826"
				name="John Doe"
				role="SDE-I"
			></Profile> */}

			{/* <ProductCard
				title="iPhone 15"
				price={79999}
				image="https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg"
				description="Apple iPhone 15 with A16 Bionic chip"
			/> */}
			<Layout></Layout>
		</>
	);
}

export default App;
