const apiURL =
  "add api url";
const apiKey = "Add your api key";
const searchBtn = document.querySelector(".btn");
const cityName = document.querySelector(".srch");
const weatherIcon = document.querySelector(".icon");
const weatherFeel = document.querySelector("#temp");
const weatherFeels = document.querySelector("#temp-f");
const locaName = document.querySelector("#location");
const humidity = document.querySelector("#humidity");
const toDate = document.querySelector(".day");
const wind = document.querySelector("#wind");
const dy1Img = document.querySelector("#dyi1");
const dy2Img = document.querySelector("#dyi2");
const dy3Img = document.querySelector("#dyi3");
const dy4Img = document.querySelector("#dyi4");
const dy5Img = document.querySelector("#dyi5");
const newDate = document.querySelector(".temp12");
const forecast = document.getElementById("billow");
const looklike = document.querySelector(".cur-dy");

async function showWeather(area) {
  try {
    const response = await fetch(apiURL + area + `&appid=${apiKey}`);
    const data = await response.json();
    const toDay = data.list[0].dt_txt;
    const temp = data.list[0].main.temp;
    const weatherCheck = data.list[0].weather[0].main;
    const humidityp = data.list[0].main.humidity;
    const feelLie = Math.round(data.list[0].main.feels_like);
    const windSpeed = Math.round(data.list[0].wind.speed);
    const fahrenheit = Math.round((temp * 9) / 5 + 32);
    console.log(data.list[0].dt_txt);

    weatherFeel.innerText = Math.round(temp) + "°C";
    weatherFeels.innerText = fahrenheit + "°F";
    humidity.innerText = `Humidity: ${humidityp}%`;
    wind.innerText = `Wind: ${windSpeed} KM/H`;

    locaName.innerText = data.city.name;

    document.getElementById("sea5").innerText = Math.round(temp) + " °C ";
    document.getElementById("sea6").innerText = fahrenheit + " °F ";

    console.log(data);

    cityName.value = "";

    if (weatherCheck == "Clear") {
      weatherIcon.src = "clear.png";
      looklike.innerText = "Clear";
    } else if (weatherCheck == "Rain") {
      weatherIcon.src = "rain.png";
      looklike.innerText = "Raining";
    } else if (weatherCheck == "Clouds") {
      weatherIcon.src = "suuny.png";
      looklike.innerText = "Cloudy";
    }

    document.getElementById("sea1").innerText = data.list[0].main.sea_level;
    document.getElementById("sea2").innerText = data.list[0].wind.gust;
    document.getElementById("sea3").innerText = data.list[0].wind.deg + " deg ";
    document.getElementById("sea4").innerText =
      data.list[0].wind.speed + " KM/H ";

    document.querySelector("#temp1").innerText =
      Math.round(data.list[12].main.temp) + "°C";
    document.querySelector("#temp-f1").innerText =
      Math.round((data.list[12].main.temp * 9) / 5 + 32) + "°F";

    if (data.list[12].weather[0].main == "Clear") {
      dy1Img.src = "clear.png";
      document.getElementById("su1").innerText = data.list[12].weather[0].main;
    } else if (data.list[12].weather[0].main == "Rain") {
      dy1Img.src = "rain.png";
      document.getElementById("su1").innerText = data.list[12].weather[0].main;
    } else if (data.list[12].weather[0].main == "Clouds") {
      dy1Img.src = "suuny.png";
      document.getElementById("su1").innerText = data.list[12].weather[0].main;
    }

    document.querySelector("#temp2").innerText =
      Math.round(data.list[18].main.temp) + "°C";
    document.querySelector("#temp-f2").innerText =
      Math.round((data.list[18].main.temp * 9) / 5 + 32) + "°F";

    if (data.list[18].weather[0].main == "Clear") {
      dy2Img.src = "clear.png";
      document.getElementById("su2").innerText = data.list[18].weather[0].main;
    } else if (data.list[18].weather[0].main == "Rain") {
      dy2Img.src = "rain.png";
      document.getElementById("su2").innerText = data.list[18].weather[0].main;
    } else if (data.list[18].weather[0].main == "Clouds") {
      dy2Img.src = "suuny.png";
      document.getElementById("su2").innerText = data.list[18].weather[0].main;
    }

    document.querySelector("#temp3").innerText =
      Math.round(data.list[25].main.temp) + "°C";
    document.querySelector("#temp-f3").innerText =
      Math.round((data.list[25].main.temp * 9) / 5 + 32) + "°F";

    if (data.list[25].weather[0].main == "Clear") {
      dy3Img.src = "clear.png";
      document.getElementById("su3").innerText = data.list[25].weather[0].main;
    } else if (data.list[25].weather[0].main == "Rain") {
      dy3Img.src = "rain.png";
      document.getElementById("su3").innerText = data.list[25].weather[0].main;
    } else if (data.list[25].weather[0].main == "Clouds") {
      dy3Img.src = "suuny.png";
      document.getElementById("su3").innerText = data.list[25].weather[0].main;
    }

    document.querySelector("#temp4").innerText =
      Math.round(data.list[32].main.temp) + "°C";
    document.querySelector("#temp-f4").innerText =
      Math.round((data.list[32].main.temp * 9) / 5 + 32) + "°F";

    if (data.list[32].weather[0].main == "Clear") {
      dy4Img.src = "clear.png";
      document.getElementById("su4").innerText = data.list[32].weather[0].main;
    } else if (data.list[32].weather[0].main == "Rain") {
      dy4Img.src = "rain.png";
      document.getElementById("su4").innerText = data.list[32].weather[0].main;
    } else if (data.list[32].weather[0].main == "Clouds") {
      dy4Img.src = "suuny.png";
      document.getElementById("su4").innerText = data.list[32].weather[0].main;
    }

    document.querySelector("#temp5").innerText =
      Math.round(data.list[38].main.temp) + "°C";
    document.querySelector("#temp-f5").innerText =
      Math.round((data.list[38].main.temp * 9) / 5 + 32) + "°F";

    if (data.list[38].weather[0].main == "Clear") {
      dy5Img.src = "clear.png";
      document.getElementById("su5").innerText = data.list[38].weather[0].main;
    } else if (data.list[38].weather[0].main == "Rain") {
      dy5Img.src = "rain.png";
      document.getElementById("su5").innerText = data.list[38].weather[0].main;
    } else if (data.list[38].weather[0].main == "Clouds") {
      dy5Img.src = "suuny.png";
      document.getElementById("su5").innerText = data.list[38].weather[0].main;
    }

    if (toDay === "2024-11-05 09:00:00") {
      toDate.innerText = "TUESDAY";
      document.getElementById("day1").innerText = "WEDNESDAY";
      document.getElementById("day2").innerText = "THURSDAY";
      document.getElementById("day3").innerText = "FRIDAY";
      document.getElementById("day4").innerText = "SATURDAY";
      document.getElementById("day5").innerText = "SUNDAY";
    }
  } catch (error) {
    console.log(error);
  }
}

searchBtn.addEventListener("click", () => {
  showWeather(cityName.value);
  setTimeout(() => {
    document.querySelector(".main-container").style.display = "block";
    document.querySelector(".container").style.height = "88vh";
  }, 500);
});
