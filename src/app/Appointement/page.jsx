"use client";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import Modal from "../components/ui/Modal";
import Skeleton from "../components/ui/Skeleton";
import EmptyState from "../components/ui/EmptyState";

export default function AppointementPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    axios
      .get("/api/appointment")
      .then((response) => {
        setAppointments(response.data);
      })
      .finally(() => setLoading(false));
  }, []);

  function confirmDelete() {
    if (!deleteId) return;
    setDeleting(true);
    axios
      .delete(`/api/appointment?id=${deleteId}`)
      .then(() => {
        setAppointments((prev) => prev.filter((a) => a._id !== deleteId));
        toast.success("Appointment deleted successfully");
        setDeleteId(null);
      })
      .catch(() => {
        toast.error("Failed to delete appointment");
      })
      .finally(() => setDeleting(false));
  }

  const filtered = appointments.filter(
    (a) =>
      a.name?.toLowerCase().includes(search.toLowerCase()) ||
      a.email?.toLowerCase().includes(search.toLowerCase()) ||
      a.note?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-10 page-enter">
        <div className="skeleton h-10 w-64 mb-6 mx-auto" />
        <div className="space-y-4">
          <Skeleton className="h-36 w-full" count={3} />
        </div>
      </div>
    );
  }

  if (appointments.length === 0) {
    return (
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
        <EmptyState
          icon={
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          }
          title="No Appointments Yet"
          description="You haven't booked any appointments. Start by creating your first one!"
          actionLabel="Book an Appointment"
          actionHref="/book"
        />
      </div>
    );
  }

  return (
    <main className="w-full max-w-4xl mx-auto px-4 py-10 page-enter">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Your Appointments
        </h1>
        <p className="text-muted">Manage and track all your bookings.</p>
      </div>

      {/* Search */}
      <div className="mb-6 max-w-md mx-auto">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search by name, email or note..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-surface border border-border-custom text-foreground placeholder:text-muted focus-ring transition-all duration-200"
          />
        </div>
      </div>

      {/* Count */}
      <div className="flex items-center justify-between mb-4">
        <Badge>
          {filtered.length} appointment{filtered.length !== 1 ? "s" : ""}
        </Badge>
      </div>

      {/* Appointment Cards */}
      <div className="space-y-4">
        {filtered.map((appointment) => (
          <Card key={appointment._id} hover className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold text-foreground">{appointment.name}</h2>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {appointment.email}
                </span>
                {appointment.time && (
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {appointment.time}
                  </span>
                )}
              </div>
              {appointment.note && (
                <p className="mt-2 text-sm text-muted line-clamp-2">{appointment.note}</p>
              )}
            </div>
            <Button
              variant="destructive"
              onClick={() => setDeleteId(appointment._id)}
              className="shrink-0 text-xs px-4 py-2"
            >
              Delete
            </Button>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && search && (
        <div className="text-center py-12 text-muted">
          No appointments match &quot;{search}&quot;
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <Modal
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={confirmDelete}
        title="Delete Appointment"
        description="Are you sure you want to delete this appointment? This action cannot be undone."
        confirmText="Delete"
        loading={deleting}
      />
    </main>
  );
}
