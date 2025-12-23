// promise methods
// const p1 = Promise.resolve("Promise 1 resolve");

// const p2 = Promise.resolve("Promise 2 resolve");

// const p3 = Promise.reject("Promise 3 reject");

// const p4 = Promise.reject("Promise 4 reject");

// const p5 = Promise.resolve("Promise 5 resolve");

// const p6 = Promise.resolve("Promise 6 resolve");

// const p7 = Promise.reject("Promise 7 reject");

// const p8 = new Promise((resolve) => {
// 	setTimeout(() => {
// 		resolve("Promise 8 resolve");
// 	}, 1000);
// });

// const p9 = new Promise((resolve) => {
// 	setTimeout(() => {
// 		resolve("Promise 9 resolve");
// 	}, 2000);
// });

// 1.Promise.all
// takes array of promise and return promise if any of the promise fail then whole promise will fail

// Promise.all([p1, p2])
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => console.log(err));

//2. race
// takes array of promises return promise if any promise will be rejected or resolve(first)

// Promise.race([p9, p8])
// 	.then((res) => console.log(res))
// 	.catch((err) => console.log(err));

// 3.any
// if any of the promise is resolve then it will return that promise
// if none of the promise is resolve then we get aggregate erros of promises (.errors)

// Promise.any([p3, p4])
// 	.then((res) => console.log(res))
// 	.catch((err) => console.log(err.errors));

//4.allSettled
// here catch block is not used
// we get promise that had status of each promise
// if fulfilled then we get value
// if rejected then we get reason

// Promise.allSettled([p1, p2, p3, p4]).then((results) => {
// 	console.log(results);
// });
