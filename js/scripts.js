$(document).ready(function() {
  $(".btn").click(function(event) {
    event.preventDefault()
    const person = $("input#name").val();
    const gender = $("select#gender").val();
    const question2 = $("select#yes-question2")
    const question3 = $("select#yes-qeustion3")
    const question5 = $("select#yes-question5")
    const question6 = $("#select#yes-question6")

    $(".name").text(person);

    if (gender === 'male' && 'female' && question2 && question3 && question6 >= yes);
      $("#python").show(); $("#app").show();
      if (gender === 'male' && 'female' && question2 && question3 && question5 && question6 >= no);
      $("#javascript").show(); $("#app").show();
  
    });
});