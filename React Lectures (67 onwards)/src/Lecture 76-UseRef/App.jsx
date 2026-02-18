import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";

const App = () => {
	const [count, setCount] = useState(0);
	const countRef = useRef(undefined);
	const inputRef = useRef();
	const timer = useRef();
	const sectionRef = useRef();
	function startTimer() {
		timer.current = setInterval(() => {
			setCount((count) => ++count);
		}, 1000);
	}
	function stopTimer() {
		clearInterval(timer.current);
	}
	useEffect(() => {
		countRef.current = count;
		//when state is change then that page will rerender again
		// initially ui will be created of that page and then useEffect will run
		// since useEffect has not run yet so ui shows previous value and then useEffect will run
		// and have the same value
	}, [count]);
	useEffect(() => {
		// inputRef.current.focus();
	}, []);
	function handleScroll() {
		sectionRef.current.scrollIntoView({ behavior: "smooth" });
	}
	return (
		<div>
			{/* <h1>State Count:{count}</h1>
			<button onClick={() => setCount(count + 1)}>Click</button>
			<h1>Ref Count:{countRef.current}</h1>
			<button onClick={() => countRef.current++}>Click</button> */}

			{/* <h1>Prev:{countRef.current}</h1>
			<h2>Current:{count}</h2>
			<button
				onClick={() => {
					// countRef.current = count;
					setCount((prev) => prev + 1);
					inputRef.current.focus();
				}}
			>
				Click
			</button>
			<Input ref={inputRef}></Input> */}
			{/* <h1>{count}</h1>
			<button onClick={startTimer}>Start</button>
			<button onClick={stopTimer}>Stop</button> */}
			{/* <input type="text" ref={inputRef}></input> */}
			<h1>Welcome to Obp-3</h1>
			<button onClick={handleScroll}>Scroll to last Section</button>
			<div style={{ height: "100vh" }}></div>
			<section ref={sectionRef}>Last Section</section>
		</div>
	);
};

export default App;
