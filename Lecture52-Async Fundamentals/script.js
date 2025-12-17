class Question {
	constructor() {
		this.operators = ["+", "-", "%", "/", "^", "*"];
		this.operand1 = this.random(100);
		this.operand2 = this.random(100);
		this.score = this.random(50);
		this.operator = this.operators[this.random(this.operators.length) - 1];
		this.correcAnswer = this.calculateCorrectAnswer();
	}
	random(high) {
		return Math.floor(Math.random() * high) + 1;
	}
	display() {
		console.log(this.operand1, this.operator, this.operand2);
	}
	calculateCorrectAnswer() {
		switch (this.operator) {
			case "+":
				return (this.correcAnswer = this.operand1 + this.operand2);
			case "-":
				return (this.correcAnswer = this.operand1 - this.operand2);
			case "/":
				return Math.floor((this.correcAnswer = this.operand1 / this.operand2));
			case "%":
				return (this.correcAnswer = this.operand1 % this.operand2);
			case "^":
				return (this.correcAnswer = this.operand1 ** this.operand2);

			default:
				return (this.correcAnswer = this.operand1 * this.operand2);
		}
	}
	validateAnswer(answer) {
		return this.correcAnswer == Number(answer) ? this.score : 0;
	}
}
class Quiz {
	constructor() {
		this.timer = this.random(60);
		this.question = new Question();
		this.questionCount = 1;
		this.score = 0;
	}
	displayCurrentQuestion() {
		this.question.display();
	}
	random(high) {
		return Math.floor(Math.random() * high) + 1;
	}
	nextQuestion(currentQuestionAnswer) {
		this.score += this.question.validateAnswer(currentQuestionAnswer);
		this.question = new Question();
		this.displayCurrentQuestion();
	}
	getScore() {
		return this.score;
	}
}
