$(document).ready(function() {
  $(".btn").click(function(event) {
    event.preventDefault();
    const person = $("input#name").val();
    const gender = $("select#gender").val();
    const question2 = $("select#yes-question2").val();
    const question3 = $("select#yes-qeustion3").val();
    const question5 = $("select#yes-question5").val();
    const question6 = $("#select#yes-question6").val();

    $(".name").text(person);

    if (gender === 'male' && 'female' && question2 === yes);
      $("#csharp").show(); $("#app").show();
    if (gender === 'male' && 'female' && question3 === yes);
      $("#python").show(); $("#app").show();
    if (gender === 'male' && 'female' && question6 === yes);
      $("#html").show(); $("#app").show();
    if (gender === 'male' && 'female' && question2 && question3 && question5 && question6 === no);
      $("#javascript").show(); $("#app").show();
    if (gender === 'male' && 'female' && question5 === yes);
      $("#react").show(); $("#app").show();

    });
});

