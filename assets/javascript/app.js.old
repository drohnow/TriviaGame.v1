
$(document).ready(function() {


	//$("#divWrapper").css("background-image", "url('./assets/images/nbaBG2.jpg')");


	//$("#startButton").click(function() {
	//	$(this).fadeTo( function() {
	//		$(this).slideUp();
	//	})
	//	$("#triviaContainer").removeClass("startHidden");	

	//});

	$("#testButton").click(function() {
		$("#triviaContainer").hide();
		$("#divResults").show();
	

	});


	$("#startButton").click(function() {
		$(this).fadeTo( function() {
			$(this).slideUp("normal");

			$("#imgLebronJames").animate({ left: "-=600px" }, 1000);
			$("#imgLarryBird").animate({ left: "-=600px" }, 1000);
			$("#imgMJ").animate({ left: "-=600px" }, 1000);

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
		  clearInterval(intervalID)
		  $("#triviaContainer").hide();
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










 });