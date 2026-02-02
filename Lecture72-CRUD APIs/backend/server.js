import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
const PORT = 3000;
// url shortner
let books = [
	{
		id: 1,
		title: "Zero to One",
		description: "A book about building unique startups and creating new value.",
		status: "unread",
		author: "Peter Thiel",
	},
	{
		id: 2,
		title: "Atomic Habits",
		description: "Explains how small habits can lead to remarkable personal growth.",
		status: "unread",
		author: "James Clear",
	},
	{
		id: 3,
		title: "Clean Code",
		description: "A guide to writing readable, maintainable, and scalable code.",
		status: "unread",
		author: "Robert C. Martin",
	},
	{
		id: 4,
		title: "The Alchemist",
		description: "A philosophical story about following your dreams and destiny.",
		status: "unread",
		author: "Paulo Coelho",
	},
	{
		id: 5,
		title: "Rich Dad Poor Dad",
		description: "Teaches financial literacy and mindset around money and assets.",
		status: "unread",
		author: "Robert T. Kiyosaki",
	},
];

app.get("/books", (req, res) => {
	res.status(200).json(books);
});

app.get("/book/:id", (req, res) => {
	const { id } = req.params;
	const book = books.filter((ele) => ele.id == id);
	res.send(book);
});

app.put("/book/:id", (req, res) => {
	const { id } = req.params;
	const { status } = req.body;
	const book = books.find((ele) => ele.id == id);
	console.log(book);
	book.status = status;
	res.send("Updated Successfully");
});
app.post("/books", (req, res) => {
	const { title, description, author } = req.body;

	if (!title || !description || !author) {
		return res.status(400).json({ message: "All fields required" });
	}

	const lastBook = books[books.length - 1];
	const id = lastBook ? lastBook.id + 1 : 1;

	const newBook = {
		id,
		title,
		description,
		author,
		status: "unread",
	};

	books.push(newBook);
	res.status(201).json(newBook);
});

app.delete("/book/:id", (req, res) => {
	const { id } = req.params;
	books = books.filter((ele) => ele.id != id);
	res.send("Deleted Successfully");
});
app.listen(PORT, () => {
	console.log("running on", PORT);
});
