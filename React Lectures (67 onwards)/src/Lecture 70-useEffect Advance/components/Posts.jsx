import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function showPosts() {
			try {
				setLoading(true);
				const fetchPosts = await axios.get("https://dummyjson.com/posts");
				setPosts(fetchPosts.data.posts);
				setLoading(false);
			} catch (err) {
				console.log("error occured while loading posts", err);
			}
		}
		showPosts();
	}, []);
	if (loading) return <span>Loading data..</span>;
	return (
		<>
			<button>Load Data</button>
			{posts.length > 0 &&
				posts.map((ele, ind) => {
					return (
						<div key={ind}>
							<h2>{ele.title}</h2>
							<p>{ele.body}</p>
						</div>
					);
				})}
		</>
	);
};

export default Posts;
