$(document).ready(function(){
  $("#yell").submit(function(event) {
    var yellText = $("input#inputText").val();

    $(".outputText").text(yellText.toUpperCase());

    $("#hiddenContent").show();
    event.preventDefault();
  });
});
