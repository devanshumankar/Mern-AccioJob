import express from "express";
import cors from "cors";
import users from "./db.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { tokens } from "./db.js";
const app = express();

const PORT = 3000;

app.use(express.json());

app.use(cors());

app.post("/register", async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			throw new Error("email or password required");
		}
		
		//hash the password

		const hashedPassword = await bcrypt.hash(password, 10);
		console.log(hashedPassword);

		users.push({ email, password: hashedPassword });
		res.status(201).send("user saved successfully");
	} catch (err) {
		res.status(500).send(err.message || "Internal server Error");
	}
});
function isValidEmail(email) {
	const at = email.indexOf("@");
	const dot = email.indexOf(".");

	if (at <= 0) return false; 
	if (dot <= at + 1) return false; 
	if (dot >= email.length - 2) return false; 

	return true;
}
function verifyToken(req, res, next) {
	try {
		const authorization = req.headers.authorization;
		if (!authorization) {
			throw new Error("Auth Header Missing");
		}
		console.log(authorization);
		const authToken = authorization.split(" ")[1];
		const token = tokens.find((ele) => ele.token == authToken);
		console.log(token);
		if (!token) {
			throw new Error("Auth token is invalid");
		}

		const user = users.find((ele) => ele.email == token.email);
		req.user = user;
		next();
	} catch (err) {
		res.status(500).json(err.message);
	}
}
app.get("/profile", verifyToken, (req, res) => {
	res.send(req.user);
});
app.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			throw new Error("Email or Password Required");
		}
		const user = users.find((ele) => ele.email == email);
		if (!user) {
			throw new Error(`User with email as ${email} not exists`);
		}
		const isTemp = await bcrypt.compare(
			"123456",
			"$2b$10$tXud/4rcF8i.gtKGjROaUO0BY/Xq8jXLwuFAsk5U9w2JaB57uPF7q",
		);
		console.log(isTemp);
		const isMatched = await bcrypt.compare(password, user.password);
		const token = uuidv4();
		if (!isMatched) {
			throw new Error("Password is Invalid");
		}
		tokens.push({ token, email });
		res.status(200).send({ token });
		//http is stateless since server does not remember the requests so we use tokens
	} catch (err) {
		res.status(500).json({ message: err.message } || "Internal Server Error");
	}
});
console.log(users);
app.listen(PORT, () => {
	console.log("Server is running on", PORT);
});
