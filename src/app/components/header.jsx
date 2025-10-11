'use client'
import React from "react";

import Link from "next/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
      <header className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-4 md:py-5 bg-white shadow-sm rounded-b-2xl mx-auto relative">
        {/* 🔹 الشعار */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          <h1 className="font-bold text-lg text-gray-700">MLDRASD</h1>
        </div>

        {/* 🔹 زر القائمة للهاتف */}
        <button
          className="md:hidden absolute right-4 top-4 text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>

        {/* 🔹 روابط التنقل */}
        <ul
          className={`
            flex flex-col md:flex-row gap-4 md:gap-8 text-gray-600 font-medium w-full md:w-auto items-center
            transition-all duration-300
            ${menuOpen ? 'block' : 'hidden'}
            md:flex md:static md:bg-transparent bg-white absolute top-full left-0 md:top-auto md:left-auto z-20 md:shadow-none shadow-lg md:rounded-none rounded-b-2xl
          `}
        >
          <li className="cursor-pointer hover:text-blue-600">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            <Link href="/about">About Us</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            <Link href="/book">Booking</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            <Link href="/Appointement">Appointement</Link>
          </li>
        </ul>
      </header>
    );
}

   