const startBtn = document.querySelector('.start-btn');
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
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion() {
    questionEl.innerText = question.question
}

function selectAnswer() {

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