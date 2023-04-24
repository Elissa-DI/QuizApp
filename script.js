const startBtn = document.querySelector('.start-btn');
const questionContainer = document.querySelector('#question-container')
//const shuffledQuestions, currentQuestionIndex
const questionEl = document.querySelector('#question');
const answerBtnEl = document.querySelector('#answer-buttons');

startBtn.addEventListener('click', startGame);

function startGame() {
    startBtn.classList.add('hide');
    questionContainer.classList.remove('hide');
    nextQuestion()
}
function setNextQuestion() {
    
}
function nextQuestion() {
    
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