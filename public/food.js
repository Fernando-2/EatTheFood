// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var devouredFresh = $(this).data("devouredFresh");
  
      var newlyDevoured = {
        devoured: devouredFresh
      };
  
      // Send the PUT request.
      $.ajax("/api/foods/" + id, {
        type: "PUT",
        data: newlyDevoured
      }).then(
        function() {
          console.log("changed devoured to", devouredFresh);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newFood = {
        name: $("#da").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
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