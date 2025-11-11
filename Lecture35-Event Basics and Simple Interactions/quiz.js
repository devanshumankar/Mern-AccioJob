const questions = [
    {
        title: "1. What does HTML stand for?",
        options: [
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language",
            "HyperText Markup Language",
            "HyperText Markdown Language"
        ],
        correctOption: 3
    },
    {
        title: "2. Which CSS property is used to change text color?",
        options: [
            "font-color",
            "color",
            "text-color",
            "font-style"
        ],
        correctOption: 2
    },
    {
        title: "3. In JavaScript, which keyword declares a constant?",
        options: [
            "let",
            "const",
            "var",
            "static"
        ],
        correctOption: 2
    },
    {
        title: "4. Which company developed the React library?",
        options: [
            "Google",
            "Twitter",
            "Meta (Facebook)",
            "Microsoft"
        ],
        correctOption: 3
    },
    {
        title: "5. What is Firebase primarily used for?",
        options: [
            "Frontend styling",
            "Authentication, database, and hosting",
            "Only file storage",
            "SEO optimization"
        ],
        correctOption: 2
    }
];

let currQuesInd = 0;
let score = 0;
const correctAnswer = 4;
const wrongAnswer = -1;
const option1 = document.querySelector(".option-1")
const option2 = document.querySelector(".option-2")
const option3 = document.querySelector(".option-3")
const option4 = document.querySelector(".option-4")

const nextBtn = document.querySelector(".next")

const question = document.querySelector(".ques")

const sectionElement = document.querySelector("section");

const headingElement=document.querySelector("h1");
function changeQuestion() {
    currQuesInd++;
    if (currQuesInd < questions.length) {
        question.textContent = questions[currQuesInd].title;

        option1.textContent = questions[currQuesInd].options[0]
        option2.textContent = questions[currQuesInd].options[1]
        option3.textContent = questions[currQuesInd].options[2]
        option4.textContent = questions[currQuesInd].options[3]
    }
    else {
        headingElement.style.display="none";
        
        sectionElement.innerHTML = `<h1>Your Score : ${score} <h1>`
    }
}

function changeScore(opt) {
    if (opt == questions[currQuesInd].correctOption) {
        score += correctAnswer
    } else {
        score += wrongAnswer
    }
}

option1.addEventListener("click", () => {
    changeScore(1)
    changeQuestion()
})
option2.addEventListener("click", () => {
    changeScore(2)
    changeQuestion()
})
option3.addEventListener("click", () => {
    changeScore(3)
    changeQuestion()
})
option4.addEventListener("click", () => {
    changeScore(4)
    changeQuestion()
})

nextBtn.addEventListener("click", () => {
    changeQuestion();
})



