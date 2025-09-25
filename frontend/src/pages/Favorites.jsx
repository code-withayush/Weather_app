import React from "react";

const Favorites = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-6">
      <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
        🌟 Favorite Cities
      </h1>
      <p className="text-white text-lg">
        Add your favorite cities to see them quickly here.
      </p>
    </div>
  );
};

export default Favorites;
