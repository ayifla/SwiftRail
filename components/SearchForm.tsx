"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const stations = ["Mumbai", "Delhi", "Pune", "Bangalore"];

const CLASSES = ["Sleeper", "3A", "2A", "1A", "Chair Car"];

const selectInputClass =
  "mt-1 w-full min-w-0 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100";

export default function SearchForm() {
  const router = useRouter();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travelClass, setTravelClass] = useState("Sleeper");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/search?from=${encodeURIComponent(origin)}&to=${encodeURIComponent(destination)}&date=${encodeURIComponent(
        date,
      )}&class=${encodeURIComponent(travelClass)}`,
    );
  };

  return (
    <form onSubmit={onSubmit} className="card flex flex-col gap-4 sm:flex-row sm:items-end sm:flex-wrap">
      <div className="min-w-[140px] flex-1 sm:max-w-[180px]">
        <label className="text-xs font-medium uppercase tracking-wide text-slate-500">Origin</label>
        <select
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className={selectInputClass}
          required
          aria-label="Origin station"
        >
          <option value="">Select origin</option>
          {stations.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="min-w-[140px] flex-1 sm:max-w-[180px]">
        <label className="text-xs font-medium uppercase tracking-wide text-slate-500">Destination</label>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className={selectInputClass}
          required
          aria-label="Destination station"
        >
          <option value="">Select destination</option>
          {stations.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="min-w-[120px]">
        <label className="text-xs font-medium uppercase tracking-wide text-slate-500">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={selectInputClass}
          required
        />
      </div>

      <div className="min-w-[120px]">
        <label className="text-xs font-medium uppercase tracking-wide text-slate-500">Class</label>
        <select
          value={travelClass}
          onChange={(e) => setTravelClass(e.target.value)}
          className={selectInputClass}
        >
          {CLASSES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Search
      </button>
    </form>
  );
}
