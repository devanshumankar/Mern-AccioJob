let intervalId = null;
const questionData = [
	{
		statement: "What is the capital of India",
		marks: 10,
		time: 15,
		options: ["New Delhi", "Kolkata", "Mumbai", "Pune"],
		correctOption: 0,
	},
	{
		statement: "What is the capital of US",
		marks: 20,
		time: 35,
		options: ["Kolkata", "Washington", "Mumbai", "Pune"],
		correctOption: 1,
	},
];
const qBox = document.getElementById("q-box");
const aBox = document.querySelector("#a-box");
const timer = document.querySelector("#timer");
const nextBtn = document.querySelector("#next");
class Question {
	constructor(statement, marks, time) {
		this.statement = statement;
		this.marks = marks;
		this.time = time;
	}
	validate() {}
	display() {}
	startTimer() {
		if (intervalId) {
			clearInterval(intervalId);
		}

		let timeLeft = this.time;

		intervalId = setInterval(() => {
			timeLeft--;

			const min = Math.floor(timeLeft / 60);
			const sec = timeLeft % 60;

			let timerText =
				String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
			timer.textContent = timerText;

			if (timeLeft <= 0) {
				clearInterval(intervalId);
				nextBtn.click();
			}
		}, 1000);
	}
}
class MCQ extends Question {
	constructor(statement, marks, time, options, correctOption) {
		super(statement, marks, time);
		this.options = options;
		this.correctOption = correctOption;
		this.userAnswer = null;
	}
	validate() {
		return this.userAnswer == this.correctOption;
	}
	display() {
		this.startTimer();
		qBox.textContent = this.statement;
		aBox.innerHTML = "";
		this.options.forEach((opt, ind) => {
			const button = document.createElement("button");
			button.textContent = opt;

			button.addEventListener("click", () => {
				this.userAnswer = ind;
			});
			aBox.appendChild(button);
		});
	}
}
class Quiz {
	constructor(questions) {
		this.questions = questions;
		this.currentQuestionIndex = 0;
		this.score = 0;
		this.totalScore = 0;
	}
	start() {
		this.questions[this.currentQuestionIndex].display();
	}
	nextQuestion() {
		const currentQuestion = this.questions[this.currentQuestionIndex];
		if (currentQuestion.validate()) {
			this.score += currentQuestion.marks;
		}
		this.currentQuestionIndex++;
		this.questions[this.currentQuestionIndex].display();
		if (this.questions.length - 1 == this.currentQuestionIndex)
			nextBtn.textContent = "Submit";
	}

	isFinished() {
		const currentQuestion = this.questions[this.currentQuestionIndex];
		if (this.questions.length - 1 == this.currentQuestionIndex) {
			if (currentQuestion.validate()) {
				this.score += currentQuestion.marks;
			}
			return true;
		}
		return false;
	}
}

const questions = questionData.map((q) => {
	const mcqQuestion = new MCQ(q.statement, q.marks, q.time, q.options, q.correctOption);
	return mcqQuestion;
});

const quiz = new Quiz(questions);
quiz.start();
nextBtn.addEventListener("click", () => {
	if (quiz.isFinished()) {
		alert(`Quiz is Finished, ${quiz.score}`);
		return;
	}
	quiz.nextQuestion();
});
