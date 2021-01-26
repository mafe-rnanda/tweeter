$(document).ready(function () {

  $("#tweet-text").on("input", function (event) {
    let remainingChar = 140 - $(this).val().length;
    let changingCounter = $(this).siblings().children(".counter").html(remainingChar);

    if (remainingChar < 0) {
      changingCounter.addClass("minus-counter");
    } else {
      changingCounter.removeClass("minus-counter");
    }

  });
});
