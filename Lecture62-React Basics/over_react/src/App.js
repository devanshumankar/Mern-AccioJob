import "./App.css";
import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);
	function increment() {
		setCount(count + 1);
	}
	function decrement() {
		setCount(count - 1);
	}
	return (
		<div>
			<button>{count}</button>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
}
function App() {
	return Counter();
}

export default App;
