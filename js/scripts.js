
// Front End Logic
$(document).ready(function(){
	$("#userInput form").submit(function(event){
		event.preventDefault();
		//store the user input into a variable
		var number = parseInt($("#inputNumber").val());
		//test
		console.log(number)
		
	})
})