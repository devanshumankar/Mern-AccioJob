class Question {
	constructor({ id, text, options, correctOption, type }) {
		this.id = id;
		this.text = text;
		this.options = options;
		this.correctOption = correctOption;
		this.type = type;
	}
}

const questions = [
	new Question({
		id: 1,
		text: "What is the capital of France?",
		options: ["Berlin", "Madrid", "Paris", "Rome"],
		correctOption: 2,
		type: "mcq",
	}),

	new Question({
		id: 2,
		text: "Which data type is NOT primitive in JavaScript?",
		options: ["String", "Number", "Object", "Boolean"],
		correctOption: 2,
		type: "mcq",
	}),

	new Question({
		id: 3,
		text: "What keyword is used to declare a constant in JavaScript?",
		options: ["var", "let", "const", "constant"],
		correctOption: 2,
		type: "mcq",
	}),

	new Question({
		id: 4,
		text: "Which company developed JavaScript?",
		options: ["Google", "Netscape", "Microsoft", "Oracle"],
		correctOption: 1,
		type: "mcq",
	}),

	new Question({
		id: 5,
		text: "What does JSON stand for?",
		options: [
			"JavaScript Object Notation",
			"Java Source Open Network",
			"JavaScript Online Notifier",
			"Java Standard Object Naming",
		],
		correctOption: 0,
		type: "mcq",
	}),
];

class Quiz {
	constructor({ questions, duration }) {
		this.questions = questions;
		this.duration = duration;
		this.duration = duration;
		this.userResponse = {};
		this.score = 0;
		this.currentQuestionIndex = 0;
	}
	start() {
		this.startTimer();
		this.currentQuestion();
	}
	displayOptions(idx) {
		let options = this.questions[idx].options;
		let ulElement = document.querySelector("ul");
		let ulContent = options
			.map((ele, index) => {
				return `<li data-option-idx=${index}>${ele}</li>`;
			})
			.join("");
		ulElement.innerHTML = ulContent;
	}
	currentQuestion() {
		const indx = this.currentQuestionIndex;
		const queText = document.querySelector("p");
		queText.textContent = this.questions[indx].text;
		this.displayOptions(indx);
	}
	prevQuestion() {
		if (this.currentQuestionIndex == 0) {
			return;
		}
		const nextBtn = document.querySelectorAll("button")[1];
		this.currentQuestionIndex--;
		this.currentQuestion();
		if (nextBtn.textContent === "Submit") {
			nextBtn.textContent = "Next";
		}
	}
	nextQuestion() {
		const nextBtn = document.querySelectorAll("button")[1];
		if (this.currentQuestionIndex == this.questions.length - 2) {
			this.currentQuestionIndex++;
			this.currentQuestion();
			nextBtn.textContent = "Submit";
			return;
		}
		if (this.currentQuestionIndex === this.questions.length - 1) {
			return;
		}
		this.currentQuestionIndex++;
		this.currentQuestion();
	}
	calculateScore() {
		this.score = 0;
		for (let questionIdx in this.userResponse) {
			const optionIndx = this.userResponse[questionIdx];
			const correctOption = this.questions[questionIdx].correctOption;
			if (optionIndx == correctOption) this.score++;
		}
		return this.score;
	}
	captureUserResponse(index) {
		const questionIdx = this.currentQuestionIndex;
		this.userResponse[questionIdx] = index;
	}
	startTimer() {
		const timerElement = document.querySelector(".timer");
		let remainingTime = this.duration * 60;

		this.timer = setInterval(() => {
			remainingTime--;
			const hr = String(Math.floor(remainingTime / 3600)).padStart(2, "0");
			const min = String(Math.floor((remainingTime / 60) % 60)).padStart(2, "0");
			const sec = String(Math.floor(remainingTime % 60)).padStart(2, "0");
			timerElement.textContent = `${hr}:${min}:${sec}`;

			if (remainingTime <= 0) {
				const main = document.querySelector("main");
				clearInterval(this.timer);
				const p = document.createElement("p");
				p.textContent = `Your score is ${this.submit()} / ${
					this.questions.length
				}`;
				main.replaceChildren(p);
				p.style.color = "white";
			}
		}, 1000);
	}
	submit() {
		return this.calculateScore();
	}
}

const options = document.querySelector(".options");
const prevButton = document.querySelector(".buttons").children[0];
const nextButton = document.querySelector(".buttons").children[1];

const quiz = new Quiz({ questions, duration: 0.1 });
quiz.start();

nextButton.addEventListener("click", () => {
	const main = document.querySelector("main");
	if (nextButton.textContent == "Submit") {
		clearInterval(quiz.timer);
		const p = document.createElement("p");
		p.textContent = `Your score is ${quiz.submit()} / ${quiz.questions.length}`;
		main.replaceChildren(p);
		p.style.color = "white";
		return;
	}
	quiz.nextQuestion();
});
prevButton.addEventListener("click", () => {
	quiz.prevQuestion();
});
options.addEventListener("click", (e) => {
	const ul = document.querySelector("ul");
	for (let ele of ul.children) {
		ele.classList.remove("highlight");
	}
	if (e.target.matches("li")) {
		const optIdx = Number(e.target.dataset.optionIdx);
		e.target.classList.add("highlight");
		quiz.captureUserResponse(optIdx);
	}
});
