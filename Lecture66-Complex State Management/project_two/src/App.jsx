import { useState } from "react";
import "./App.css";
import Question from "./component/Question";

function App() {
	const jsQuestions = [
		{
			ques: "Which of the following is NOT a JavaScript primitive data type?",
			options: ["Number", "String", "Object", "Boolean"],
			correctAnswer: 2,
		},
		{
			ques: "What will `typeof null` return in JavaScript?",
			options: ["null", "object", "undefined", "number"],
			correctAnswer: 1,
		},
		{
			ques: "Which method is used to convert a JSON string into a JavaScript object?",
			options: [
				"JSON.parse()",
				"JSON.stringify()",
				"JSON.convert()",
				"JSON.object()",
			],
			correctAnswer: 0,
		},
		{
			ques: "Which keyword is used to declare a block-scoped variable in JavaScript?",
			options: ["var", "let", "const", "both let and const"],
			correctAnswer: 3,
		},
		{
			ques: "What will be the output of `Boolean([])` in JavaScript?",
			options: ["false", "true", "undefined", "error"],
			correctAnswer: 1,
		},
	];
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [answers, setAnswers] = useState({});
	const [score, setScore] = useState(0);

	const handleOptionSelect = (optionIndex) => {
		setAnswers((prev) => ({
			...prev,
			[currentQuestion]: optionIndex,
		}));
	};

	const handlePrev = () => {
		setCurrentQuestion((prev) => prev - 1);
	};
	const handleNext = () => {
		if (currentQuestion === jsQuestions.length - 1) {
			calculateScore();
		} else {
			setCurrentQuestion((prev) => prev + 1);
		}
	};

	const calculateScore = () => {
		let total = 0;

		jsQuestions.forEach((q, index) => {
			if (answers[index] === q.correctAnswer) {
				total++;
			}
		});

		setScore(total);
		setShowResult(true);
	};

	if (showResult) {
		return (
			<div className="question-container">
				<h2>Quiz Completed 🎉</h2>
				<h3>
					Your Score: {score} / {jsQuestions.length}
				</h3>
			</div>
		);
	}

	return (
		<div className="question-container">
			<Question
				question={jsQuestions[currentQuestion]}
				onSelect={handleOptionSelect}
				selectedOption={answers[currentQuestion]}
			/>

			<div className="prev-next-btn">
				<button
					disabled={currentQuestion == 0}
					onClick={handlePrev}
					className="prev-btn"
				>
					Prev
				</button>
				<button onClick={handleNext}>
					{currentQuestion == jsQuestions.length - 1 ? "Submit" : "Next"}
				</button>
			</div>
		</div>
	);
}

export default App;
