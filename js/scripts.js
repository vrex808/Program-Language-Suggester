$(document).ready(function() {
  $(".btn").submit(function(event) {
    event.preventDefault()
    const person = $("input#name").val();
    const gender = $("select#gender").val();
    const question2 = $("select#yes-question2")
    const question3 = $("select#yes-qeustion3")
    const question5 = $("select#yes-question5")
    const question6 = $("#select#yes-question6")

    $(".name").text(person);
    $("#app").show();
    $("#html").show();
    $("#python").show();
    $("#csharp").show();
    $("#javascript").show();
    $("#react").show();
    
    if (gender === 'male' || 'female' && question2 < yes);
    if (gener === 'male' || 'female' && question2 > yes);

    if (gender === 'male' || 'female' && question3  );
    if (gender === 'male' || 'female' && question5 );
    if (gender === 'male' || 'female' && question6 );
    });
});

