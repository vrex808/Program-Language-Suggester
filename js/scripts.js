$(document).ready(function() {
  $(".btn").click(function(event) {
    event.preventDefault();
    clearDivs();
    const person = $("input#name").val();
    let question2 = $("#question2").val();
    let question3 = $("#question3").val();
    let question5 = $("#question5").val();
    let question6 = $("#question6").val();

    $(".name").text(person);

    if (question2 === "no" && question3 === "no" && question5 === "no" && question6 === "no") {
      $("#javascript").show(); 
      $("#app").show();

    } else if (question2 === "yes") {
      $("#csharp").show(); 
      $("#app").show();
    }
    
    else if (question3 === "yes") {
      $("#python").show(); 
      $("#app").show();
    }

    else if (question6 === "yes") {
      $("#html").show(); 
      $("#app").show();
    }

    else if (question5 === "yes") {
      $("#react").show(); 
      $("#app").show();
    }

    });
});

function clearDivs() {
  $("#html").hide();
  $("#python").hide();
  $("#csharp").hide();
  $("#javascript").hide();
  $("#react").hide();
}
