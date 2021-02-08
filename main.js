// Select HTML elements DAY 1
const searchbox = document.querySelector(".inputLat");
const searchbox2 = document.querySelector(".inputLong");
const currentTemp = document.querySelector("#currentTemp");
const wind = document.querySelector("#wind");
const fog = document.querySelector("#fog");
const symbol_code = document.querySelector("#symbol_code");

// Select HTML elements DAY 2
const currentTemp2 = document.querySelector("#currentTemp2");
const wind2 = document.querySelector("#wind2");
const fog2 = document.querySelector("#fog2");

// Select HTML elements DAY 3
const currentTemp3 = document.querySelector("#currentTemp3");
const wind3 = document.querySelector("#wind3");
const fog3 = document.querySelector("#fog3");

// Select HTML elements DAY 4
const currentTemp4 = document.querySelector("#currentTemp4");
const wind4 = document.querySelector("#wind4");
const fog4 = document.querySelector("#fog4");

// Select HTML elements DAY 5
const currentTemp5 = document.querySelector("#currentTemp5");
const wind5 = document.querySelector("#wind5");
const fog5 = document.querySelector("#fog5");

// Select HTML elements DAY 6
const currentTemp6 = document.querySelector("#currentTemp6");
const wind6 = document.querySelector("#wind6");
const fog6 = document.querySelector("#fog6");

// Select HTML elements DAY 7
const currentTemp7 = document.querySelector("#currentTemp7");
const wind7 = document.querySelector("#wind7");
const fog7 = document.querySelector("#fog7");

// Setting up for changing the values
var input = document.getElementById("lat");
var input2 = document.getElementById("long");

// Setting up the geoLocation
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  alert("Web browser dosen't support geolocation");
}

// Get location from Gelocation
function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  getWeather(latitude, longitude);
}

// Showing possible errors
function showError(error) {
  alert("Web browser dosen't support geolocation");
}

// Fetching Api with GeoLocation
async function getWeather(latitude, longitude) {
  let url = `https://api.met.no/weatherapi/locationforecast/2.0/complete.json?lat=${latitude}&lon=${longitude}`;

  console.log(url);

  fetch(url)
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (data) {
      const { properties, geometry } = data;
      console.log(data);

      currentTemp.innerHTML =
        properties.timeseries[1].data.instant.details.air_temperature;
      wind.innerHTML = properties.timeseries[1].data.instant.details.wind_speed;
      fog.innerHTML =
        properties.timeseries[1].data.instant.details.fog_area_fraction;
      symbol_code.innerHTML =
        properties.timeseries[0].data.next_1_hours.summary.symbol_code;

      date2.innerHTML = properties.meta.updated_at;
      currentTemp2.innerHTML =
        properties.timeseries[25].data.instant.details.air_temperature;
      wind2.innerHTML =
        properties.timeseries[25].data.instant.details.wind_speed;
      fog2.innerHTML =
        properties.timeseries[25].data.instant.details.fog_area_fraction;

      date3.innerHTML = properties.meta.updated_at;
      currentTemp3.innerHTML =
        properties.timeseries[49].data.instant.details.air_temperature;
      wind3.innerHTML =
        properties.timeseries[49].data.instant.details.wind_speed;
      fog3.innerHTML =
        properties.timeseries[49].data.instant.details.fog_area_fraction;

      date4.innerHTML = properties.meta.updated_at;
      currentTemp4.innerHTML =
        properties.timeseries[55].data.instant.details.air_temperature;
      wind4.innerHTML =
        properties.timeseries[55].data.instant.details.wind_speed;
      fog4.innerHTML =
        properties.timeseries[55].data.instant.details.fog_area_fraction;

      date5.innerHTML = properties.meta.updated_at;
      currentTemp5.innerHTML =
        properties.timeseries[59].data.instant.details.air_temperature;
      wind5.innerHTML =
        properties.timeseries[59].data.instant.details.wind_speed;
      fog5.innerHTML =
        properties.timeseries[59].data.instant.details.fog_area_fraction;

      date6.innerHTML = properties.meta.updated_at;
      currentTemp6.innerHTML =
        properties.timeseries[63].data.instant.details.air_temperature;
      wind6.innerHTML =
        properties.timeseries[63].data.instant.details.wind_speed;
      fog6.innerHTML =
        properties.timeseries[63].data.instant.details.fog_area_fraction;

      date7.innerHTML = properties.meta.updated_at;
      currentTemp7.innerHTML =
        properties.timeseries[67].data.instant.details.air_temperature;
      wind7.innerHTML =
        properties.timeseries[67].data.instant.details.wind_speed;
      fog7.innerHTML =
        properties.timeseries[67].data.instant.details.fog_area_fraction;

      // Setting up the dateformatter, and adding one day
      var options = { weekday: "long" };
      var date = new Date();
      date.setDate(date.getDate() + 1);
      document.getElementById("date2").innerHTML = date.toLocaleDateString(
        "en-US",
        options
      );

      // Adding a day each time
      date.setDate(date.getDate() + 1);
      document.getElementById("date3").innerHTML = date.toLocaleDateString(
        "en-US",
        options
      );
      date.setDate(date.getDate() + 1);
      document.getElementById("date4").innerHTML = date.toLocaleDateString(
        "en-US",
        options
      );
      date.setDate(date.getDate() + 1);
      document.getElementById("date5").innerHTML = date.toLocaleDateString(
        "en-US",
        options
      );
      date.setDate(date.getDate() + 1);
      document.getElementById("date6").innerHTML = date.toLocaleDateString(
        "en-US",
        options
      );
      date.setDate(date.getDate() + 1);
      document.getElementById("date7").innerHTML = date.toLocaleDateString(
        "en-US",
        options
      );
    });
}

// User input to change the value (latitude and longitude)
function weatherAsk() {
  let url2 = `https://api.met.no/weatherapi/locationforecast/2.0/complete.json?lat=${input.value}&lon=${input2.value}`;

  console.log(url2);

  fetch(url2)
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (data) {
      const { properties, geometry } = data;

      currentTemp.innerHTML =
        properties.timeseries[1].data.instant.details.air_temperature;
      wind.innerHTML = properties.timeseries[1].data.instant.details.wind_speed;
      fog.innerHTML =
        properties.timeseries[1].data.instant.details.fog_area_fraction;
      symbol_code.innerHTML =
        properties.timeseries[0].data.next_1_hours.summary.symbol_code;

      date2.innerHTML = properties.meta.updated_at;
      currentTemp2.innerHTML =
        properties.timeseries[25].data.instant.details.air_temperature;
      wind2.innerHTML =
        properties.timeseries[25].data.instant.details.wind_speed;
      fog2.innerHTML =
        properties.timeseries[25].data.instant.details.fog_area_fraction;

      date3.innerHTML = properties.meta.updated_at;
      currentTemp3.innerHTML =
        properties.timeseries[49].data.instant.details.air_temperature;
      wind3.innerHTML =
        properties.timeseries[49].data.instant.details.wind_speed;
      fog3.innerHTML =
        properties.timeseries[49].data.instant.details.fog_area_fraction;
      
      date4.innerHTML = properties.meta.updated_at;
      currentTemp4.innerHTML =
        properties.timeseries[55].data.instant.details.air_temperature;
      wind4.innerHTML =
        properties.timeseries[55].data.instant.details.wind_speed;
      fog4.innerHTML =
        properties.timeseries[55].data.instant.details.fog_area_fraction;

      date5.innerHTML = properties.meta.updated_at;
      currentTemp5.innerHTML =
        properties.timeseries[59].data.instant.details.air_temperature;
      wind5.innerHTML =
        properties.timeseries[59].data.instant.details.wind_speed;
      fog5.innerHTML =
        properties.timeseries[59].data.instant.details.fog_area_fraction;

      date6.innerHTML = properties.meta.updated_at;
      currentTemp6.innerHTML =
        properties.timeseries[63].data.instant.details.air_temperature;
      wind6.innerHTML =
        properties.timeseries[63].data.instant.details.wind_speed;
      fog6.innerHTML =
        properties.timeseries[63].data.instant.details.fog_area_fraction;

      date7.innerHTML = properties.meta.updated_at;
      currentTemp7.innerHTML =
        properties.timeseries[67].data.instant.details.air_temperature;
      wind7.innerHTML =
        properties.timeseries[67].data.instant.details.wind_speed;
      fog7.innerHTML =
        properties.timeseries[67].data.instant.details.fog_area_fraction;

      // Setting up the dateformatter, and adding one day
      var options = { weekday: "long" };
      var date = new Date();
      date.setDate(date.getDate() + 1);
      document.getElementById("date2").innerHTML = date.toLocaleDateString(
        "en-US",
        options
      );

      // Adding a day each time
      date.setDate(date.getDate() + 1);
      document.getElementById("date3").innerHTML = date.toLocaleDateString(
        "en-US",
        options
      );
      date.setDate(date.getDate() + 1);
      document.getElementById("date4").innerHTML = date.toLocaleDateString(
        "en-US",
        options
      );
      date.setDate(date.getDate() + 1);
      document.getElementById("date5").innerHTML = date.toLocaleDateString(
        "en-US",
        options
      );
      date.setDate(date.getDate() + 1);
      document.getElementById("date6").innerHTML = date.toLocaleDateString(
        "en-US",
        options
      );
      date.setDate(date.getDate() + 1);
      document.getElementById("date7").innerHTML = date.toLocaleDateString(
        "en-US",
        options
      );
    });
}
