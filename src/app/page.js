import Link from "next/link";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";

export default function Home() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Easy Booking",
      description: "Schedule appointments in seconds with our intuitive booking form.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Manage & Track",
      description: "View all appointments at a glance, organized and easy to manage.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: "Quick Delete",
      description: "Remove outdated appointments with a single click and confirmation.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: "Instant Feedback",
      description: "Get real-time notifications on booking status and confirmations.",
    },
  ];

  const steps = [
    { num: "1", title: "Fill the Form", description: "Enter your name, email, date and notes." },
    { num: "2", title: "Submit Booking", description: "We save your appointment securely." },
    { num: "3", title: "Manage Anytime", description: "View, track or delete from your dashboard." },
  ];

  return (
    <main className="page-enter">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
        <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24 w-full max-w-6xl mx-auto px-6 md:px-10 gap-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Smart Appointment System
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Book Appointments{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
                Effortlessly
              </span>
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Book, view, and organize your appointments all in one place.
              Designed to save you time and keep you organized.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link href="/book">
                <Button className="px-8 py-3 text-base">Book Now</Button>
              </Link>
              <Link href="/Appointement">
                <Button variant="secondary" className="px-8 py-3 text-base">View All</Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center mt-8 md:mt-0">
            <img
              src="/undraw_articles_visl.svg"
              alt="Booking illustration"
              className="w-[85%] max-w-md drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 w-full max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Everything You Need
          </h3>
          <p className="text-muted max-w-xl mx-auto">
            A complete toolkit for managing your appointments with ease and style.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card key={i} hover className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                {feature.icon}
              </div>
              <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 w-full max-w-4xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            How It Works
          </h3>
          <p className="text-muted">Three simple steps to get started.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-indigo-400 text-white rounded-2xl flex items-center justify-center text-lg font-bold mx-auto mb-4 shadow-md">
                {step.num}
              </div>
              <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
              <p className="text-sm text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 w-full max-w-6xl mx-auto px-6 md:px-10">
        <Card className="!p-10 md:!p-14 text-center glass-card-strong">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted max-w-xl mx-auto mb-8">
            Join now and start managing your appointments like a pro.
          </p>
          <Link href="/book">
            <Button className="px-10 py-3 text-base">Book Your First Appointment</Button>
          </Link>
        </Card>
      </section>
    </main>
  );
}
