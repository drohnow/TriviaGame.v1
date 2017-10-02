$(document).ready(function() {

	//.   $("#finished").click(function() {
		//fnStop()
	

	//});

 // Website Rendering //

 var divTriviaBanner = document.createElement("div");
$(divTriviaBanner).addClass("divTriviaBanner");
$('body').append(divTriviaBanner);
$(".divTriviaBanner").html("<h1> NBA Trivia Game </h1>");
$('.divTriviaBanner').find('h1:first-child').attr("id", "banner");


var divStartButton = document.createElement("div")
$(divStartButton).addClass("class", "divStartButton")
$('body').append(divStartButton);




//var imgLebronJames = $('<img>');
//$('body').append(imgLebronJames);
//$(imgLebronJames).addClass("imgNBA");
//$(imgLebronJames).attr("src", "./assets/images/imgLebronJames.jpg")
//$(imgLebronJames).attr("id", "imgLebronJames")


//var imgLarryBird = $('<img>');
//$('body').append(imgLarryBird);
//$(imgLarryBird).addClass("imgNBA");
//$(imgLarryBird).attr("src", "./assets/images/imgLarryBird.jpeg")
//$(imgLarryBird).attr("id", "imgLarryBird")

//var imgMJ = $('<img>');
//$('body').append(imgMJ);
//$(imgMJ).addClass("imgNBA");
//$(imgMJ).attr("src", "./assets/images/imgMJ.jpg")
//$(imgMJ).attr("id", "imgMJ")

var imgMagic = $('<img>');
$('body').append(imgMagic);
$(imgMagic).addClass("imgNBA");
$(imgMagic).attr("src", "./assets/images/imgMagic.jpg")
$(imgMagic).attr("id", "imgMagic")

var imgKobeBryant = $('<img>');
$('body').append(imgKobeBryant);
$(imgKobeBryant).addClass("imgNBA");
$(imgKobeBryant).attr("src", "./assets/images/imgKobeBryant.jpg")
$(imgKobeBryant).attr("id", "imgKobeBryant")


var imgKyrie = $('<img>');
$('body').append(imgKyrie);
$(imgKyrie).addClass("imgNBA");
$(imgKyrie).attr("src", "./assets/images/imgKyrie.jpeg")
$(imgKyrie).attr("id", "imgKyrie")


var imgStephenCurry = $('<img>');
$('body').append(imgStephenCurry);
$(imgStephenCurry).addClass("imgNBA");
$(imgStephenCurry).attr("src", "./assets/images/imgStephenCurry.jpg")
$(imgStephenCurry).attr("id", "imgStephenCurry")

var divResultsContainer  = document.createElement("div");
$(divResultsContainer ).addClass("divResultsContainer startHidden");
$('body').append(divResultsContainer);

$(".divResultsContainer").attr("id", "divResults")
$(".divResultsContainer").append("<p> Score </p>");

$(".divResultsContainer").find("p:nth-child(1)").attr("id", "resultsScore");
$("#resultsScore").append("<span></span>");
$("#resultsScore").find('span:first-child').attr("id", "scoreSpan")




$("#divResults").append("<p>Correct: </p>");
$("#divResults").append("<p>Incorrect: </p>");
$("#divResults").append("<p>Unanswered: </p>");

//$("#divResults").find('h2:find-child').attr("id", "test");
$(".divResultsContainer").find("p:nth-child(2)").attr("id", "answersCorrectP");
$(".divResultsContainer").find("p:nth-child(3)").attr("id", "answersInCorrectP");
$(".divResultsContainer").find("p:nth-child(4)").attr("id", "unAnsweredP");

$("#answersCorrectP").append("<span></span>");
$("#answersCorrectP").find("span:first-child").attr("id", "answersCorrectSpan")

$("#answersInCorrectP").append("<span></span>");
$("#answersInCorrectP").find("span:first-child").attr("id", "answersInCorrectSpan")

$("#unAnsweredP").append("<span></span>");
$("#unAnsweredP").find("span:first-child").attr("id", "unAnsweredSpan")



// ----------   Site Logic   ---------- //

//$("#finished").click(function() {
//	$("#triviaContainer").hide();
//	$("#divResults").show();
//});



$("#startButton").click(function() {
		$(this).fadeTo( function() {
			$(this).slideUp("50000");

			//$("#imgLebronJames").animate({ left: "-=600px" }, 1000);
			//$("#imgLarryBird").animate({ left: "-=600px" }, 1000);
			//$("#imgMJ").animate({ left: "-=600px" }, 1000);

			$("#imgMagic").animate({ right: "-=302px" }, 1000);
			$("#imgKobeBryant").animate({ right: "-=302px" }, 1000);
			$("#imgStephenCurry").animate({ right: "-=302px" }, 1000);

			
			
			$("#banner").animate({ left: "-=490px" }, 1000);

			//$("#imgMagic").animate({ right: "-=302px" }, 1000);
			//$("#imgLebronJames").animate({ left: "-=448px" }, 1000);
			//$("#imgKobeBryant").animate({ right: "-=302px" }, 1000);
			//$("#imgLarryBird").animate({ left: "-=448px" }, 1000);
			//$("#imgStephenCurry").animate({ right: "-=302px" }, 1000);
			//$("#imgMJ").animate({ left: "-=448px" }, 1000);
			//$("#banner").animate({ left: "-=490px" }, 1000);

			

		})
		$("#triviaContainer").show(1000);	
		$("#divTimer").removeClass("startHidden");
		$("#divTimer").animate({ left: "-=400px" }, 1000);
		$("#divDone").removeClass("startHidden")
		
		$("#divYellTimer").removeClass("startHidden");
		


		fnRun()

	});

		var time = 120;
		var intervalID;

		function triviaTime() {
		        time--;
		        //console.log(fnConverter(time));
		        $("#gameTimer").html(fnConverter(time));
		        if (time === 0) {
		          fnStop();
		          console.log("time stopped!");
		        }
		       }

		function fnConverter() {
		    var minutes = Math.floor(time / 60);
		    var seconds = time - (minutes * 60); // t % 60
		    if (seconds < 10) {
		      seconds = "0" + seconds;
		    }
		    if (minutes === 0) {
		      minutes = "0";
		    }
		    return minutes + ":" + seconds;
		}




		function fnRun() {
		  intervalID = setInterval(triviaTime, 1000);
		  var windowTimeout = setTimeout(function(){
      	  $("#gameYell-H2").text("You Have 60 seconds Remaining")
   			}, 60000);
		  windowTimeout = setTimeout(function(){
		  $("#gameYell-H2").text("You have 30 seconds Remaining")
   			}, 90000);
		  windowTimeout = setTimeout(function(){
		  $("#gameYell-H2").text("You Have 10 seconds Remining")
   			}, 110000);
		  windowTimeout = setTimeout(function(){
		  $("#gameYell-H2").addClass("startHidden")
   		    }, 120000);


		  
		 // console.log(intervalID);
		}
		var audio = new Audio('./assets/sounds/buzzer.mp3');


		function fnStop() {
		  clearInterval(intervalID);
		  $("#triviaContainer").hide();
		  $("#imgMagic").hide();
		  $("#imgKobeBryant").hide();
		  $("#imgStephenCurry").hide();
		  $("#imgKyrie").hide();
		  $("#divBanner").hide();
		  $("#divTimer").hide();
		  $(".divTriviaBanner").hide();
		  $("#divDone").hide();
		  $("#divYellTimer").hide();
		  $("#divResults").show();
		   audio.play();


		  fnShowResults()
		}


function fnShowResults() {

var questionOne = document.getElementsByName("questionOne");
var questionTwo = document.getElementsByName("questionTwo");
var questionThree = document.getElementsByName("questionThree");
var questionFour = document.getElementsByName("questionFour");
var questionFive = document.getElementsByName("questionFive");
var questionSix = document.getElementsByName("questionSix");
var questionSeven = document.getElementsByName("questionSeven");
var questionEight = document.getElementsByName("questionEight");
var questionNine = document.getElementsByName("questionNine");
var questionTen = document.getElementsByName("questionTen");
var questionEleven = document.getElementsByName("questionEleven");
var questionTwelve = document.getElementsByName("questionTwelve");
var questionThirteen = document.getElementsByName("questionThirteen");
var questionFourteen = document.getElementsByName("questionFourteen");
var questionFifteen = document.getElementsByName("questionFifteen");
var questionSixteen = document.getElementsByName("questionSixteen");
var questionSeventeen = document.getElementsByName("questionSeventeen");
var questionEighteen = document.getElementsByName("questionEighteen");
var questionNineteen = document.getElementsByName("questionNineteen");
var questionTwenty = document.getElementsByName("questionTwenty");

var arrayGame = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, ]
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;

	


function fnTriviaGrade(x) {

	for (i = 0; i < x.length; i++) {
		if (x[i].checked === true) {
			if (x[i].value === "correct") {
			console.log("Answer is correct")
			correctAnswers++
			break
		} else {
			console.log("incorrect")
			incorrectAnswers++
		}

		}
	}
}


function fnUnanswered(x) { 
	for (i = 0; i < x.length; i++) {
		if (x[0].checked === false && x[1].checked === false && x[2].checked === false && x[3].checked === false) {
			console.log("unanswered")
			unAnswered++
		break;
		}
	}
}
	



fnTriviaGrade(questionOne);
fnTriviaGrade(questionTwo);
fnTriviaGrade(questionThree);
fnTriviaGrade(questionFour);
fnTriviaGrade(questionFive);
fnTriviaGrade(questionSix);
fnTriviaGrade(questionSeven);
fnTriviaGrade(questionEight);
fnTriviaGrade(questionNine);
fnTriviaGrade(questionTen);
fnTriviaGrade(questionEleven);
fnTriviaGrade(questionTwelve);
fnTriviaGrade(questionThirteen);
fnTriviaGrade(questionFourteen);
fnTriviaGrade(questionFifteen);
fnTriviaGrade(questionSixteen);
fnTriviaGrade(questionSeventeen);
fnTriviaGrade(questionEighteen);
fnTriviaGrade(questionNineteen);
fnTriviaGrade(questionTwenty);

fnUnanswered(questionOne);
fnUnanswered(questionTwo);
fnUnanswered(questionThree);
fnUnanswered(questionFour);
fnUnanswered(questionFive);
fnUnanswered(questionSix);
fnUnanswered(questionSeven);
fnUnanswered(questionEight);
fnUnanswered(questionNine);
fnUnanswered(questionTen);
fnUnanswered(questionEleven);
fnUnanswered(questionTwelve);
fnUnanswered(questionThirteen);
fnUnanswered(questionFourteen);
fnUnanswered(questionFifteen);
fnUnanswered(questionSixteen);
fnUnanswered(questionSeventeen);
fnUnanswered(questionEighteen);
fnUnanswered(questionNineteen);
fnUnanswered(questionTwenty);


console.log(correctAnswers);
console.log(incorrectAnswers);
console.log(unAnswered);
console.log(correctAnswers + incorrectAnswers + unAnswered);

$("#answersCorrectSpan").text(correctAnswers);
$("#answersInCorrectSpan").text(incorrectAnswers);
$("#unAnsweredSpan").text(unAnswered);
$("#scoreSpan").text((correctAnswers/20)*100 + "%");
console.log((correctAnswers/20)*100 + "%");

}








	$("#done").click(function() {
		//$("#triviaContainer").hide();
		//$("#divResults").show();
		fnStop();
	

	});














 });