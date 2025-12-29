async function fetchUsers() {
	try {
		const res = await fetch("https://jsonplaceholder.typicode.com/users");
		if (!res.ok) {
			throw new Error("Error in Fetching user");
		}
		const data = await res.json();
		if (!data) {
			throw new Error("Fail in parsing data");
		}
		return data;
	} catch (err) {
		console.log(err);
	}
}
fetchUsers();

async function fetchPost() {
	try {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		if (!res.ok) {
			throw new Error("Error in Fetching post");
		}
		const data = await res.json();
		if (!data) {
			throw new Error("Fail in parsing data");
		}
		return data;
	} catch (err) {
		console.log(err);
	}
}

async function fetchTodos() {
	try {
		const res = await fetch("https://jsonplaceholder.typicode.com/todos");
		if (!res.ok) {
			throw new Error("Error in Fetching todo");
		}
		const data = await res.json();
		if (!data) {
			throw new Error("Fail in parsing data");
		}
		return data;
	} catch (err) {
		console.log(err);
	}
}

async function syncCall() {
	try {
		const res1 = await fetchUsers();
		const res2 = await fetchTodos();
		const res3 = await fetchPost();
		console.log({ res1, res2, res3 });
	} catch (err) {
		console.log(err);
	}
}
syncCall();

async function parallelCalls() {
	try {
		const data = await Promise.allSettled([fetchUsers(), fetchPost(), fetchTodos()]);
		console.log(data);
	} catch (err) {
		console.log(err);
	}
}
parallelCalls();

// in above example allSettled will run the fetch parallely
//  but in syncCall all are running sync 
// so we will get parallelCalls result before syncCall always
 
