console.log("Hello");
console.log("World");
// this will execute line by line

// setTimeout
console.log("Start");

setTimeout(() => {
	console.log("Hello after 2 seconds");
}, 2000);
// this will run after 2 sec

console.log("End");
// setInterval
let count = 0;
let ref = setInterval(() => {
	console.log(count);
	count++;
	if (count == 10) {
		clearInterval(ref);
	}
});
