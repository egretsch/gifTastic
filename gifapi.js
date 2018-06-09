var butions = [];

// function displayMovieInfo() {

//     var movie = $(this).attr("data-name");
//     var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         $("#movies-view").text(JSON.stringify(response));
//         renderButtons();
//     });
// }


function renderButtons() {
    $("#buttons").empty();
    for (var i = 0; i < butions.length; i++) {
        var a = $("<button>");
        a.addClass("button");
        a.attr("data-name", butions[i]);
        a.text(butions[i]);
        $("#buttons").append(a);
    }
}

$("#add-button").on("click", function (event) {
    event.preventDefault();
    var button2 = $("#button-input").val().trim();
    butions.push(button2);
    renderButtons();

});

$(document).on("click", ".buttion", alertMovieName);


renderButtons();