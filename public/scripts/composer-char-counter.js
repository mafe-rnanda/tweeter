$(document).ready(function () {
  $("#tweet-text").on("input", function (event) {
    let remainingChar = 140 - $(this).val().length;
    let changingCounter = $(this).siblings().children(".counter").html(remainingChar);
    changingCounter.toggleClass("minus-counter", remainingChar < 0);
  });
});
