// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");

    // var newEatenState = {
    //   devoured: true
    // };

    // Send the PUT request.
    $.ajax("/api/food/" + id, {
      type: "PUT"
      // data: newEatenState
    }).then(
      function() {
        console.log("changed drink to", true);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newFood = {
      food_name: $("#fd").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/food", {
      type: "POST",
      data: newFood
    }).then(
      function() {
        console.log("created new drink");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
