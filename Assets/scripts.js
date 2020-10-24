var APIKey = "b6d12dfce99afcda449f11a91371bcfd";



$(document).ready(function () {



    $("#search-button").on("click", function () {
        //var location = $("#search").val()
        //var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;
        var city = $("#city-value").val()

        console.log(city)

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=b6d12dfce99afcda449f11a91371bcfd";
        
        console.log(queryURL)

        UVQueryURL = "http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid=b6d12dfce99afcda449f11a91371bcfd"

        $.ajax({
            url: queryURL,
            method: "GET",

        }).then(function (response) {
            console.log(response)
            // All Code That will add data th the html will go here
            var today = $("#Today");
            today.append('temperature: ' + response.main.temp)
            today.append('humidity:' + response.main.humidity)
            today.append('wind:' + response.wind.speed)
        })

        }).then(function (response) {
            console.log(response)
    })
})




// Create CODE HERE to transfer content to HTML
//$("#location").html(response)
