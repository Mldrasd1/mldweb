"use client";

import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="w-full  flex flex-col items-center bg-amber-200 py-20 mt-20 shadow-inner rounded-t-3xl">
      <div className="max-w-6xl px-6 md:px-10  flex flex-col md:flex-row items-center gap-10"> 
        <div className="flex-1 flex justify-center ">
          <img
            src="/undraw_online-stats_50mk.svg"
            alt="About our team"
            className="w-[90%] max-w-md drop-shadow-lg"
          />
        </div>
        <div className="flex-1 text-center md:text-left ">
          <h2 className="text-3xl font-bold text-blue-600 mb-3">About Us</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are a passionate team dedicated to making appointment management
            easy, efficient, and reliable. Our system helps users schedule,
            track, and manage their bookings in just a few clicks.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our goal is to simplify your daily operations by providing a smart
            and intuitive solution — whether you run a clinic, salon, or service
            center.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href="/">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full px-6 py-3 shadow-md hover:opacity-90 transition">
              Learn More
            </button></Link>
          </div>
        </div>
      </div>
      </div>
    
  );
}
