// call back are function which are passed as a argument in another function and are not call instantly called
// and is used to know whether a function or a task is completed it working or not

// const request = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		const num = Math.random();
// 		if (num < 0.5) resolve("Number is less than 0.5");
// 		else reject("NUmber is greater that or equal to 0.5");
// 	}, 1000);
// });

// console.log(request);
// promise callback will execute immedietly
// state of promises
// 1.pending
// 2.resolve/fulfilled
// 3.rejected
// request
// 	.then((resolveMessage) => {
// 		console.log({ resolveMessage });
// 	})
// 	.catch((rejectMessage) => {
// 		console.log({ rejectMessage });
// 	})
// 	.finally(() => {
// 		console.log("Request Completed");
// 	});

// promises are the constructor
const users = [
	{ id: 1, name: "Devanshu" },
	{ id: 2, name: "Raj" },
	{ id: 3, name: "Parth" },
	{ id: 4, name: "Soyam" },
	{ id: 5, name: "Dev" },
];

// const request = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		const ind = Math.floor(Math.random() * 10);
// 		if (ind < users.length) resolve(users[ind]);
// 		else reject("Not Found");
// 	}, 1000);
// });
// request
// 	.then((data) => {
// 		console.log({ data });
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	})
// 	.finally(() => {
// 		console.log("code completed");
// 	});

// promise.all
// promise.race

const instagramUser = [
	{
		userId: 0,
		posts: [
			{
				caption: "I'm done",
				imageUrl: "#",
				comments: ["chota don", "ghanta ka don", "wow!"],
			},
		],
	},
	{
		userId: 1,
		posts: [
			{
				caption: "Going to Pune",
				imageUrl: "#",
				comments: ["donkey", "nice photo", "dont post"],
			},
		],
	},
];

// function fetchUser(userId, callback) {
// 	setTimeout(() => {
// 		if (userId >= instagramUser.length) callback("Invalid User id");
// 		else callback(null, instagramUser[userId]);
// 	}, 1000);
// }
// function fetchPost(user, callback) {
// 	setTimeout(() => {
// 		if (user?.posts?.length) callback(null, user.posts[0]);
// 		else callback("No Post Yet");
// 	}, 1000);
// }
// function fetchComment(post, callback) {
// 	setTimeout(() => {
// 		if (post?.comments?.length) callback(null, post.comments);
// 		else callback("No comments Yet");
// 	}, 1000);
// }

// function randomNumber(high) {
// 	return Math.floor(Math.random() * high);
// }
// fetchUser(randomNumber(instagramUser.length), (error, data) => {
// 	if (error) {
// 		console.log(error);
// 		return;
// 	}

// 	fetchPost(data, (error, data) => {
// 		if (error) {
// 			console.log(error);
// 			return;
// 		}

// 		fetchComment(data, (error, data) => {
// 			if (error) {
// 				console.log(error);
// 				return;
// 			}
// 			console.log(data);
// 		});
// 	});
// });

// function randomNumber(high) {
// 	return Math.floor(Math.random() * high);
// }

// function fetchUser(userId) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (userId < instagramUser.length) resolve(instagramUser[userId]);
// 			else reject("User not Found");
// 		}, 1000);
// 	});
// }

// function fetchPost(user) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (user?.posts?.length) resolve(user.posts[0]);
// 			else reject("User not have posts");
// 		}, 1000);
// 	});
// }

// function fetchComment(post) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (post?.comments?.length) resolve(post.comments);
// 			else reject("User not have any comments");
// 		}, 1000);
// 	});
// }

// const randomId = randomNumber(instagramUser.length * 2);
// fetchUser(randomId)
// 	.then(fetchPost)
// 	.then(fetchComment)
// 	.then((comments) => {
// 		console.log(comments);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

let products = [
	{
		id: 0,
		name: "Lenovo",
		quantity: 10,
	},
	{
		id: 1,
		name: "Bottle",
		quantity: 0,
	},
	{
		id: 2,
		name: "Mobile",
		quantity: 20,
	},
];
let cart = [];
function fetchProduct(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (id < products.length) {
				resolve(products[id]);
			} else {
				reject("Product Not Exists");
			}
		});
	});
}

function fetchProductQuantity(product) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (product.quantity > 0) resolve(product);
			else reject("Quantity must be greater than 0");
		});
	});
}

function cartHasProduct(product) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!cart.includes(product)) resolve(product);
			else reject("Cart has already");
		});
	});
}

fetchProduct(Math.floor(Math.random() * products.length * 2))
	.then(fetchProductQuantity)
	.then(cartHasProduct)
	.then((data) => {
		cart.push(data);
		console.log(cart);
	})
	.catch((err) => {
		console.log(err);
	});
