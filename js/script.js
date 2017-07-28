//custom jquery

$(document).ready(function() {

	//when the form is submitted this submit() executes
	$("#blanks form").submit(function(event) {
	//define variables that take the input from the form and transform them into strings
	var person1 = $("input#person1").val();
	var person2 = $("input#person2").val();
	var anAnimal = $("input#animal").val();
	var anExclamation = $("input#exclamation").val();
	var verb = $("input#verb").val();
	var noun = $("input#noun").val();

	//append all of the forms input into the story
	$(".person1").text(person1);
	$(".person2").text(person2);
	$(".animal").text(anAnimal);
	$(".exclamation").text(anExclamation);
	$(".verb").text(verb);
	$(".noun").text(noun);
  
  //unhides the story when form is submitted
	$("#story").show();

  //this prevents the page from reloading when the form doesn't have a destination url and you can see the hidden contents
  event.preventDefault();
	});
});