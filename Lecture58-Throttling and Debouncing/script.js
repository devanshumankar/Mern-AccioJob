// throttling
// events such as scroll ,resize triggers  very frequently if we perform any actions
// there might be actions we will be performing inside those events they will be also getting called very frequently
// to stop the frequent calls of the action inside event we can add some delay to function call in the event
// which is nothing but throttling

// note:limiting function calls not event triggers
// window.addEventListener("scroll", () => {
// 	console.log("scrolled");
// });
function handleScroll() {
	console.log("Throtting event");
}
// throttling using global variable
// let isAllowed = true;
// function throttle(delay) {
// 	if (!isAllowed) return;
// 	handleScroll();
// 	isAllowed = false;
// 	setTimeout(() => {
// 		isAllowed = true;
// 	}, delay);
// }

// closure based throttling
// why to used closed
// if we had other throttle function then again we will need isAllowed
// it may be difficult to handle multiple variable
function throttle(fn, delay) {
	let isAllowed = true;
	return function () {
		if (!isAllowed) return;
		fn();
		isAllowed = false;
		setTimeout(() => {
			isAllowed = true;
		}, delay);
	};
}
const scrollThrottle = throttle(handleScroll, 1000);

window.addEventListener("scroll", scrollThrottle);

// debouncing
// debouncing wait for the event to not get trigger and once the condition that we put get successfull then particluar
// action can be performed
// ex:search bar
// if user is typing we dont want to call the api on each input
// we want when user completes typing then it will wait for a particular delay and once it completethen api can be called

// timeline
// delay 3s
// t=0->t=2->t=4->t=8-> at t=7 and t=11 the fuction will be called
// t==0 means at o user do task

// function debouncing(fn, delay) {
// 	let timerId = null;
// 	return function () {
// 		clearTimeout(timerId);
// 		timerId = setTimeout(() => {
// 			fn();
// 		}, delay);
// 	};
// }
// function saveInput() {
// 	console.log("Save");
// }
// const debounceSaveInput = debouncing(saveInput, 3000);
// const input = document.querySelector("input");
// input.addEventListener("input", () => {
// 	debounceSaveInput();
// });
//hw: auto save input

function debouncing(fn, delay) {
	let timerId = null;
	return function (...args) {
		clearTimeout(timerId);
		timerId = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
}
function saveInput(value) {
	console.log(value);
}
const debounceSaveInput = debouncing(saveInput, 3000);
const input = document.querySelector("input");
input.addEventListener("input", () => {
	debounceSaveInput(input.value);
});
