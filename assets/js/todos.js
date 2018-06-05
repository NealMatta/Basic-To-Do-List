// Check off specific To-do's by clicking on them
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Deleting specific To-Do's by click on the X
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(function() {
    $(this).remove();
  });
  event.stopPropagation(); // Used to stop event bubbling
});

// !!! You do "Ul" on click instead because the second argument accoutns for dynamic content

// Adding To-Do's
$("input[type=text]").on("keypress", function(event) {
  if (event.which === 13) {
    var newToDo = $(this).val();
    $("ul").append("<li> <span><i class='fas fa-trash-alt'></i></span> " + newToDo + "</li>");
    $(this).val("");
    // Add that val into the ul as an li
  }
})

// Toggle the add button
$("i").first().on("click", function(){
  $("input[type=text]").fadeToggle("fast", "linear");
})
