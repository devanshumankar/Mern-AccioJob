import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Lecture 75-Context Api Advance/App";
import AuthProvider from "./Lecture 75-Context Api Advance/context/AuthProvider";

createRoot(document.getElementById("root")).render(
	
		<StrictMode>
			<App />
		</StrictMode>
	,
);
