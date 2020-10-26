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
            var currentDate = moment().format('l');

            location.append(city + " " + currentDate)
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

                // counter for forloop
                var startMyForecast = 1;

                //object array
                var fiveDayForecast = [
                    {
                        day: $("#day1"),
                        temp: $("#day1temp"),
                        humidity: $("#day1humidity"),
                    },
                    {
                        day: $("#day2"),
                        temp: $("#day2temp"),
                        humidity: $("#day2humidity"),
                    },
                    {
                        day: $("#day3"),
                        temp: $("#day3temp"),
                        humidity: $("#day3humidity"),
                    },
                    {
                        day: $("#day4"),
                        temp: $("#day4temp"),
                        humidity: $("#day4humidity"),
                    },
                    {
                        day: $("#day5"),
                        temp: $("#day5temp"),
                        humidity: $("#day5humidity"),
                    },
                ]

                for (var i = 0; i < fiveDayForecast.length; i++) {
                    var currDate = moment().add(startMyForecast, "day");
                    currDate = String(currDate);
                    currDate = currDate.substr(0, 15);
                    fiveDayForecast[i].day.append(currDate);
                    startMyForecast++
                }

                var objCounter = 0;

                //5 day forcast for loop
                for (var i = 1; i < 6; i++) {
                    // Convert the temp to fahrenheit
                    var tempF = ((response.daily[i].temp.day - 273.15) * 1.80 + 32).toFixed(2);
                    fiveDayForecast[objCounter].temp.append("temperature:" + tempF + "°F")
                    fiveDayForecast[objCounter].humidity.append("humidity:" + response.daily[i].humidity + "%")

                }

                // var date = new Date(response.daily[1].dt * 1000).toDateString();
                // console.log('thedate', date)

                // All Code That will add data to the html will go here


            })


            //day1.append('Temp: ' + response.daily.temp.day)

        })
    })
})

// Create CODE HERE to transfer content to HTML
//$("#location").html(response)
