// <--- JavaScript --->

// Selectors
var startButtonEl = $('#start-button')
var displayTimeEl = $('#timer')
var displayScoreEl = $('#score')
var bodyBoxEl = $('#box')

// Variables
var score = 0;
var win = 0;
var lose = 0;
var displayQuestions;
var checkAnswer;
var endGame;
var playAgain;
var questionNumber = 0

var questionDisplayHeading = $(
    '<h1 class="question-one question-two question-three all-done highscores>"'
)

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

startButtonEl.on("click", function() {
    
    timerDisplay()

    
    // checkAnswer()
    // enndGame()
    // playAgain()
})

var timerDisplay = setInterval(function(){

    var time = 5
    time--;
    if (time > 0 ){
        displayTimeEl.text(time)
    } else {
        time === 0
        lose++;
        displayTimeEl.text(time)
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