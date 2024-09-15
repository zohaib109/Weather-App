const inputElm = document.querySelector(".cityInput");
const searchBtnElm = document.querySelector(".searchBtn");
const apiKey = "b7dca0044f0eb374a90f630995fc19ff";

inputElm.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    showWeather();
  }
});
searchBtnElm.addEventListener("click", () => {
  showWeather();
});
const alertElm = document.querySelector(".alert");

async function showWeather() {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputElm.value}&appid=${apiKey}&units=metric`
  );
  if (data.status == 404) {
    alert("Invalid City Name");
  } else {
    const response = await data.json();

    document.querySelector(".weather").classList.remove("hidden");
    document
      .querySelector(".weatherImg")
      .setAttribute("src", `images/${response.weather[0].main}.png`);
    document.querySelector(".temp").textContent =
      Math.round(response.main.temp) + "ºC";
    document.querySelector(".city").textContent = response.name;
    document.querySelector(".humidity").textContent =
      response.main.humidity + "%";
    document.querySelector(".wind").textContent = response.wind.speed + " km/h";
    inputElm.value = "";
  }
}
