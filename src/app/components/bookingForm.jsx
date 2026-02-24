"use client";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    note: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Invalid email address";
    if (!formData.date) errs.date = "Date & time is required";
    if (!formData.note.trim()) errs.note = "Please add a note";
    return errs;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      toast.error("Please fix the errors before submitting.");
      return;
    }
    setLoading(true);
    try {
      await axios.post("/api/appointment", formData);
      toast.success("Appointment booked successfully! 🎉");
      setFormData({ name: "", email: "", date: "", note: "" });
      setErrors({});
    } catch (error) {
      toast.error("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border bg-white/60 dark:bg-white/5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200 ${
      errors[field]
        ? "border-red-400 dark:border-red-500 focus:ring-red-500/50"
        : "border-slate-200 dark:border-white/10"
    }`;

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 px-4"
      style={{ backgroundImage: "url('/backg.avif')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available Now
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Book an Appointment</h1>
          <p className="text-white/70 text-sm">Fill out the form below to schedule your visit</p>
        </div>

        {/* Glass Card Form */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-black/30">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-white/90 mb-1.5">Full Name</label>
              <input
                required
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className={inputClass("name")}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white/90 mb-1.5">Email Address</label>
              <input
                required
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className={inputClass("email")}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Date & Time */}
            <div>
              <label className="block text-sm font-medium text-white/90 mb-1.5">Date & Time</label>
              <input
                required
                type="datetime-local"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={inputClass("date")}
              />
              {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
            </div>

            {/* Note */}
            <div>
              <label className="block text-sm font-medium text-white/90 mb-1.5">Additional Notes</label>
              <textarea
                required
                name="note"
                placeholder="Describe what you need..."
                value={formData.note}
                onChange={handleChange}
                rows={4}
                className={`${inputClass("note")} resize-none`}
              />
              {errors.note && <p className="text-red-400 text-xs mt-1">{errors.note}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Booking...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Confirm Booking
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer note */}
        <p className="text-center text-white/50 text-xs mt-4">
          Your information is secure and will not be shared.
        </p>
      </div>
    </div>
  );
}
