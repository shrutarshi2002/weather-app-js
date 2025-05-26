// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));

// function sum(a, b) {
//   document.write(a + b);
// }

// sum(num1, num2);

// function myFirst() {
//   alert("GoodMoring");
// }

// function mySecond() {
//   alert("GoodAfternoon");
// }

// setTimeout(myFirst, 2000);
// mySecond();

// callback

// fetch(urlapi)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });

// function sum(a, b) {
//   return a + b;
// }
// const sum = (a, b) => a + b;

// function sum(a, b) {
//   console.log(a + b);
// }
// const sum = (a, b) => {
//   console.log(a + b);
// }

let city = "kolkata";
const urlapi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f40af58044177c6613c10d1bbc618659`;

fetch(urlapi)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let iconcode = data.weather[0].icon;
    console.log(iconcode);
    let iconUrl = `https://openweathermap.org/img/wn/${iconcode}@2x.png`;
    if (iconcode == "50d") {
      // document.body.style.backgroundImage = "url('images/clear.jpg')";
      iconUrl = "images/mist.png";
    } else if (iconcode == "01d") {
      // document.body.style.backgroundImage = "url('images/clear.jpg')";
      iconUrl = "images/sun.png";
    } else if (iconcode == "02d") {
      // document.body.style.backgroundImage = "url('images/clear.jpg')";
      iconUrl = "images/partly-cloudy.png";
    } else if (iconcode == "03d") {
      // document.body.style.backgroundImage = "url('images/clear.jpg')";
      iconUrl = "images/cloud.png";
    } else if (iconcode == "04d") {
      // document.body.style.backgroundImage = "url('images/clear.jpg')";
      iconUrl = "images/clouds.png";
    } else if (iconcode == "09d") {
      // document.body.style.backgroundImage = "url('images/clear.jpg')";
      iconUrl = "images/sun-shower.png";
    } else if (iconcode == "10d") {
      // document.body.style.backgroundImage = "url('images/clear.jpg')";
      iconUrl = "images/heavy-rain.png";
    } else if (iconcode == "11d") {
      // document.body.style.backgroundImage = "url('images/clear.jpg')";
      iconUrl = "images/thunder.png";
    } else if (iconcode == "13d") {
      // document.body.style.backgroundImage = "url('images/clear.jpg')";
      iconUrl = "images/snowy.jpg";
    }
    const { lat, lon } = data.coord;
    console.log(lat, lon);
    getSevenDayForecast(lat, lon);
    console.log(data.weather[0].description);

    console.log(iconUrl);
    document.querySelector(".weathericon").src = iconUrl;
    document.querySelector(".name").innerHTML = data.name;
    // Convert temperature from Kelvin to Celsius
    let tempCelsius = (data.main.temp - 273.15).toFixed(2);

    document.querySelector(".show-temp").innerHTML = tempCelsius + "°C";
    document.querySelector(".show-feels").innerHTML =
      data.weather[0].description;
  });

function getSevenDayForecast(lat, lon) {
  console.log(lat, lon);
  const url = `https://api.weatherapi.com/v1/forecast.json?key=a9d4b706036d49dab4a73114251905&q=${city}&days=7`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.forecast.forecastday[0].date);
      console.log(data.forecast.forecastday[0].day.maxtemp_c);
      console.log(data.forecast.forecastday[1].date);
      console.log(data.forecast.forecastday[1].day.maxtemp_c);
      console.log(data.forecast.forecastday[1].day.mintemp_c);

      // const daily = data.daily.slice(0, 7); // 7-day forecast
      // daily.forEach((day, index) => {
      //   const date = new Date(day.dt * 1000).toDateString();
      //   const temp = day.temp.day;
      //   const weather = day.weather[0].description;
      //   console.log(`${date}: ${temp}°C - ${weather}`);
      // });
    })
    .catch((error) => console.error("Error fetching forecast:", error));
}
