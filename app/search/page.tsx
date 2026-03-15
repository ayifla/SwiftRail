"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import BookingStepper from "../../components/BookingStepper";
import TrainCard from "../../components/TrainCard";

const stations = ["Mumbai", "Delhi", "Pune", "Bangalore"];

const selectInputClass =
  "w-full min-w-0 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100";

type Train = {
  id: string;
  name: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  seatsAvailable: number;
  price: number;
};

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [loading, setLoading] = useState(true);
  const [trains, setTrains] = useState<Train[]>([]);

  const from = searchParams.get("from") ?? "";
  const to = searchParams.get("to") ?? "";
  const date = searchParams.get("date") ?? "";
  const travelClass = searchParams.get("class") ?? "";

  useEffect(() => {
    setOrigin(from);
    setDestination(to);
  }, [from, to]);

  const getDemoTrains = (): Train[] => [
    { id: "101", name: "Swift Express 101", from, to, departure: "06:30", arrival: "11:45", duration: "5h 15m", seatsAvailable: 32, price: 850 },
    { id: "202", name: "Night Rider 202", from, to, departure: "22:15", arrival: "06:05", duration: "7h 50m", seatsAvailable: 12, price: 1200 },
  ];

  useEffect(() => {
    const fetchTrains = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000"}/api/trains/search?from=${encodeURIComponent(
            from,
          )}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}&class=${encodeURIComponent(travelClass)}`,
        );
        if (!res.ok) throw new Error("Failed to fetch trains");
        const data = await res.json();
        const list = data.trains ?? [];
        setTrains(list.length > 0 ? list : getDemoTrains());
      } catch {
        setTrains(getDemoTrains());
      } finally {
        setLoading(false);
      }
    };
    if (from && to) {
      fetchTrains();
    } else {
      setLoading(false);
    }
  }, [from, to, date, travelClass]);

  const handleSearch = () => {
    router.push(
      `/search?from=${encodeURIComponent(origin)}&to=${encodeURIComponent(destination)}&date=${encodeURIComponent(
        date,
      )}&class=${encodeURIComponent(travelClass)}`,
    );
  };

  const handleBook = (trainId: string) => {
    router.push(`/booking?trainId=${encodeURIComponent(trainId)}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}&class=${encodeURIComponent(travelClass)}`);
  };

  return (
    <div className="w-full space-y-4">
      <BookingStepper currentStep={1} />
      <div className="card flex flex-wrap items-end gap-3">
        <div className="min-w-[120px] flex-1 sm:max-w-[160px]">
          <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">
            Origin
          </label>
          <select
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className={selectInputClass}
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
        <div className="min-w-[120px] flex-1 sm:max-w-[160px]">
          <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">
            Destination
          </label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className={selectInputClass}
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
        <button type="button" onClick={handleSearch} className="btn-primary shrink-0">
          Search
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-200">
            Fastest
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-200">
            Morning
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-200">
            AC only
          </span>
        </div>

        {loading && (
          <div className="space-y-2">
            <div className="card h-24 animate-pulse bg-slate-100 dark:bg-slate-900/60" />
            <div className="card h-24 animate-pulse bg-slate-100 dark:bg-slate-900/60" />
          </div>
        )}

        {!loading && trains.length === 0 && (
          <p className="text-sm text-slate-500">No trains found for this route. Try changing filters.</p>
        )}

        {!loading &&
          trains.map((train) => (
            <TrainCard
              key={train.id}
              {...train}
              onBook={() => handleBook(train.id)}
            />
          ))}
      </div>
    </div>
  );
}

