$(document).ready(function() {
  $(".btn").click(function(event) {
    event.preventDefault();
    clearDivs();
    const person = $("input#name").val();
    const gender = $("input#gender").val();
    let question2 = $("select#question2").val();
    let question3 = $("select#question3").val();
    let question5 = $("select#quesiton5").val();
    let question6 = $("select#question6").val();
    let no = $("select#question2, question3, question5, question6").val();
    

    $(".name").text(person);

    if (question2 === "select#question2"); 
      $("#csharp").show(); $("#app").show();
    
    if (question3 === "select#question3");
      $("#python").show(); $("#app").show();

    if (question6 === "select#question6");
      $("#html").show(); $("#app").show();

    if (question2 && question3 && question5 && question6 === no);
      $("#javascript").show(); $("#app").show();

    if (question5 === "select#question5");
      $("#react").show(); $("#app").show();
    

    });
});

function clearDivs() {
  $("#html").hide();
  $("#python").hide();
  $("#csharp").hide();
  $("#javascript").hide();
  $("#react").hide();
}
