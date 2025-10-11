'use client'
import React from "react";
import SurpriseName from "./supee";

import Link from "next/link";

export default function Header() {

    return (
      <header className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-4 md:py-5 bg-white shadow-sm rounded-b-2xl mx-auto relative">
        {/* 🔹 الشعار */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          <h1 className="text-lg font-bold text-gray-700 cursor-pointer">MLDRASD</h1>
        </div>
        <ul
          className={`
            flex flex-col md:flex-row gap-4 md:gap-8 text-gray-600 font-medium w-full md:w-auto items-center
            transition-all duration-300
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

   