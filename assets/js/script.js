// VARIABLES

var QuizModal = document.getElementById("Quiz-Modal");
var StartButton = document.getElementById("StartButton");

var True
var False

// CONSTANTS

    // Start button in html = Start button in javascript
    const startButton = document.getElementById('StartButton');
    const questionContainerElement = document.getElementById('Quiz');

    const questionElement = document.getElementById('Question');
    const answerButtonsElement = document.getElementById('answers')

let shuffledQuestions, currentQuestionIndex;

// PRESSING THE START BUTTON-BEGIN QUIZ
startButton.addEventListener('click', startQuiz);

// FUNCTIONS

    // The start page Disappears and the first question is randomly selected.
    function startQuiz() {
        console.log('Quiz Started');
        // removing the start screen from view
        shuffleQuestions = QuestionList.sort(() => Math.random() -.5);
        currentQuestionIndex = 0
        setNextQuestion();
}
    function setNextQuestion() {
        resetState()
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }
    function showQuestion(Question) {
        questionElement.innerText = QuestionList.Question;
        Question.answers.forEach(answer => {
            const button = document.createElement('button')
            button.innerText = answer.innerText
            button.classList.add('btn')
                if(answer.correct) {
                    button.dataset.correct = answer.correct
                }
                button.addEventListener('click',selectAnswer)
                answerButtonsElement.appendChild(button)
        })
    }

    function resetState() {
        
    }
    function selectAnswer() {

    }

// LIST OF QUESTIONS
    const QuestionList = [
        {Question:"What is spidermans name?",
            answers: [
            {answer: "Peter Parker",
            isCorrect: True
            },
            {answer: "batman",
            isCorrect: False
            },
            {answer: "bruce banner",
            isCorrect: False
            },
            {answer: "dog",
            isCorrect: False
            }
            ]
        },
        {Question:"What color is the sky?",
            answers: [
            {answer: "blue",
            isCorrect: True
            },
            {answer: "red",
            isCorrect: False
            },
            {answer: "green",
            isCorrect: False
            },
            {answer: "black",
            isCorrect: False
            }
            ]
        },
        {Question:"Which animal is a common house pet?",
            answers: [
            {answer: "Dog",
            isCorrect: True
            },
            {answer: "Giraffe",
            isCorrect: False
            },
            {answer: "Whale",
            isCorrect: False
            },
            {answer: "Big Bird",
            isCorrect: False
            }
            ]
        },
        {Question:"Which item is food?",
        answers: [
            {answer: "Spaghetti",
            isCorrect: True
            },
            {answer: "Nails",
            isCorrect: False
            },
            {answer: "Purple",
            isCorrect: False
            },
            {answer: "black",
            isCorrect: False
            }
            ]
    },  
]



