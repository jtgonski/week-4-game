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
var number;
//create cat array, in order to assign values more easily to each cat picture


// function cats() {
// 	for (var i = 0; 0 < input.length; i++) {
// 		catArray.push($(".cats"));
// 	}
// };

console.log("Computer Number: " + compNumber);
console.log("1st catValue " + catValue());
console.log("2nd catValue " + catValue());

var catImageArray = ["assets/images/cat-hotdog.jpeg", "assets/images/cat-in-the-box2.jpeg", 
	"assets/images/fat-cat-in-snow.jpeg", "assets/images/annoyed_cat.jpeg"];

function appendCatImages() {
	for (var i = 0; i < catImageArray.length; i++) {
		var imgDiv = $("<div class='image-div-jq' data-cat-data="+catValue()+">");

		var image = $("<img class='cat'>");

		image.attr("src", catImageArray[i]).height(200).width(200);

		imgDiv.append(image);

		$(".image-div").append(imgDiv);
	}

}

appendCatImages();

function reset() {
	userScore = 0;
	$("#user-score").text(userScore);
	compNumber =  19 + Math.floor(Math.random() * 120);
	$("#comp-num").text(compNumber);
	$(".image-div-jq").remove();
	appendCatImages();

}

//randomly generate some number between 19 and 120 (computer guess)
	$("#comp-num").text(compNumber);


//create click event for each cat 
		$(document).on("click", ".image-div-jq", function() {

			// add clicked number to existing number score 
			userScore = userScore + $(this).data("cat-data"); 

			if (userScore < compNumber) {

				console.log("this is the new score: " + userScore);
				$("#user-score").text(userScore);
			}

			else if (userScore === compNumber) {
				alert("you win!"); 
				wins++;
				$("#wins").text("wins: " + wins);
				reset();
			}

			else if (userScore > compNumber) {
				alert("you lose!");
				losses++;
				$("#losses").text("losses: " + losses);
				reset();
			}
			
		});

console.log(userScore);


//constantly check if new number matches computernumber 
//if new number === computernumber, wins plus 1, reset game, alert you win! 
//if new number < computernumber, continue game 
//if new number > computernumber, losses plus 1, reset game, alert you lose! 



});

