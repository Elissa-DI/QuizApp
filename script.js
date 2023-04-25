const startBtn = document.querySelector('.start-btn');
const nextBtn = document.querySelector('.next-btn');
const questionContainer = document.querySelector('#question-container')
const questionEl = document.querySelector('#question');
const answerBtnEl = document.querySelector('#answer-buttons');

let shuffledQuestions, currentQuestionIndex

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
});

function startGame() {
    startBtn.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide');
    setNextQuestion()
}
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtnEl.appendChild(button);
    })
}

function resetState() {
    nextBtn.classList.add('hide')
    while(answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild)
    }
}

function selectAnswer(e) {
    const selectBtn = e.target
    const correct = selectBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtnEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

const questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false }
        ]
    },
    {
        question: 'What is 2 * 16',
        answers: [
            { text: '4', correct: false},
            { text: '24', correct: false },
            { text: '32', correct: true }
        ]
    },
    {
        question: 'What is 100 % 3',
        answers: [
            { text: '6', correct: false},
            { text: '1', correct: true },
            { text: '4', correct: false}
        ]
    },
    {
        question: 'What is 403 - 207',
        answers: [
            { text: '4', correct: false},
            { text: '22', correct: false },
            { text: '196', correct: true }
        ]
    },
    {
        question: 'What is 32 + 2/3',
        answers: [
            { text: '32.6', correct: true},
            { text: '32.9', correct: false },
            { text: '33.2', correct: false }
        ]
    }
]

//Swapping the divs

const contBtn = document.querySelector('.continueBtn');
const firstDiv = document.querySelector('.first');
const secondDiv = document.querySelector('.container');

contBtn.addEventListener('click',()=> {
    firstDiv.style.display = 'none';
    secondDiv.style.display = 'block';
})