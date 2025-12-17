class Question {
	constructor() {
		this.operators = ["%", "^", "*", "/", "+", "-"];
		this.operand1 = this.randomNumber(100);
		this.operand2 = this.randomNumber(100);
		this.operator = this.operators[this.randomNumber(this.operators.length) - 1];
		this.score = this.randomNumber(50);
		this.correctAnswer = this.calculateAnswer(
			this.operand1,
			this.operator,
			this.operand2
		);
	}

	randomNumber(val) {
		return Math.floor(Math.random() * val) + 1;
	}
	calculateAnswer(x, opt, y) {
		switch (opt) {
			case "+":
				return x + y;
			case "-":
				return x - y;
			case "*":
				return x * y;
			case "/":
				return Math.floor(x / y);
			case "%":
				return x % y;
			default:
				return x ** y;
		}
	}
}

class Quiz {
	constructor() {
		this.quizScore = 0;
		this.domEle();
		this.currQues = this.currentQuestion();
		console.log(this.currQues);
		this.remainingTime = 20;
		this.timer();
		this.isQuizOver = false;
		this.displayQuestion();
		this.ansEle.addEventListener("keydown", (e) => {
			if (this.isQuizOver) return;
			if (e.key == "Enter") {
				this.calculateScore();
				this.currQues = this.nextQuestion();
				this.displayQuestion();
				this.ansEle.value = "";
			}
		});
	}
	displayQuestion() {
		if (this.isQuizOver) return;
		this.inputEle.value =
			this.currQues.operand1 + this.currQues.operator + this.currQues.operand2;
		this.ansEle.focus();
	}
	calculateScore() {
		if (
			this.currQues.calculateAnswer(
				this.currQues.operand1,
				this.currQues.operator,
				this.currQues.operand2
			) == this.ansEle.value
		) {
			this.quizScore += this.currQues.score;
		}
		console.log(this.quizScore);
	}
	domEle() {
		this.inputEle = document.querySelector("[type=text]");
		this.ansEle = document.querySelector("[type=number]");
		this.pEle = document.querySelector("p");
		this.scoreEle = document.querySelector("h2");
	}
	currentQuestion() {
		return new Question();
	}
	nextQuestion() {
		if (this.isQuizOver) return;
		return new Question();
	}
	timer() {
		let ref = setInterval(() => {
			let hour = Math.floor(this.remainingTime / 3600);
			let min = Math.floor((this.remainingTime % 3600) / 60);
			let sec = this.remainingTime % 60;
			this.pEle.textContent =
				String(hour).padStart(2, "0") +
				":" +
				String(min).padStart(2, "0") +
				":" +
				String(sec).padStart(2, "0");
			this.remainingTime--;

			if (this.remainingTime < 0) {
				clearInterval(ref);
				this.submitQuiz();
				this.isQuizOver = true;
				return;
			}
		}, 1000);
	}
	submitQuiz() {
		this.scoreEle.textContent = "Score :" + this.quizScore;
	}
}

const quiz = new Quiz();
