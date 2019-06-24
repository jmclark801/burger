$(".addBurger").on("submit", function (event) {
  event.preventDefault();
  var newBurger = {
    burger_name: $("#burgerName").val().trim(),
    devoured: "FALSE"
  };
  // Send the POST request.
  $.ajax('/api/burgers', {
    type: "POST",
    data: newBurger
  }).then(
    function () {
      console.log("Added a new burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

$(".devour").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newState = {
      devoured: true
    }
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: newState
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      });
  })