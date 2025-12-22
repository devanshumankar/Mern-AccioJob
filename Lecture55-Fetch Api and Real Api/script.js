// there are methods in http
// 1.get:used when we need data from api
// 2.post:when we want to send data to api or server
// 3.put:it is used when we want to update any data
// 4.delete:It is used to delete data from server

// http is used to establish connection betwwen multiple computer

// parts of http request
// 1.url:location of server
// 2.headers:-extra info that we can have but not to send in body
// 3.body:data to be exchange
// 4.status:200->success 400->missing items 500-internal server error

const imgEle = document.querySelector("img");
fetch("https://dog.ceo/api/breeds/image/random")
	.then((res) => {
		console.log(res);
		// res.json(); cant access the body twice so it will throw error
		// .json()->async function
		return res.json();
	})
	.then((res) => {
		if (res.status === "error") {
			throw new Error(res.message);
		}
		imgEle.src = res.message;
	})
	.catch((err) => {
		console.error(err);
	});
const dummyData = {
	title: "Hello Devanshu",
	userId: 3,
};
fetch("https://dummyjson.com/posts/add", {
	method: "POST",
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify(dummyData),
})
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});
const ulEle = document.querySelector("ul");
function fetchProducts(id) {
	fetch(`https://dummyjson.com/products/${id}`)
		.then((res) => res.json())
		.then((res) => {
			if (!res.title) {
				throw new Error(res.message);
			}
			const liElement = document.createElement("li");
			liElement.textContent = res.title;
			ulEle.appendChild(liElement);
		})
		.catch((err) => console.log(err));
}

fetchProducts(4);
fetchProducts(5);
fetchProducts(6);
