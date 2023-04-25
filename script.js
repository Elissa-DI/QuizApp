const startBtn = document.querySelector('.start-btn');
const nextBtn = document.querySelector('.next-btn');
const questionContainer = document.querySelector('#question-container')
const questionEl = document.querySelector('#question');
const answerBtnEl = document.querySelector('#answer-buttons');

let shuffledQuestions, currentQuestionIndex

startBtn.addEventListener('click', startGame);

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
            button.dataset.corret = answer.correct
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
    }
]