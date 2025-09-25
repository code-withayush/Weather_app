import React from "react";

const favoriteCities = [
  { name: "New York", temp: "25°C", weather: "Sunny ☀️" },
  { name: "Paris", temp: "18°C", weather: "Cloudy ☁️" },
  { name: "Tokyo", temp: "22°C", weather: "Rainy 🌧️" },
  { name: "Sydney", temp: "20°C", weather: "Windy 🌬️" },
];

const Favorites = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 p-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 drop-shadow-lg animate-pulse">
          🌟 Favorite Cities
        </h1>
        <p className="text-white mt-4 text-lg md:text-xl">
          Quickly access your favorite cities and their current weather conditions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {favoriteCities.map((city, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 group cursor-pointer relative overflow-hidden"
          >
            {/* Animated glow effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 opacity-20 blur-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>

            <h2 className="text-2xl font-bold text-white mb-2 relative z-10">{city.name}</h2>
            <p className="text-white text-xl mb-1 relative z-10">{city.temp}</p>
            <p className="text-white opacity-80 relative z-10">{city.weather}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300">
          Add More Favorites
        </button>
      </div>
    </div>
  );
};

export default Favorites;
