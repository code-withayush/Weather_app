import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-6">
      <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
        Welcome to your Dashboard
      </h1>
      <p className="text-white text-lg">
        Here you can see your favorite cities and weather data.
      </p>
    </div>
  );
};

export default Dashboard;
