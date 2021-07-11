// Start button in html = Start button in javascript
const startButton = document.getElementById('StartButton');
const questionContainerElement = document.getElementById('Quiz');
setNextQuestion();

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    console.log('Quiz Started');
    shuffleQuestions = questions.sort(() => Math.random() -.5);
    currentQuestionIndex = 0
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function selectAnswer() {

}
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
    // Modals

        // Quiz Modal
        var QuizModal = document.getElementById("Quiz-Modal");
        var StartButton = document.getElementById("StartButton");

    // Questions
    var 

// Functions

    // Modal Screens

        // Open Quiz Modal When Start Button is Clicked
        StartButton.onclick = function() {
            QuizModal.style.display = "block";
        };
        // Open False Screen Modal When False is clicked
        
            // Go Back to Quiz Screen When "Next Question" is Clicked

        // Open True Screen Modal When True is clicked

            // Go Back to Quiz Screen When "Next Question" is Clicked

    // Clock
        
        // When Start Button is Clicked, Begin Countdown

        // When Clock = 0 The End Screen is opened

    // Score
        
        // When True is Clicked, at 25 points to ScoreBoard

        // When End Screen is active, display Score on Final ScoreBoard

    // Quiz 
// 




