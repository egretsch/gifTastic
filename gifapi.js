var butions = ["goku", "cloud FF7", "one punch man", "batman"];

// Creates the buttons for the array as well as anything added to it
function topic() {
var search = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
        console.log(queryURL);
        
    var results = response.data;
    for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div class='search'>");
        var p = $("<p>").text("Rating: " + results[i].rating);
        var gifImage = $("<img>");
        // gifImage.attr("data-state");
        // Gives data characteristics to each topic that is created
        
        gifImage.attr(
            {
                "data-state": "still",
                "data-animate": results[i].images.fixed_height.url,
                "data-still": results[i].images.fixed_height_still.url,
                "class" : "gifty2",
                "src": results[i].images.fixed_height_still.url

            }
        )
        console.log(results[i].images.fixed_height_still.url);
        gifDiv.append(p);
        gifDiv.append(gifImage);
        $("#gifs").prepend(gifDiv);
    }

    });
}
// Allows application to shift between still and moving Ghiphy
$(document).on("click", ".gifty2",  function () {

    console.log($(this))
    
    var state = $(this).attr("data-state");
    
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});
// Deletes current buttons and re-renders the whole array
function renderButtons() {
    $("#buttons").empty();
    for (var i = 0; i < butions.length; i++) {
        var a = $("<button>");
        a.addClass("gifty");
        a.attr("data-name", butions[i]);
        a.text(butions[i]);
        $("#buttons").append(a);
    }
}
// Allows information from the field to be moved to the array
$("#add-button").on("click", function (event) {
    event.preventDefault();
    $("#button-input").empty();
    var button2 = $("#button-input").val().trim();
    butions.push(button2);
    renderButtons();
    
});
// Allows the class for each button or get the to be affected
$(document).on("click", ".gifty", topic);


renderButtons();
