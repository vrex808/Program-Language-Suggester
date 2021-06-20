$(document).ready(function() {
  $(".btn").click(function(event) {
    event.preventDefault();
    clearDivs();
    const person = $("input#name").val();
    let question2 = $("select#question2").val();
    let question3 = $("select#yes-question3").val();
    let question5 = $("select#yes-quesiton5").val();
    let question6 = $("select#yes-question6").val();

    $(".name").text(person);

    if (question2 == "no" && question3 == "no" && question5 == "no" && question6 == "no") {
      $("#javascript").show(); 
      $("#app").show();

    } else if (question2 == "yes" && question3 == "yes" && question5 == "yes" && question6 == "yes") {
      $("#csharp").show(); 
      $("#app").show();
    }
    
    else if (question3 == "yes") {
      $("#python").show(); 
      $("#app").show();
    }

    else if (question6 == "yes") {
      $("#html").show(); 
      $("#app").show();
    }

    else if (question5 == "yes"); {
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
