"use client";

import Link from "next/link";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function AboutUs() {
  const benefits = [
    { title: "Simple & Intuitive", description: "Clean interface that anyone can use without training." },
    { title: "Reliable & Fast", description: "Built on modern tech for lightning-fast performance." },
    { title: "Secure Data", description: "Your information is stored safely with industry standards." },
    { title: "Always Available", description: "Access your appointments from any device, anytime." },
  ];

  const techStack = [
    { name: "Next.js 15", desc: "App Router" },
    { name: "React 19", desc: "Latest features" },
    { name: "Tailwind v4", desc: "Utility CSS" },
    { name: "MongoDB", desc: "Database" },
  ];

  return (
    <main className="page-enter">
      {/* Hero Section */}
      <section className="py-16 md:py-24 w-full max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex justify-center">
            <img
              src="/undraw_online-stats_50mk.svg"
              alt="About our team"
              className="w-[85%] max-w-md drop-shadow-lg"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Making Appointments{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
                Simple
              </span>
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              We are a passionate team dedicated to making appointment management
              easy, efficient, and reliable. Our system helps users schedule,
              track, and manage their bookings in just a few clicks.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Our goal is to simplify your daily operations by providing a smart
              and intuitive solution — whether you run a clinic, salon, or
              service center.
            </p>
            <Link href="/book">
              <Button className="px-8 py-3">Get Started</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 w-full max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Why Choose Us
          </h3>
          <p className="text-muted max-w-xl mx-auto">
            Built with care for the best user experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <Card key={i} hover>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{b.title}</h4>
                  <p className="text-sm text-muted">{b.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-20 w-full max-w-4xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Built With Modern Tech
          </h3>
          <p className="text-muted">Powered by the latest and greatest tools.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStack.map((tech, i) => (
            <Card key={i} className="text-center !p-5">
              <h4 className="font-bold text-foreground">{tech.name}</h4>
              <p className="text-xs text-muted mt-1">{tech.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Future Improvements */}
      <section className="py-16 w-full max-w-6xl mx-auto px-6 md:px-10">
        <Card className="!p-10 md:!p-14 text-center glass-card-strong">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What&apos;s Next
          </h3>
          <p className="text-muted max-w-2xl mx-auto mb-4">
            We&apos;re constantly improving. Upcoming features include email
            reminders, calendar sync, recurring appointments, and a full
            admin dashboard.
          </p>
          <Link href="/">
            <Button variant="secondary" className="px-8 py-3">Back to Home</Button>
          </Link>
        </Card>
      </section>
    </main>
  );
}
