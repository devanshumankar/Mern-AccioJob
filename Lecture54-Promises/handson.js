// promise -> it is an object that represent eventual completion/failure of async function

// the function that is written inside Promise is called immediately
// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		let num = 10;
// 		if (num > 5) {
// 			resolve("num" + num);
// 		} else reject("Less than 5");
// 	}, 1000);
// });

// console.log(promise);

// promise has 3 states

// 1.fulfilled (resolve)

// 2.rejectected (reject)

// 3.pending

// promise
// 	.then((data) => {
//         // returns new Promise
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	})
// 	.finally(() => {
// 		console.log("This will be run all time");
// 	});

// let userDetails = [
// 	{
// 		id: 0,
// 		balance: 100,
// 	},
// 	{
// 		id: 1,
// 		balance: 200,
// 	},
// 	{
// 		id: 3,
// 		balance: 50,
// 	},
// ];
// function login(id, callback) {
// 	if (id >= userDetails.length) {
// 		callback("Invaild Id");
// 	} else {
// 		callback(null, userDetails[id]);
// 	}
// }
// function checkBalance(data, callback) {
// 	if (data.balance < 100) {
// 		callback("Insufficient Balance");
// 	} else {
// 		callback(null, data);
// 	}
// }
// function makePayment(data) {
// 	console.log(data.balance);
// }

// login(3, (err, data) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
// 	checkBalance(data, (err, data) => {
// 		if (err) {
// 			console.log(err);
// 			return;
// 		}
// 		makePayment(data);
// 	});
// });

const products = [
	{ id: 0, price: 100, stock: 5 },
	{ id: 1, price: 200, stock: 0 },
];

// select the prod
// check stock
// then place

// function fetchProduct(id, callback) {
// 	if (id >= products.length) {
// 		callback("Not Found");
// 	} else {
// 		callback(null, products[id]);
// 	}
// }
// function checkStock(prod, callback) {
// 	if (prod.stock <= 0) {
// 		callback("Insufficient Stock");
// 	} else {
//         callback(null,prod)
// 	}
// }
// function makePayment() {
// 	console.log("Payment Done");
// }

// fetchProduct(0, (err, data) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
// 	checkStock(data, (err, data) => {
// 		if (err) {
// 			console.log(err);
// 			return;
// 		}
// 		makePayment();
// 	});
// });

let userDetails = [
	{
		id: 0,
		balance: 100,
	},
	{
		id: 1,
		balance: 200,
	},
	{
		id: 3,
		balance: 50,
	},
];

function fetchUser(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (id >= userDetails.length) reject("User Not Found");
			else {
				resolve(userDetails[id]);
			}
		}, 1000);
	});
}
function fetchBalance(user) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (user.balance > 100) resolve(user);
			else reject("Insufficient Balance");
		}, 1000);
	});
}

function makePayment(user) {
	user.balance = user.balance - 100;
	console.log(user);
	console.log("Payment Done");
}

fetchUser(7)
	.then(fetchBalance)
	.then(makePayment)
	.catch((err) => {
		console.log(err);
	});

// promise.all
// Promise.all returns an array of resolved values if all succeed, else returns the first error.

// it always take promises as a paramter not function

// let promise1 = new Promise((resolve, reject) => {
// 	resolve("Promise 1");
// });

// let promise2 = new Promise((resolve, reject) => {
// 	resolve("Promise 2");
// });

// let promise3 = new Promise((resolve, reject) => {
// 	resolve("Promise 3");
// });

// Promise.all([promise1, promise2, promise3]).then((message) => {
// 	console.log(message);
// }).catch((err)=>{
// 	console.log(err)
// });

// promise.race
// return a promise
let promise1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        
	resolve("Promise 1");
    },2000)
});

let promise2 = new Promise((resolve, reject) => {
setTimeout(()=>{
        
	resolve("Promise 2");
    },1000)
});

let promise3 = new Promise((resolve, reject) => {
	setTimeout(()=>{
        
	resolve("Promise 3");
    },500)
});

Promise.race([promise1,promise2,promise3]).then((mess)=>{
    console.log(mess)
}).catch((err)=>{
    console.log(err)
})



// promise.any->return a promise which ever resolve first
