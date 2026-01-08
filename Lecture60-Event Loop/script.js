// let array=[]
// for(let ele of document.querySelector("[role=group]").children){
//     array.push(ele.textContent)
//     }
// console.log(array)

// promise callback are immedietly executed
// console.log("start");
// const obj = new Promise((resolve) => {
// 	console.log("Inside Promise");
// 	setTimeout(() => {
// 		resolve("We are done");
// 	}, 0);
// });
// obj.then((res) => {
// 	console.log(res);
// });
// console.log("end");
// start
// inside promise
// end
// we are done

console.log("1️⃣ Script start");

setTimeout(() => {
	console.log("7️⃣ setTimeout");
}, 0);

async function asyncFunc() {
	console.log("2️⃣ Async function start");
	await Promise.resolve();
	console.log("5️⃣ Async function end (after await)");
}

asyncFunc();

Promise.resolve().then(() => {
	console.log("4️⃣ Promise.then");
});
  
console.log("3️⃣ Script end");
