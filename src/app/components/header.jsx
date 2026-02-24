"use client";
import React from "react";
import Link from "next/link";
import ThemeToggle from "./ui/ThemeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/book", label: "Booking" },
    { href: "/Appointement", label: "Appointments" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-card-strong !rounded-none !rounded-b-2xl px-4 md:px-10 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-indigo-400 rounded-xl flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-110">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <h1 className="text-lg font-bold text-foreground">MLDRASD</h1>
        </Link>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-2 rounded-xl hover:bg-primary/10 transition-colors cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-1 md:gap-2 absolute md:static left-0 right-0 top-full glass-card md:!bg-transparent md:!border-0 md:!shadow-none p-4 md:p-0 mx-2 md:mx-0 mt-1 md:mt-0 rounded-2xl`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-sm font-medium text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200 w-full md:w-auto text-center"
            >
              {link.label}
            </Link>
          ))}
          <div className="hidden md:block ml-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
