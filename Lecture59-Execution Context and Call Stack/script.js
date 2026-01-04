function add(x, y) {
	console.log(arguments);
	// arguments[0]
	// argument will have all arguments in array form and also provide some extra info
	// arguments will exists in normal functions
}
add(2, 3);
// class hoisting
// var a = 5;
// function abc() {
// 	let a = 5;
// 	const c = 10;
// 	function def() {
// 		let a = 10;
// 		return a + 5;
// 	}
// 	const d = def();
// 	return d;
// }
// console.log(a);
// const e = abc();
// console.log(e);
