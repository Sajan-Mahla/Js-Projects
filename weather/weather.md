# 🌤️ Weather App

A simple and elegant weather application built with vanilla JavaScript that provides current weather information and 7-day forecasts for any city worldwide.

## ✨ Features

- **Current Weather**: Get real-time weather data including temperature, conditions, humidity, and wind speed
- **7-Day Forecast**: Extended weather forecast with daily high/low temperatures
- **Responsive Design**: Clean, modern UI that works on all devices
- **Error Handling**: Graceful error handling for invalid cities and API issues
- **Easy to Use**: Simple search interface - just type a city name and get results


## 🛠️ Technologies Used

- **HTML5**: Structure and layout
- **CSS3**: Styling with gradients, flexbox, and modern design
- **Vanilla JavaScript**: API calls, DOM manipulation, and event handling
- **OpenWeatherMap API**: Weather data provider

## 📋 Prerequisites

- A web browser
- OpenWeatherMap API key (free tier available)
- Internet connection

## 🔧 Installation

1. **Clone or download the repository**
   ```bash
   git clone <https://github.com/Sajan-Mahla/Js-Projects>
   cd weather-app
   ```

2. **Get your API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate your API key

3. **Configure the API key**
   - Open `weather.js`
   - Replace the API_KEY value with your own:
   ```javascript
   const API_KEY = "your_api_key_here";
   ```

4. **Run the application**
   - Open `weather.html` in your web browser
   - Or use a local server like Live Server in VS Code

## 📁 Project Structure

```
weather-app/
│
├── weather.html      # Main HTML file
├── weather.css       # Stylesheet
├── weather.js        # JavaScript logic
└── README.md         # This file
```

## 🎯 How It Works

### Current Weather
1. User enters a city name and clicks "Search"
2. App makes API call to OpenWeatherMap's current weather endpoint
3. Displays temperature, weather description, humidity, and wind speed

### 7-Day Forecast
1. App first gets coordinates for the city using Geocoding API
2. Uses those coordinates to fetch forecast data from One Call API 3.0
3. Displays daily forecasts with high/low temperatures and conditions

### API Endpoints Used
- **Current Weather**: `https://api.openweathermap.org/data/2.5/weather`
- **Geocoding**: `https://api.openweathermap.org/geo/1.0/direct`
- **Forecast**: `https://api.openweathermap.org/data/3.0/onecall`

## 🎨 Styling Features

- **Gradient Background**: Beautiful blue gradient backdrop
- **Card Design**: Clean white container with shadow effects
- **Hover Effects**: Interactive button with color transitions
- **Responsive Layout**: Adapts to different screen sizes
- **Modern Typography**: Clean, readable fonts

## 🔍 Code Highlights

### Async/Await Pattern
```javascript
async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    // Handle response...
  } catch (error) {
    // Error handling...
  }
}
```

### Error Handling
The app includes comprehensive error handling for:
- Invalid city names
- Network connectivity issues
- API limitations
- Missing forecast data

