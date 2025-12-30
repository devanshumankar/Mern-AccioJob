// throttling
// There are events in js such as scroll,resize which get trigger very frequectly and
// whatever function call is inside this events they also get called frequently
// which is bad for performance
// we cant restrict the event triggering but we can restrict the call by adding some delay
// which is nothing but throttling

// Throttling using global variable
// let isAllowed = true;
// function throttle() {
// 	if (!isAllowed) return ;
// 	console.log("throttling");
// 	isAllowed = false;
// 	setTimeout(() => {
// 		isAllowed = true;
// 	}, 1000);
// }
// window.addEventListener("scroll", () => {
// 	throttle();
// });

// problem in throttling using global variable
// if we are creating multiple varibale of isAllowed for diffrent events then
// managing the variable will be a difficult task

// solution:closure based throttling
// function throttle() {
// 	let isAllowed = true;
// 	return function () {
// 		if (!isAllowed) return;
// 		console.log("Throttling");
// 		isAllowed = false;
// 		setTimeout(() => {
// 			isAllowed = true;
// 		}, 1000);
// 	};
// }
// const throttling = throttle();
// window.addEventListener("scroll", () => {
// 	throttling();
// });

// debouncing
// It basically waits for the event to not get trigger and after
// a particular delay function will be called inside of events
// If the event triggers again within the delay, the timer is reset.
// const input = document.querySelector("input");
// function debouncing() {
// 	let timer = null;
// 	return function () {
// 		clearTimeout(timer);
// 		timer = setTimeout(() => {
// 			console.log("debouncing");
// 		}, 3000);
// 	};
// }

// const debounce = debouncing();
// window.addEventListener("click", () => {
// 	debounce();
// });

// function callThis() {
// 	console.log(this.name, this.age);
// }
// const obj = { name: "Devanshu", age: 22 };
// callThis.call(obj);
// callThis.apply(obj);

