import { sub } from "./calculator.js";
import add from "./calculator.js";
import { printNumber } from "./print.js";
printNumber("sub", sub(2, 3));
printNumber("add", add(2, 3));

// npm (Node Package Manager):
// Used to install, manage, and update packages (dependencies) for a Node.js application

// npx (Node Package Execute):
// Used to execute Node packages directly without installing them globally

// node_modules:
// Folder that contains the installed packages (source code) required by the application

// package.json:
// Configuration file that contains:
// - Project metadata (name, version)
// - Scripts required to run the application
// - Dependencies and devDependencies

axios
	.get("https://jsonplaceholder.typicode.com/todos/1")
	.then((res) => {
		console.log(res);
	})
	.catch((err) => console.log(err));
