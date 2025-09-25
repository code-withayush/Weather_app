import React, { useState } from "react";
import axios from "axios";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; // from .env


  const getWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      setError("❌ City not found! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500">
      <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">🌤️ Weather App</h1>

      <div className="flex space-x-2 mb-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"
        />
        <button
          onClick={getWeather}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transform transition duration-300"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-white animate-pulse">⏳ Fetching weather...</p>}
      {error && <p className="text-red-100 bg-red-600/70 px-4 py-2 rounded-lg mt-2">{error}</p>}

      {weather && (
        <div className="backdrop-blur-lg bg-white/30 p-8 rounded-3xl shadow-2xl text-center w-96 mt-6 border border-white/40">
          <h2 className="text-3xl font-bold text-white drop-shadow-lg">{weather.name}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt="weather-icon"
            className="mx-auto drop-shadow-lg"
          />
          <p className="text-lg capitalize text-gray-100 font-medium">{weather.weather[0].description}</p>
          <p className="text-5xl font-extrabold text-white mt-2 drop-shadow-md">{weather.main.temp}°C</p>
          <div className="flex justify-between text-sm mt-6 text-gray-200 font-semibold">
            <p>💧 Humidity: {weather.main.humidity}%</p>
            <p>🌬️ Wind: {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
