//mark total
var markTotal = 0;

//check password, highlight if incorrect, make quiz visible if correct
function passwordCheck() {	

	//input password
	var inputWord = $("#password").val();
	
	//prompt text to be changed 
	var promptText = $("#promptText");
	
	if(inputWord == "password") {
		
		//array of contblock divs
		var blockArray = $(".contblock");
		
		for(let i = 0; i < blockArray.length; i++) {
			$(blockArray).eq(i).css("display", "block");
		}	
		$("#blocker").css("display", "none");
		$("#quiz").css("display", "block");
		$("#quizEnding").css("display", "block");

	} else {	
		promptText.html("Re-enter password:");	
		promptText.css("color", "red");
		$("#password").css("border", "1px solid red");
	}
}

//Check answer by iterating through each question and comparing button value to answer array.
//Remove button at completion and display mark.

function answerCheck() {
	
	//array of solution values for radio buttons in each question
	var solutionArray = [2,2,2,2];		
	
	//array of all questions as div blocks
	var blockArray = document.getElementsByClassName("contblock");
	
		for(let i = 0; i < blockArray.length; i++) {	
		
			var answerArray = blockArray[i].getElementsByTagName("INPUT");
			
			for(let j = 0; j < answerArray.length; j++) {				
				if(answerArray[j].checked && solutionArray[i] == answerArray[j].value){
					markTotal++;
				}
			}				
		}				
		document.getElementById("endBlock").innerHTML = "<p>" + markTotal + "/4" + "</p>";
}

//Hide all questions after check

function hideAllQuestions() {
		
		//array of all questions as div blocks
		var blockArray = $(".contblock");
		
		for(let i = 0; i < blockArray.length; i++) {
			$(blockArray).eq(i).css("display", "none");
		}
		$("#quiz").html("Quiz Results");	
}	

