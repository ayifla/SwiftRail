"use client";

import { useEffect, useState } from "react";

type AdminBooking = {
  id: number;
  status: string;
  total_amount: string;
  created_at: string;
  email: string;
  train_name: string;
};

export default function AdminPage() {
  const [bookings, setBookings] = useState<AdminBooking[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const token = typeof window !== "undefined" ? window.localStorage.getItem("adminToken") : null;
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000"}/api/admin/bookings`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        if (!res.ok) throw new Error("Failed");
        const data = await res.json();
        setBookings(data.bookings ?? []);
      } catch {
        setBookings([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Admin panel</h1>
        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-50 dark:bg-slate-100 dark:text-slate-900">
          Demo mode
        </span>
      </div>

      <section className="card space-y-3">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">Add train</h2>
        <p className="text-xs text-slate-500">
          In a real app this posts to `/api/admin/trains`. Keep the form short and focused.
        </p>
        <div className="grid gap-3 text-sm sm:grid-cols-2">
          <input className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:border-slate-700 dark:bg-slate-900" placeholder="Train name" />
          <input className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:border-slate-700 dark:bg-slate-900" placeholder="From station ID" />
          <input className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:border-slate-700 dark:bg-slate-900" placeholder="To station ID" />
          <input className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:border-slate-700 dark:bg-slate-900" placeholder="Departure time" />
        </div>
        <button className="btn-primary w-full sm:w-auto" type="button">
          Save train (mock)
        </button>
      </section>

      <section className="card space-y-3">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">Recent bookings</h2>
        {loading && <p className="text-xs text-slate-500">Loading...</p>}
        {!loading && bookings.length === 0 && (
          <p className="text-xs text-slate-500">No bookings yet or demo data only.</p>
        )}
        <div className="space-y-2">
          {bookings.map((b) => (
            <div key={b.id} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-xs dark:bg-slate-900">
              <div>
                <p className="font-medium text-slate-900 dark:text-slate-50">
                  {b.train_name} · ₹{b.total_amount}
                </p>
                <p className="text-slate-500">
                  {b.email} · {new Date(b.created_at).toLocaleString()}
                </p>
              </div>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                {b.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

