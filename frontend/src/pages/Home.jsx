import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="relative bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 overflow-hidden">
      {/* Floating Background Lights */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute top-40 -right-20 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-10 left-32 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
        <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 drop-shadow-2xl">
          🌤️ WeatherApp
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed">
          Your personal weather companion – Accurate, Beautiful, and Fast.
        </p>
        <div className="mt-10 flex space-x-6">
          <Link
            to="/login"
            className="px-8 py-4 rounded-xl text-lg font-semibold bg-blue-500 text-white shadow-lg hover:scale-110 transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-8 py-4 rounded-xl text-lg font-semibold bg-green-500 text-white shadow-lg hover:scale-110 transition-all duration-300"
          >
            Register
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-white/10 backdrop-blur-md relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-12">⚡ Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "🌍 Global Access", desc: "Weather updates for any city worldwide." },
            { title: "⚡ Real-Time Data", desc: "Accurate forecasts with live updates." },
            { title: "🎨 Modern Design", desc: "Clean UI with smooth animations." },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white/10 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-yellow-300 mb-3">{f.title}</h3>
              <p className="text-white opacity-90">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-12">📖 How It Works</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
            alt="Weather Illustration"
            className="w-80 mx-auto animate-bounce"
          />
          <ul className="space-y-6">
            <li className="text-white text-lg">
              <span className="font-bold text-yellow-300">Step 1:</span> Search your city.
            </li>
            <li className="text-white text-lg">
              <span className="font-bold text-green-300">Step 2:</span> Get instant updates.
            </li>
            <li className="text-white text-lg">
              <span className="font-bold text-pink-300">Step 3:</span> Plan your day smartly.
            </li>
          </ul>
        </div>
      </section>

      {/* LIVE DEMO WIDGET */}
      <section className="py-20 px-6 bg-white/10 backdrop-blur-md relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-12">🌦 Live Preview</h2>
        <div className="max-w-md mx-auto bg-white/20 p-6 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl text-yellow-300 font-bold mb-2">New Delhi</h3>
          <p className="text-white text-5xl font-bold">28°C</p>
          <p className="text-white opacity-80 mt-2">☀️ Sunny | Humidity: 45%</p>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-12">💰 Pricing Plans</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-white">Free Plan</h3>
            <p className="text-white opacity-80 mt-2">Basic weather info</p>
            <p className="text-yellow-300 font-bold text-4xl mt-6">₹0</p>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-white">Premium Plan</h3>
            <p className="text-white opacity-80 mt-2">Detailed forecasts & alerts</p>
            <p className="text-white font-bold text-4xl mt-6">₹199/mo</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-white/10 backdrop-blur-md relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-12">💬 What Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Rahul Sharma", review: "Best weather app! Always accurate." },
            { name: "Priya Verma", review: "Design is so clean & beautiful." },
            { name: "Arjun Mehta", review: "Fast and reliable, I use it daily." },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            >
              <p className="text-white italic mb-4">"{t.review}"</p>
              <h4 className="text-yellow-300 font-bold">- {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-12">❓ FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: "Is WeatherApp free to use?", a: "Yes, we offer a free plan with basic features." },
            { q: "How accurate is the data?", a: "We use trusted APIs to provide reliable forecasts." },
            { q: "Do you offer premium features?", a: "Yes, our premium plan includes detailed forecasts & alerts." },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-white/10 p-6 rounded-xl cursor-pointer"
              onClick={() => toggleFAQ(i)}
            >
              <h3 className="text-xl font-semibold text-yellow-300">{faq.q}</h3>
              {activeFAQ === i && (
                <p className="text-white mt-3">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-400 to-pink-500 text-center relative z-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">🚀 Ready to Explore?</h2>
        <p className="text-gray-800 mb-10 text-lg">
          Join WeatherApp today & get accurate forecasts instantly!
        </p>
        <Link
          to="/register"
          className="px-10 py-4 rounded-xl text-lg font-bold bg-white text-pink-600 shadow-xl hover:scale-110 transition duration-300"
        >
          Get Started
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-white/80 text-sm border-t border-white/20 py-6 relative z-10">
        © {new Date().getFullYear()} WeatherApp. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
