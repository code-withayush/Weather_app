import React from "react";

const SearchBar = ({ city, setCity, handleSearch }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 mb-6 w-full max-w-md">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md text-gray-700"
      />
      <button
        onClick={handleSearch}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transform transition duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
