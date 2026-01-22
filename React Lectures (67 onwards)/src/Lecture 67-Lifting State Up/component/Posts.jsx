import React, { useEffect, useState } from "react";
import "../css/posts.css";
const Posts = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((res) => setPosts(res));
	}, []);
	return (
		<div className="posts-container">
			{posts.map((post) => (
				<div key={post.id} className="single-post">
					<h4>Title : {post.title}</h4>
					<p>Body :{post.body}</p>
				</div>
			))}
		</div>
	);
};

export default Posts;
