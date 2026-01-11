const http = require("node:http");
const quotes = [
	"Focus on progress, not perfection",

	"Discipline beats motivation",

	"One session at a time",

	"Small steps every day lead to big results",

	"Your future self will thank you",

	"Do it now. Sometimes ‘later’ becomes never",

	"Stay focused. Stay consistent",

	"This session matters",
];
const server = http.createServer((req, res) => {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	res.writeHead(200, {
		"Content-Type": "text/plain",
		"Access-Control-Allow-Origin": "*", 
	});
	res.end(quotes[randomIndex]);
});
server.listen(3000, () => {
	console.log("running on 3000");
});

