const API_KEY = "d49b4ab6659cefc2dcbc44830e13d23b"; // Your API key
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherDiv = document.getElementById("weather");
const forecastDiv = document.getElementById("forecast");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
    getForecast(city);
  }
});

// Fetch current weather
async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === 200) {
      weatherDiv.innerHTML = `
        <h2>Today in ${data.name} 🌍</h2>
        <p>🌡️ Temp: ${data.main.temp}°C</p>
        <p>☁️ Weather: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind: ${data.wind.speed} m/s</p>
      `;
    } else {
      weatherDiv.innerHTML = `<p>⚠️ City not found!</p>`;
    }
  } catch (error) {
    weatherDiv.innerHTML = `<p>⚠️ Error fetching weather</p>`;
  }
}

// Fetch 7-day forecast using Geocoding + One Call 3.0
async function getForecast(city) {
  try {
    // Step 1: Get latitude & longitude
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
    const geoRes = await fetch(geoUrl);
    const geoData = await geoRes.json();

    if (!geoData || geoData.length === 0) {
      forecastDiv.innerHTML = `<p>⚠️ Forecast not available (invalid city)</p>`;
      return;
    }

    const { lat, lon } = geoData[0];

    // Step 2: Fetch 7-day forecast with One Call 3.0
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    if (!data.daily) {
      forecastDiv.innerHTML = `<p>⚠️ Forecast data unavailable (check API plan)</p>`;
      return;
    }

    forecastDiv.innerHTML = `<h2>7-Day Forecast 📅</h2>`;
    data.daily.slice(1, 8).forEach(day => {
      const date = new Date(day.dt * 1000);
      forecastDiv.innerHTML += `
        <div class="forecast-day">
          <h3>${date.toDateString()}</h3>
          <p>🌡️ Day: ${day.temp.day}°C | Night: ${day.temp.night}°C</p>
          <p>☁️ ${day.weather[0].description}</p>
        </div>
      `;
    });
  } catch (error) {
    forecastDiv.innerHTML = `<p>⚠️ Error fetching forecast</p>`;
  }
}
