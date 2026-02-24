"use client";
import Link from "next/link";

export default function AboutUs() {
  const techStack = [
    { name: "Next.js 15", desc: "App Router & Server Components" },
    { name: "React 19", desc: "Latest concurrent features" },
    { name: "Tailwind CSS v4", desc: "Utility-first styling" },
    { name: "MongoDB", desc: "Scalable NoSQL database" },
  ];

  const benefits = [
    { icon: "⚡", title: "Fast & Reliable", desc: "Lightning-fast performance with server-side rendering." },
    { icon: "🔒", title: "Secure", desc: "Your data is protected with industry-standard practices." },
    { icon: "📱", title: "Responsive", desc: "Works beautifully on any device." },
    { icon: "🌙", title: "Dark Mode", desc: "Easy on the eyes with full dark mode support." },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
      {/* Hero section */}
      <section className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="flex-1 flex justify-center order-2 md:order-1">
          <img
            src="/undraw_online-stats_50mk.svg"
            alt="About illustration"
            className="w-full max-w-sm drop-shadow-2xl"
          />
        </div>
        <div className="flex-1 order-1 md:order-2">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-indigo-500/20">
            Our Mission
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5 leading-tight">
            Simplifying Appointment{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">
              Management
            </span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
            We are a passionate team dedicated to making appointment management
            easy, efficient, and reliable. Our system helps users schedule,
            track, and manage their bookings in just a few clicks.
          </p>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
            Our goal is to simplify your daily operations by providing a smart
            and intuitive solution — whether you run a clinic, salon, or service
            center.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="glass rounded-2xl p-6 shadow-xl shadow-black/5 hover:-translate-y-1 transition-all duration-200">
              <div className="text-3xl mb-3">{b.icon}</div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{b.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="glass rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/5 mb-20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-10">Built With Modern Tech</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((t, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl mx-auto mb-3 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <span className="text-white font-bold text-sm">{t.name[0]}</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">{t.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Ready to Get Started?</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto">
          Join our platform and experience hassle-free appointment management today.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            Book Now
          </Link>
          <Link
            href="/Appointement"
            className="inline-flex items-center gap-2 glass text-slate-700 dark:text-slate-200 font-semibold px-6 py-3 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            View Appointments
          </Link>
        </div>
      </section>
    </div>
  );
}
