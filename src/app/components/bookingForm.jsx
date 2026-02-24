"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Card from "./ui/Card";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    note: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date || !formData.note) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post("/api/appointment", formData);
      toast.success("Booking submitted successfully!");
      setFormData({ name: "", email: "", date: "", note: "" });
    } catch (error) {
      toast.error("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/backg.avif')" }}
      />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-10">
        <div className="w-full max-w-lg page-enter">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Book an Appointment
            </h1>
            <p className="text-muted">
              Fill in the details below and we&apos;ll get you scheduled.
            </p>
          </div>

          <Card className="glass-card-strong !p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Input
                label="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="John Doe"
              />
              <Input
                label="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="john@example.com"
              />
              <Input
                label="Date & Time"
                required
                value={formData.date}
                onChange={handleChange}
                name="date"
                type="datetime-local"
              />
              <Input
                label="Additional Notes"
                as="textarea"
                required
                value={formData.note}
                onChange={handleChange}
                name="note"
                placeholder="Any special requests or notes..."
              />
              <Button
                type="submit"
                loading={loading}
                className="w-full py-3 mt-2"
              >
                {loading ? "Submitting..." : "Submit Booking"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
