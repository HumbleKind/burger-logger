$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newBurger = $(this).data("isdevoured");

    var newBurgerState = {
      devoured: newBurger
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("changed eaten to", newBurger);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#br").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );

  });
});
