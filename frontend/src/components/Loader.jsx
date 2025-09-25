import React from "react";

const Loader = ({ message }) => {
  return (
    <p className="text-white text-lg animate-pulse mt-2 text-center">
      ⏳ {message || "Loading..."}
    </p>
  );
};

export default Loader;
