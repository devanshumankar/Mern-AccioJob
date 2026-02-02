import axios from "axios";
import React from "react";
import { useState } from "react";

const BookForm = ({ books }) => {
	const SERVER_BASE_URL = "http://localhost:3000";
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [author, setAuthor] = useState("");
	function handleSubmit(e) {
		e.preventDefault();
		if (!title || !description || !author) {
			alert("all Fields Required");
			return;
		}
		const lastBook = books[books.length - 1];
		let id;
		if (!lastBook) {
			id = 1;
		} else {
			id = Number(lastBook.id);
			id += 1;
		}
		const book = {
			title,
			description,
			author,
		};
		async function sendData() {
			const res = await axios.post(SERVER_BASE_URL + "/books", book);
			console.log(res);
		}
		sendData();
		setTitle("");
		setDescription("");
		setAuthor("");
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="enter book title"
			></input>
			<input
				type="text"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				placeholder="enter book Desc"
			></input>
			<input
				type="text"
				value={author}
				onChange={(e) => setAuthor(e.target.value)}
				placeholder="enter book Author"
			></input>
			<button type="submit">Submit</button>
		</form>
	);
};

export default BookForm;
