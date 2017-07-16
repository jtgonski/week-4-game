$(document).ready(function() {

// declare variables
var wins = 0; 
var losses = 0; 
var userScore = 0; 
var compNumber = 19 + Math.floor(Math.random() * 120);
var catValue = function(num) {
	var num = 1 + Math.floor(Math.random() * 12);
	return num;
}
//create cat array, in order to assign values more easily to each cat picture
// var catArray = [];

// function cats() {
// 	for (i = 0; 0 < input.length; i++) {
// 		catArray.push($(".cats"));
// 	}
// };

console.log("Computer Number: " + compNumber);
console.log("1st catValue " + catValue());
console.log("2nd catValue " + catValue());



//randomly generate some number between 19 and 120 (computer guess)
	$("#comp-num").text(compNumber);

//randomly generate numbers for each cat between 1-12


	 $("input").each(function () {
	 	
        $(this).attr("cat-data", catValue());

        console.log($(this).attr("cat-data"));
    });



//create click event for each cat 
		$(document)on("click", function() {

			// add clicked number to existing number score 
			userScore = userScore + $(this).attr("cat-data"); 

			console.log("this is the new score: " + userScore);
			$("#user-score").text(userScore);
		});

//constantly check if new number matches computernumber 
//if new number === computernumber, wins plus 1, reset game, alert you win! 
//if new number < computernumber, continue game 
//if new number > computernumber, losses plus 1, reset game, alert you lose! 



});

