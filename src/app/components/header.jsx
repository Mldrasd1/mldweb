'use client'

import Link from "next/link";

export default function Header() {
    return (
    <header className="w-full flex items-center justify-between px-10 py-5 bg-white shadow-sm rounded-b-2xl max-w-6xl mx-auto">
      {/* 🔹 الشعار */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        <h1 className="font-bold text-lg text-gray-700">MLDRASD</h1>
      </div>

      {/* 🔹 روابط التنقل */}
      <ul className=" flex gap-8 text-gray-600 font-medium">
        
        <Link href="/" ><li className="cursor-pointer hover:text-blue-600">Home</li></Link>
        <Link href="/about"><li className="cursor-pointer hover:text-blue-600">About Us</li></Link>
        <Link href="/book"> <li className="cursor-pointer hover:text-blue-600">Booking</li></Link>
        <Link href="/Appointement"> <li className="cursor-pointer hover:text-blue-600">Appointement</li></Link>
        
       
       
      </ul>
    </header>
  );
}

   