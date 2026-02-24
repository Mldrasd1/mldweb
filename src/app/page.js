import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Book Appointments",
      description: "Schedule your appointments in seconds with our streamlined booking form.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "View & Manage",
      description: "Browse all your appointments in a clean, organized dashboard.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: "Easy Cancellation",
      description: "Cancel or reschedule with a single click, no hassle.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: "Instant Notifications",
      description: "Get real-time toast notifications for every booking action.",
    },
  ];

  const steps = [
    { step: "01", title: "Fill the Form", description: "Enter your name, email, date/time and any notes." },
    { step: "02", title: "Confirm Booking", description: "Submit and get instant confirmation of your appointment." },
    { step: "03", title: "Manage Easily", description: "View, search, and manage all your appointments in one place." },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/backg.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
        }}
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-indigo-500/20">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Appointment Management System
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-slate-900 dark:text-white">Book Your</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">
              Appointments
            </span>
            <br />
            <span className="text-slate-900 dark:text-white">Effortlessly</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Schedule, manage, and organize your appointments all in one place.
            Designed to save your time and keep you perfectly organized.
          </p>
          <div className="flex gap-3 justify-center md:justify-start flex-wrap">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Book Appointment
            </Link>
            <Link
              href="/Appointement"
              className="inline-flex items-center gap-2 glass text-slate-700 dark:text-slate-200 font-semibold px-6 py-3 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              View Appointments
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/undraw_articles_visl.svg"
            alt="Booking illustration"
            className="w-full max-w-md drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Everything You Need</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            A complete appointment management solution packed with powerful features.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 shadow-xl shadow-black/5 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-500/30">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
        <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">How It Works</h2>
            <p className="text-slate-500 dark:text-slate-400">Get started in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px bg-gradient-to-r from-indigo-300 to-transparent dark:from-indigo-800"></div>
                )}
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center text-white font-bold text-sm mx-auto mb-4 shadow-lg shadow-indigo-500/30">
                  {step.step}
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
