function test(button) {
    var timer = 30
    var questionOne = setTimeout(function() {
        // create a display timer that shows time you have to finish question
        // create a check box list with html list elemnt
        document.getElementById('count').innerHTML=timer; 
        timer--;
        function userChoice(userInput){
            
        }
        if (userChoice && correctAnswer){
            document
        } else {
            setTimeout(function() {alert("You have lost time!")}, 1000/5 );
            return;
            }
        if (count === 0 ){
            alert("You are out of time!")
        }
        }, 1000);
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
// }

