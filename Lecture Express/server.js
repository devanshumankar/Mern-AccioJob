import express from "express";

const app = express();
const PORT = 3000;

const users = [
	{ id: 1, city: "Pune", name: "Devanshu", batch: "OBP-3" },
	{ id: 2, city: "Pune", name: "Tanmay", batch: "OBP-2" },
	{ id: 3, city: "Mumbai", name: "Parth", batch: "OBP-3" },
];

// client -> It is responsible for Collect user input,Show data received from server,Client never directly talks to the database
// server->Receive requests from client and Send response back to client It acts as a middleware between client and database
// database->where we store the data
app.use(express.json());
app.get("/", (req, res) => {
	res.send(users);
});
const products = [
	{
		id: 168,
		title: "Charger SXT RWD",
		price: 32999.99,
		quantity: 3,
		total: 98999.97,
		discountPercentage: 13.39,
		discountedTotal: 85743.87,
		thumbnail:
			"https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
	},
	{
		id: 78,
		title: "Apple MacBook Pro 14 Inch Space Grey",
		price: 1999.99,
		quantity: 2,
		total: 3999.98,
		discountPercentage: 18.52,
		discountedTotal: 3259.18,
		thumbnail:
			"https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
	},
	{
		id: 183,
		title: "Green Oval Earring",
		price: 24.99,
		quantity: 5,
		total: 124.95,
		discountPercentage: 6.28,
		discountedTotal: 117.1,
		thumbnail:
			"https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png",
	},
	{
		id: 100,
		title: "Apple Airpods",
		price: 129.99,
		quantity: 5,
		total: 649.95,
		discountPercentage: 12.84,
		discountedTotal: 566.5,
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
	},
];

app.get("/even-ids", (req, res) => {
	const evenIdTitle = products
		.filter((ele) => {
			return ele.id % 2 == 0;
		})
		.map((ele) => ele.title);
	res.send(evenIdTitle);
});

app.get("/users/:id", (req, res) => {
	const id = req.params.id;
	const user = users.find((ele) => ele.id == id);
	res.send(user);
});

app.get("/users", (req, res) => {
	const { city, batch } = req.query;
	const puneOBP2 = users.filter((ele) => ele.city == city && ele.batch == batch);
	res.send(puneOBP2);
});

app.post("/", (req, res) => {
	console.log(req.body);
	res.send("success");
});

app.post("/add-gender", (req, res) => {
	const { propertyName, id, propertyValue } = req.body;
	for (let i = 0; i < users.length; i++) {
		if (id.includes(users[i].id)) {
			let ind = id.indexOf(users[i].id);
			users[i][propertyName] = propertyValue[ind];
		}
	}
    console.log(users)
	res.send("success");
});
function requestLogger(req,res,next){
    console.log(req.method,req.url)
    next()
}
app.use(requestLogger)

app.listen(PORT, () => {
	console.log(`Running on Port: ${PORT}`);
});
// restrict acces to only few ips
// cors->cross origin resource sharing this security is defined by browser
// rate limiting blocking any ip if more that 5 
//middlewares ->It acts as a middleware between client and server
// if someone do a request of a url first middleware will rund and we will use next() to react at res.send

