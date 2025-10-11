import Image from "next/image";
import AppointmentsList from "./components/apoinmentsList";
import Header from "./components/header";
import Link from "next/link";
export default function Home() {
  return (
    <>
     <section className="flex flex-col md:flex-row items-center justify-between mt-16 w-full max-w-6xl  mx-auto px-10">
      {/* 🔹 النصوص */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl font-bold text-blue-600 mb-2">Welcome</h2>
        <p className="text-gray-600 text-lg mb-6">How can we help you?</p>

        <h3 className="text-2xl font-semibold mb-3">Lets give it a try</h3>
        <p className="text-gray-500 mb-6 leading-relaxed max-w-md mx-auto md:mx-0">
          
          Book, view, and organize your appointments all in one place. Our system is designed to save you time and keep you organized, whether you're booking for yourself or managing multiple schedules.
        </p>

        <div className="flex gap-4 justify-center md:justify-start mr-auto max-w-md  ">
          <Link href="/book">
           <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full shadow hover:opacity-90 transition">
            START
          </button>
          </Link>
         
         
        </div>
      </div>

      {/* 🔹 الصورة التوضيحية */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src="/undraw_articles_visl.svg"
          alt="Booking illustration"
          className="w-[90%] max-w-md drop-shadow-lg"
        />
      </div>
    </section>

    

    
    </>
    
  );
}
