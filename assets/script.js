// <--- JavaScript --->

// Selectors
var startButtonEl = document.getElementById('start-button')
var displayTimeEl = document.getElementById('timer')
var displayScoreEl = document.getElementById('score')
var bodyBoxEl = document.getElementById('box')
var displayQuestion = document.getElementById('display-questions')

// Variables
var score = 0;
var win = 0;
var lose = 0;
// var displayQuestions;
var checkAnswer;
var endGame;
var playAgain;
var questionNumber = 0
var question;
var userChoices;
var correctAnswer;
var questionIndex = 0

 
 


var questions = [{
    question: "What is the color of the sky?",
    userChoices: ["Blue","Red","Green","Brown"],
    correctAnswer: 0 
    },
    {
    question: "What is an animal?",
    userChoices: ["Desk","Dog","Cup","Car"],
    correctAnswer: 1
    },
    {
    question: "What color is snow?",
    userChoices: ["Black","Yellow","Red","White"],
    correctAnswer: 3
}]


function queDisplay () {
    var queText = document.createElement("h2")
    var queButtonOne = document.createElement("button")
    var queButtonTwo = document.createElement("button")
    var queButtonThree = document.createElement("button")
    var queButtonFour = document.createElement("button")
    queButtonOne.setAttribute("id", "0")
    queButtonTwo.setAttribute("id", "1")
    queButtonThree.setAttribute("id", "2")
    queButtonFour.setAttribute("id", "3")

    queText.textContent = questions[questionNumber].question
    queButtonOne.textContent = questions[questionNumber].userChoices[0]
    queButtonTwo.textContent = questions[questionNumber].userChoices[1]
    queButtonThree.textContent = questions[questionNumber].userChoices[2]
    queButtonFour.textContent = questions[questionNumber].userChoices[3]

    displayQuestion.appendChild(queText)
    displayQuestion.appendChild(queButtonOne)
    displayQuestion.appendChild(queButtonTwo)
    displayQuestion.appendChild(queButtonThree)
    displayQuestion.appendChild(queButtonFour)


    var grabButtonId = document.getElementById(queButtonOne, queButtonTwo, queButtonThree, queButtonFour)

    grabButtonId.addEventListener("click", function(){
        return(queDisplay())
    })
    questionNumber++;
}

//create var = getelbyid (w/ button id)
//var addeventlistener click
    //re-run quequsplay on button 


var timerDisplay = addEventListener(function(){

    var time = 5
    time--;
    if (time > 0 ){
        
    } else {
        time === 0
        lose++;
        
        alert("Game Over")
        clearInterval()
    }
}, 1000);


startButtonEl.addEventListener("click", function() {
    queDisplay()
    timerDisplay()

    
    // checkAnswer()
    // enndGame()
    // playAgain()
})


// function displayQuestion  
    //  target the button on the page
        //class with display none
    //create a var with display el
    // displayQuestionsEl get el by id
        //empty out el
    //questionIndex maybe add data-index
