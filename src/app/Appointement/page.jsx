"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

function SkeletonCard() {
  return (
    <div className="glass rounded-2xl p-6 shadow-xl shadow-black/5 animate-pulse">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-slate-200 dark:bg-white/10 rounded-xl" />
          <div>
            <div className="h-4 w-32 bg-slate-200 dark:bg-white/10 rounded mb-2" />
            <div className="h-3 w-24 bg-slate-200 dark:bg-white/10 rounded" />
          </div>
        </div>
        <div className="w-20 h-8 bg-slate-200 dark:bg-white/10 rounded-xl" />
      </div>
    </div>
  );
}

function DeleteModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative glass rounded-2xl p-6 shadow-2xl max-w-sm w-full border border-white/20 dark:border-white/10">
        <div className="w-12 h-12 bg-red-100 dark:bg-red-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white text-center mb-2">Delete Appointment</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center mb-6">
          Are you sure you want to delete this appointment? This action cannot be undone.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/25 transition-all duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AppointementPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    axios
      .get("/api/appointment")
      .then((response) => {
        setAppointments(response.data);
      })
      .catch(() => {
        toast.error("Failed to load appointments");
      })
      .finally(() => setLoading(false));
  }, []);

  const confirmDelete = (id) => setDeleteId(id);

  const handleDelete = () => {
    axios
      .delete(`/api/appointment?id=${deleteId}`)
      .then(() => {
        setAppointments((prev) => prev.filter((a) => a._id !== deleteId));
        toast.success("Appointment deleted successfully");
      })
      .catch(() => {
        toast.error("Failed to delete appointment");
      })
      .finally(() => setDeleteId(null));
  };

  const filtered = appointments.filter(
    (a) =>
      a.name?.toLowerCase().includes(search.toLowerCase()) ||
      a.email?.toLowerCase().includes(search.toLowerCase())
  );

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    try {
      return new Date(dateStr).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
      {deleteId && (
        <DeleteModal onConfirm={handleDelete} onCancel={() => setDeleteId(null)} />
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Appointments</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            {loading ? "Loading..." : `${appointments.length} appointment${appointments.length !== 1 ? "s" : ""} total`}
          </p>
        </div>
        <Link
          href="/book"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Appointment
        </Link>
      </div>

      {/* Search */}
      {!loading && appointments.length > 0 && (
        <div className="relative mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl glass border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-200"
          />
        </div>
      )}

      {/* Content */}
      {loading ? (
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
        </div>
      ) : appointments.length === 0 ? (
        <div className="glass rounded-3xl p-12 text-center shadow-xl shadow-black/5">
          <div className="w-16 h-16 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No appointments yet</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
            You have not booked any appointments. Get started by booking your first one.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            Book First Appointment
          </Link>
        </div>
      ) : filtered.length === 0 ? (
        <div className="glass rounded-2xl p-8 text-center shadow-xl shadow-black/5">
          <p className="text-slate-500 dark:text-slate-400">No appointments match your search.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map((appointment) => (
            <div
              key={appointment._id}
              className="glass rounded-2xl p-6 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-indigo-500/5 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg shadow-indigo-500/30">
                    {appointment.name?.charAt(0)?.toUpperCase() || "?"}
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-semibold text-slate-900 dark:text-white truncate">{appointment.name}</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{appointment.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => confirmDelete(appointment._id)}
                  className="flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-medium bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-500/20 hover:bg-red-100 dark:hover:bg-red-500/20 transition-all duration-200"
                >
                  Delete
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{formatDate(appointment.date)}</span>
                </div>
                {appointment.note && (
                  <div className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="truncate">{appointment.note}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
