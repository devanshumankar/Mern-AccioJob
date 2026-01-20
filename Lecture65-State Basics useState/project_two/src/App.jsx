import { useState } from "react";

import "./App.css";
import Card from "./Component/Card";
import UserDetails from "./Component/UserDetails";

function App() {
	const [componet, setComponent] = useState(true);
	return (
		<>
			{/* <button onClick={() => setComponent((prev) => !prev)}>
				{componet ? "Hide" : "Show"}
			</button>
			{componet && <Card></Card>} */}

			<UserDetails></UserDetails>
		</>
	);
}

export default App;
