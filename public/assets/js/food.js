// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eat").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var newEatenState = {
      sleepy: newEat
    };

    // Send the PUT request.
    $.ajax("/api/food/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function() {
        console.log("changed eat to", newEat);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newFood = {
      food_name: $("#food").val().trim(),
      devoured: $("[food_name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/food", {
      type: "POST",
      data: newFood
    }).then(
      function() {
        console.log("created new food");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
