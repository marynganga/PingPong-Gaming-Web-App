//Back End Logic
 var total = [];
function countUp(input){
	for (var index = 1; index <= input; index++) {
		//test
		//console.log(index)
		if(index%3 === 0) {
		total.push("ping");
		}
		else{
			total.push(index);
		}
	};
	return total;
};

// Front End Logic
$(document).ready(function(){
	$("#userInput form").submit(function(event){
		event.preventDefault();
		//store the user input into a variable
		var number = parseInt($("#inputNumber").val());
		//test
		//console.log(number)

		//Call the function countUp to work on number in a new variable
		var countedNumbers = countUp(number);
			console.log(countedNumbers);
		$("#output").append("<li>" + total + "</li>" + "<br />");
  })
	});
		

