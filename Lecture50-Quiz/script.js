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
		const optionsUl = document.querySelector("ul");
		const options = this.questions[idx].options;
		optionsUl.innerHTML = options
			.map((ele, index) => {
				return `<li data-option-idx=${index}>${ele}</li>`;
			})
			.join("");
	}
	currentQuestion() {
		const idx = this.currentQuestionIndex;
		const questionTextElement = document.querySelector("p");
		questionTextElement.textContent = this.questions[idx].text;
		this.displayOptions(idx);
	}
	prevQuestion() {
		if (this.currentQuestionIndex == 0) {
			return;
		}
		if (this.currentQuestionIndex == this.questions.length - 1) {
			const nextBtn = document.querySelector(".buttons").lastElementChild;
			nextBtn.textContent = "Next";
		}
		this.currentQuestionIndex--;
		this.currentQuestion();
	}
	nextQuestion() {
		if (this.currentQuestionIndex == this.questions.length - 1) {
			this.submit();
			return;
		}
		if (this.currentQuestionIndex == this.questions.length - 2) {
			const nextBtn = document.querySelector(".buttons").lastElementChild;
			nextBtn.textContent = "Submit";
			return;
		}
		this.currentQuestionIndex++;
		this.currentQuestion();
	}
	calculateScore() {
		const qIndx = this.currentQuestionIndex;
		for (let questionIdx in this.userResponse) {
			const optionIndx = this.userResponse[questionIdx];
			const correctOption = this.questions[qIndx].correctOption;
			if (optionIndx == correctOption) this.score++;
		}
	}
	captureUserResponse(userSelectedOption) {
		const qInd = this.currentQuestionIndex;
		this.userResponse[qInd] = userSelectedOption;
	}
	startTimer() {
		const timerElement = document.querySelector(".timer");
		let remainingTime = this.duration * 60;
		this.timer = setInterval(() => {
			remainingTime--;
		}, 1000);
	}
	submit() {
		console.log(this.calculateScore());
	}
}

const quiz = new Quiz({ questions, duration: 20 });
quiz.start();

const options = document.querySelector(".options");
const prevButton = document.querySelector(".buttons").children[0];
const nextButton = document.querySelector(".buttons").children[1];

options.addEventListener("click", (e) => {
	if (e.target.matches("li")) {
		const optionIdx = Number(e.target.dataset.optionIdx);
		
		quiz.captureUserResponse(optionIdx);
	}
});
prevButton.addEventListener("click", () => {
	quiz.prevQuestion();
});
nextButton.addEventListener("click", () => {
	quiz.nextQuestion();
});
