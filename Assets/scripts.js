var APIKey = "b6d12dfce99afcda449f11a91371bcfd";

$(document).ready(function () {

    $("#search-button").on("click", function () {
        var city = $("#city-value").val()

        console.log(city)

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=b6d12dfce99afcda449f11a91371bcfd";

        console.log(queryURL)

        $.ajax({
            url: queryURL,
            method: "GET"


        }).then(function (response) {
            console.log(response)
            // All Code That will add data to the html will go here
            //city = $("#location");
            var location = $("#location");
            var temp = $("#temp");
            var humidity = $("#humidity");
            var wind = $("#wind");
            // Convert the temp to fahrenheit
            var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed(2);

            location.append(city)
            temp.append('temperature: ' + tempF)
            humidity.append('humidity: ' + response.main.humidity)
            wind.append('wind: ' + response.wind.speed)

            var lat = response.coord.lat

            var lon = response.coord.lon

            var UVqueryURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=b6d12dfce99afcda449f11a91371bcfd"

            console.log(UVqueryURL)

            $.ajax({
                url: UVqueryURL,
                method: "GET"
            })
                .then(function (response) {
                    console.log(response);
                    // All Code That will add data to the html will go here
                    var uv = $("#uv");
                    uv.append('uv index: ' + response.value)
                })
            
            // 5 day forecast api declaration
            var forecast5queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=b6d12dfce99afcda449f11a91371bcfd"
                    console.log(forecast5queryURL);
              // 5 day forecast ajax
              $.ajax({
                url: forecast5queryURL,
                method: "GET"

            }).then(function (response) {
                console.log(response);
                // All Code That will add data to the html will go here
                var day1 = $("#day1");
                day1.append('Day 1: ' + response.daily[0].temp.day)
            })

            // 5 day forcast for loop
            for (var i = 0; i < response.list; i++){
                var forecast = response.list[i]
                forecast.temp.day
                forecast.humidity
                forecast.wind_speed
                forecast.uvi
            }

        })
    })
})

// Create CODE HERE to transfer content to HTML
//$("#location").html(response)
