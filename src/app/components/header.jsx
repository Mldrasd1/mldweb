"use client";
import React from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-4 md:py-5 bg-white shadow-sm rounded-b-2xl mx-auto relative">
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        <h1 className="text-lg font-bold text-gray-700 cursor-pointer">
          MLDRASD
        </h1>
      </div>
      <button
        className="md:hidden absolute right-4 top-4 z-20"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-7 h-7 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          )}
        </svg>
      </button>
      <ul
        className={`
            flex flex-col md:flex-row gap-4 md:gap-8 text-gray-600 font-medium w-full md:w-auto items-center
            transition-all duration-300
            absolute md:static left-0 right-0 top-full md:top-auto bg-white md:bg-transparent shadow-md md:shadow-none rounded-b-2xl md:rounded-none
            ${menuOpen ? "flex" : "hidden"} md:flex
            z-10
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
