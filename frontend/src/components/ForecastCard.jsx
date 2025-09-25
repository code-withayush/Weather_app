import React from "react";

const ForecastCard = ({ day }) => {
  return (
    <div className="bg-white/30 backdrop-blur-lg p-4 rounded-xl shadow-lg text-center w-40 flex flex-col items-center">
      <p className="text-gray-100 font-semibold">{day.date}</p>
      <img
        src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
        alt="forecast-icon"
      />
      <p className="text-white font-bold">{day.temp}°C</p>
      <p className="text-gray-200 capitalize text-sm">{day.desc}</p>
    </div>
  );
};

export default ForecastCard;
