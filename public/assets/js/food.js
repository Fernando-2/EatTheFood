// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
   // DELETE
   $(".remove-food").on("click", function() {
    const foodId = $(this).attr("data-id");

    console.log(foodId);

    $.ajax("/api/foods/" + foodId, {
      method: "DELETE"
    }).then(function() {
      console.log("food was deleted succesfully!");

      window.location = "/";
    });
  });
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/foods/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
    console.log("herreeeeeeeeeee")
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newFood = {
      name: $("#Fa").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/foods", {
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