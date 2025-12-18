// console.log("Hello World");
// setTimeout(() => {
// 	console.log("Inside");
// },0);
// console.log("Bye");

// first synchronous code will be executed and then async

// function orderDetails() {
// 	let orderId = 1234;
// 	console.log("Order Ready");
// 	setTimeout(() => {
// 		let address = "XYZ";
// 		console.log("Address");
// 		setTimeout(() => {
// 			console.log("Payment");
// 		}, 1000);
// 	}, 1000);
// }
// orderDetails();
// It will execute one by one
// but it will be difficult to understand if we have large code

// so we use concept of named functions

let stop = false;
function stoping() {
	return stop == true;
}
function orderDetails() {
	if (stoping()) return;
	console.log("Order Ready");
	setTimeout(Address, 1000);
}
function Address() {
	if (stoping()) return;
	console.log("Address");
	setTimeout(Payment, 1000);
	stop = true;
}
function Payment() {
	if (stoping()) return;
	console.log("All done");
}
orderDetails();

// setInterval using setTimeout
let count = 0;
function setTimeoutUsingSetInterval() {
	console.log(count);
	count++;

	let id = setTimeout(setTimeoutUsingSetInterval, 1000);
	if (count == 2) {
		clearTimeout(id);
	}
}

setTimeoutUsingSetInterval()