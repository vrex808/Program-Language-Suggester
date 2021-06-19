$(document).ready(function() {
  $("#application").submit(function(event) {
  event.preventDefault()
    const person = $("input#name").val();
    const gender = $("select#gender").val();
    const dob = $("#born").val();

    $(".name").text(person);
    $("#html").show();
    $("#python").show();
    $("#csharp").show();
    $("#javascript").show();
    $("#react").show();
    
  });
});

