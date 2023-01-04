var startButtonEl = $('#start-button')
var displayTime = $('#timer')
var displayScoreEl = $('#score')
var bodyBoxEl = $('#box')

var score = 0;
var win;
var lose;
var timer
var time = 5;


startButtonEl.on("click", function() {
    timerDisplay()
    

})

var timerDisplay = setInterval(function(){
    time--;
    if (time > 0 ){
        displayTime.text(time)
    } else {
        time === 0
        displayTime.text(time)
        alert("Game Over")
        clearInterval(timerDisplay)
    }
}, 1000);

var displayQuestions =

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