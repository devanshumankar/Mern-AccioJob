import { useState } from "react";
import axios from "axios";
import "./App.css";
import BookForm from "./components/BookForm";
import { useEffect } from "react";

function App() {
	const SERVER_BASE_URL = "http://localhost:3000/";
	const [books, setBooks] = useState([]);
	const [bookId, setBookId] = useState(0);
	const [email, setEmail] = useState("");

	const [currentBook, setCurrentBook] = useState("");
	const [showEmail, setShowEmail] = useState(false);
	const [singleBook, setSingleBook] = useState([]);
	async function getBooks() {
		const res = await axios.get(`${SERVER_BASE_URL}books`);
		setBooks(res.data);
	}

	async function getSpecificBook() {
		const res = await axios.get(`${SERVER_BASE_URL}book/${bookId}`);
		setSingleBook(res.data);
	}

	async function handleView(id) {
		setCurrentBook(id);
		setShowEmail(!showEmail);
		const book = books.filter((ele) => ele.id == id);

		if (!book[0].hasOwnProperty(email)) {
			const res = await axios.patch(`${SERVER_BASE_URL}book/${id}`, {
				email,
			});
		} else {
			const res = await axios.put(`${SERVER_BASE_URL}book/${id}`, {
				status: "read",
				email,
			});
		}
		setEmail("");
		getBooks();
	}

	async function handleDelete(id) {
		const res = await axios.delete(`${SERVER_BASE_URL}book/${id}`);
		getBooks();
	}
	return (
		<>
			<button onClick={getBooks}>Get All Books</button>
			<div className="container">
				{books.length > 0 &&
					books.map((ele) => {
						return (
							<div key={ele.id} className="book-container">
								<h2>Title : {ele.title}</h2>
								<p>Desc : {ele.description}</p>
								{ele.readers?.length && (
									<p>Users : {ele.readers.join(" ")}</p>
								)}
								<p>Status: {ele.status}</p>
								<p>Author: {ele.author}</p>

								{currentBook == ele.id && (
									<input
										type="email"
										placeholder="enter email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									></input>
								)}
								<button onClick={() => handleView(ele.id)}>View</button>
								<button onClick={() => handleDelete(ele.id)}>
									Delete
								</button>
							</div>
						);
					})}
			</div>
			<input
				type="number"
				value={bookId}
				onChange={(e) => setBookId(e.target.value)}
			></input>
			<button onClick={getSpecificBook}>Get Specific Book</button>
			{singleBook.length == 1 && (
				<div>
					<h2>Title : {singleBook[0].title}</h2>
					<p>Desc : {singleBook[0].description}</p>
					<p>Status: {singleBook[0].status}</p>
					<p>Author: {singleBook[0].author}</p>
				</div>
			)}
			<BookForm books={books}></BookForm>
		</>
	);
}

export default App;
