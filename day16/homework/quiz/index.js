const quizDB = [
    {
        question: "What is the smallest country in the world by land area?",
        a: "Monaco",
        b: "San Marino",
        c: "Vatican City",
        d: "Liechtenstein",
        ans: "option3"
    },
    {
        question: "Which is the longest river in the world?",
        a: "Amazon River",
        b: "Nile River",
        c: "Yangtze River",
        d: "Mississippi River",
        ans: "option2"
    },
    {
        question: "Who developed the theory of general relativity?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Niels Bohr",
        d: "Galileo Galilei",
        ans: "option2"
    },
    {
        question: "What is the capital city of Australia?",
        a: "Sydney",
        b: "Melbourne",
        c: "Brisbane",
        d: "Canberra",
        ans: "option4"
    },
    {
        question: "Which element has the highest melting point?",
        a: "Iron",
        b: "Tungsten",
        c: "Carbon",
        d: "Platinum",
        ans: "option2"
    }
];

const question = document.querySelector(".question");
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll(".answer");

const span1 = document.querySelector("#span1");
const span2 = document.querySelector("#span2");
const span3 = document.querySelector("#span3");
const span4 = document.querySelector("#span4");

let questionCount = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;

    option1.nextElementSibling.innerHTML = questionList.a;
    option2.nextElementSibling.innerHTML = questionList.b;
    option3.nextElementSibling.innerHTML = questionList.c;
    option4.nextElementSibling.innerHTML = questionList.d;
}

const getCheckedAnswer = () => {
    let answer;
    answers.forEach((currAnsElem) => {
        if(currAnsElem.checked){
            answer = currAnsElem.id;
        }
    });
    return answer;
}

let score = 0;
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    }
    questionCount++;
    if(questionCount<quizDB.length){
        loadQuestion();
    }
    
});

loadQuestion();
