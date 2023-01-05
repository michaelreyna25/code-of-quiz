// <--- JavaScript --->

// Selectors
var startButtonEl = $('#start-button')
var displayTime = $('#timer')
var displayScoreEl = $('#score')
var bodyBoxEl = $('#box')
var questionDisplayEl = $('#display-questions')

// Variables
var time = 5;
var score = 0;
var win = 0;
var lose = 0;
var displayQuestions;
var checkAnswer;
var enndGame;
var playAgain;
var timerDisplay;
var questionNumber = 0

var questions = [{
    quesion: "What is the color of the sky?",
    userChoices: ["Blue","Red","Green","Brown"],
    correctAnswer: 0 
    },
    {
    question: "Do dogs fly?",
    userChoices: ["Yes","No"],
    correctAnswer: 1
    },
    {
    question: "What color is snow?",
    userChoices: ["Black","Yellow","Red","White"],
    correctAnswer: 3
}]

startButtonEl.on("click", function() {
    timerDisplay()
    questionDisplay()
    checkAnswer()
    enndGame()
    playAgain()
})

timerDisplay = setInterval(function(){
    time()
    time--;
    if (time > 0 ){
        displayTime.text(time)
    } else {
        time === 0
        lose++;
        displayTime.text(time)
        alert("Game Over")
        clearInterval(timerDisplay)
    }
}, 1000);

$(questionDisplayEl).on(function(){
    
    var userInput = [userChoices[i]]

})

function winGame() {
    win++;
    clearInterval(timerDisplay);
}



// Vars      

// start btn function
    //start timer 
    //display question

    //check answer
    //end
    //playagin
// Timer function
    //event click when button is clicked
// display question function
    //array of questions
    //true or false
// checkAnswer function
// end function
    //show score
    //initials
//play again function