import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const API_KEY = "662f38756ee3235fd1b9210dc50ecf91";

const Weather = () => {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);

  const fetchCurrentWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setCurrentWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Wrapper">
      <h1 className="AppTitle">Weather App</h1>
      <div style={{ margin: "2rem 0" }}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter a city"
          className="InputCity"
        />
        <button onClick={fetchCurrentWeather} className="GetButton">
          Get Weather
        </button>
      </div>
      {currentWeather && (
        <div className={`WeatherCard ${currentWeather.main.temp < 9
          ? "WeatherCardBlue"
          : currentWeather.main.temp > 25
          ? "WeatherCardRed"
          : ""}`}>
          <h2>
            Current Weather <br />
            in {currentWeather.name}
          </h2>
          <p>
            Temperature: <br />
            <span
              className={`ActualTemp ${
                currentWeather.main.temp < 9
                  ? "ActualTempBlue"
                  : currentWeather.main.temp > 25
                  ? "ActualTempRed"
                  : ""
              }`}
            >
              {currentWeather.main.temp} °C
            </span>
          </p>
          <p>Description: {currentWeather.weather[0].description}</p>
          <p>Humidity: {currentWeather.main.humidity}%</p>
          <div className="TemperatureFork">
            <p>Min: {currentWeather.main.temp_min} °C</p>
            <p>Max: {currentWeather.main.temp_max} °C</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
