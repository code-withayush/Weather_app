import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="backdrop-blur-lg bg-white/30 p-8 rounded-3xl shadow-2xl text-center w-96 mt-6 border border-white/40 hover:scale-105 transform transition duration-300">
      <h2 className="text-3xl font-bold text-white drop-shadow-lg">
        {weather.name}, {weather.sys.country}
      </h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt="weather-icon"
        className="mx-auto drop-shadow-lg"
      />
      <p className="text-lg capitalize text-gray-100 font-medium mt-2">
        {weather.weather[0].description}
      </p>
      <p className="text-5xl font-extrabold text-white mt-2 drop-shadow-md">
        {weather.main.temp}°C
      </p>
      <div className="flex justify-between text-sm mt-6 text-gray-200 font-semibold">
        <p>💧 Humidity: {weather.main.humidity}%</p>
        <p>🌬️ Wind: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
