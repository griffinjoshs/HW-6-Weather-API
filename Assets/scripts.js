var APIKey = "b6d12dfce99afcda449f11a91371bcfd";



$(document).ready(function () {



    $("#search-button").on("click", function () {
        var city = $("#city-value").val()

        console.log(city)

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=b6d12dfce99afcda449f11a91371bcfd";
        
        console.log(queryURL)

        $.ajax({
            url: queryURL,
            method: "GET",
            

        }).then(function(response) {
            console.log(response)
            // All Code That will add data to the html will go here
            //city = $("#location");
            var temp = $("#temp");
            var humidity = $("#humidity");
            var wind = $("#wind");
            var location = $("#location");

            // Convert the temp to fahrenheit
            //var tempF = (response.main.temp - 273.15) * 1.80 + 32;

            location.append(city)
            temp.append('temperature: ' + response.main.temp)
            humidity.append('humidity: ' + response.main.humidity)
            wind.append('wind: ' + response.wind.speed)

        })
    })
})

// Create CODE HERE to transfer content to HTML
//$("#location").html(response)
