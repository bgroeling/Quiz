// Constants
const startButton = document.getElementById('start-btn')
const scoreButton = document.getElementById('End')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
    // End Window

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame,)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    // type in score
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
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
    question: 'What color is the sky?',
    answers: [
      { text: 'blue', correct: true },
      { text: 'red', correct: false },
      { text: 'green', correct: false },
      { text: 'purple', correct: false },
    ]
  },
  {
    question: 'Which is a U.S. state?',
    answers: [
      { text: 'England', correct: false },
      { text: 'New Mexico', correct: true },
      { text: 'Mexico', correct: false },
      { text: 'Germany', correct: false },
    ]
  },
  {
    question: 'Which of the following is a pasta?',
    answers: [
      { text: 'Gatorade', correct: false },
      { text: 'Spaghetti', correct: true },
      { text: 'Water', correct: false },
      { text: 'Milk', correct: false },
    ]
  },
  {
    question: 'Which is an animal?',
    answers: [
      { text: 'Duck', correct: true },
      { text: 'Rock', correct: false },
      { text: 'Pear', correct: false },
      { text: 'Bubble', correct: false },
    ]
  }
]
document.addEventListener('DOMContentLoaded', ()=> {
    const timeLeftDisplay = document.querySelector('#time-left');
    const StartBtn = document.querySelector('#start-btn')
    timeLeft = 300

    function countDown(){
        setInterval(function(){
            if(timeLeft <= 0 ) {
                clearInterval(timeLeft = 0)
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -=1
        }, 1000 )
    }
    StartBtn.addEventListener('click', countDown)
});
