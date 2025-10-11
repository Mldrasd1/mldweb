"use client";

import { useState, useEffect } from "react";

export default function SurpriseName({ name = "Mouloud" }) {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const triggerSurprise = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setOpen(true);
    setTimeout(() => setAnimate(true), 100); // Delay for smooth animation
  };

  const closeModal = () => {
    setAnimate(false);
    setTimeout(() => setOpen(false), 400); // Wait for animation out
  };

  return (
    <>
    
      
      <button
        onClick={triggerSurprise}
        className="text-lg font-bold text-gray-700 hover:text-pink-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-pink-300 rounded-lg px-3 py-1  hover:scale-105 active:scale-95"
        style={{ letterSpacing: "0.05em" }}
      >
        {name}

     
      </button>

     
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-pink-900/60 to-indigo-700/80 backdrop-blur-md transition-opacity"
            onClick={closeModal}
          />

          <div className={`relative z-10 max-w-sm w-full bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 text-center border-4 border-pink-200 dark:border-pink-800 transition-all duration-400 ${animate ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}>
            <h2 className="text-3xl font-bold mb-3 text-pink-600 drop-shadow">مفاجأة! <span className="animate-bounce">🌹</span></h2>
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-200">هذه الوردة لك، شكراً على زيارتك موقعي!</p>
            <p className="mb-4"></p>

          
            <div
              className={`text-7xl mb-6 transition-transform duration-700 ease-out ${animate ? "scale-125 rotate-6" : "scale-0 rotate-0"}`}
              style={{ filter: "drop-shadow(0 2px 12px #f472b6)" }}
            >
              🌹
            </div>

            <button
              onClick={closeModal}
              className="mt-2 px-6 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold shadow-lg hover:from-pink-600 hover:to-indigo-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </>
  );
}
