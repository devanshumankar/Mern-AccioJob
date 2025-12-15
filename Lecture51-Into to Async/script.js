const spanEle = document.querySelector("span");
const buttonEle = document.querySelector("button");

//non-blocking code:async
buttonEle.addEventListener("click", (e) => {
	e.preventDefault();
	spanEle.textContent = "Welcome to the class";
	// when we have to execute a particular thing after some time then we use
	// setTimeout
	setTimeout(() => {
		spanEle.remove();
	}, 5000);
	// 5s nantar execute honar
});

console.log("Hello");
// alert("Devanshu"); //blocking code:sync
console.log("world");
let timer = null;
const buttonStop = document.querySelector("button:last-of-type");
const buttonStart = document.querySelector("button:nth-of-type(2)");
const h1Element = document.querySelector("h1");
let count = 0;
buttonStart.addEventListener("click", () => {
	timer = setInterval(() => {
		count++;
		h1Element.textContent = count;
	}, 1000);
});

buttonStop.addEventListener("click", () => {
	count = 0;
	clearInterval(timer);
});

// mdn docs
