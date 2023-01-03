var score = 0

function test(button) {
    var timer = 30
    var questionOne = setTimeout(function() {
        // create a display timer that shows time you have to finish question
        // create a check box list with html list elemnt

        // questions
        var questions = ["Dogs can fly", "Cats can fly","Pigs can fly","Dogs can't fly"]
        correctAnswer = questions("Dogs can't fly]")
        // Timer
        document.getElementById('count').innerHTML=timer; 
        timer--;
        // User choice
        function userChoice(userInput){

        }
        // fix
        if (count === 0 ){
            alert("You are out of time!")
        }else if (userChoice && correctAnswer){
            alert("Correct!")
            nexQuestion
        } else {
            setTimeout(function() {alert("You have lost time!")}, 1000/5 );
            return;
        }}, 1000);
//     var questionTwo = setTimeout(function() {
//         if (userChoice && correctAnswer){

//         } else {
//             setTimeout(function() {alert("You have lost time!")}, 1000/5 );
//             return;
//             }}, 1000 * 30);
//     var questionThree = setTimeout(function () {
//         if (userChoice && correctAnswer){

//         } else {
//             setTimeout(function() {alert("You have lost time!")}, 1000/5 );
//             return;
//         }}, 1000 * 30);
}

