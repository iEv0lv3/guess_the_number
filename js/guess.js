function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var number = (getRandomNumber(1, 100));

$("#user_input").on("submit", function(event) {
  event.preventDefault();

  var guessNum = parseInt($("#numberGuess").val());

 if (guessNum === number) {
   $("#list_results").append("<li>" + guessNum + " was correct! </li>");
   $("#user_input")[0].reset();
 }

 else if (guessNum > number) {
   $("#list_results").append("<li>" + guessNum + " is too damn high! </li>");
   $("#user_input")[0].reset();
  }

 else {
    $("#list_results").append("<li>" + guessNum + " is too damn low! </li>");
    $("#user_input")[0].reset();
   }

});
